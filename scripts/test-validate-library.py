#!/usr/bin/env python3
"""Focused regression checks for validate-library.py."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

SCRIPT = Path(__file__).with_name('validate-library.py')
SPEC = importlib.util.spec_from_file_location('validate_library', SCRIPT)
validator = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(validator)


class LibraryValidatorTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        validator.ROOT = Path(self.temp.name).resolve()
        validator.errors.clear()

    def tearDown(self):
        validator.errors.clear()
        self.temp.cleanup()

    def test_missing_local_link_is_reported(self):
        source = validator.ROOT / 'page.md'
        source.write_text('page', encoding='utf-8')
        validator.validate_reference(source, 'missing.md', {})
        self.assertTrue(any('missing local link' in error for error in validator.errors))

    def test_missing_same_repository_github_link_is_reported(self):
        source = validator.ROOT / 'site/index.html'
        source.parent.mkdir()
        source.write_text('page', encoding='utf-8')
        validator.validate_reference(
            source,
            'https://github.com/murderszn/open-tutor/blob/main/missing.md',
            {}
        )
        self.assertTrue(any('missing same-repository GitHub link' in error for error in validator.errors))

    def test_cross_grade_local_link_is_reported(self):
        source = validator.ROOT / 'curriculum/grade-4/README.md'
        target = validator.ROOT / 'curriculum/grade-5/README.md'
        source.parent.mkdir(parents=True)
        target.parent.mkdir(parents=True)
        source.write_text('source', encoding='utf-8')
        target.write_text('target', encoding='utf-8')
        validator.validate_reference(source, '../grade-5/README.md', {})
        self.assertTrue(any('cross-grade curriculum link' in error for error in validator.errors))

    def test_cross_grade_github_link_is_reported(self):
        source = validator.ROOT / 'curriculum/grade-4/README.md'
        target = validator.ROOT / 'curriculum/grade-5/README.md'
        source.parent.mkdir(parents=True)
        target.parent.mkdir(parents=True)
        source.write_text('source', encoding='utf-8')
        target.write_text('target', encoding='utf-8')
        validator.validate_reference(
            source,
            'https://github.com/murderszn/open-tutor/blob/main/curriculum/grade-5/README.md',
            {}
        )
        self.assertTrue(any('cross-grade curriculum link' in error for error in validator.errors))

    def test_manifest_must_cover_existing_curriculum_files(self):
        curriculum = validator.ROOT / 'curriculum'
        curriculum.mkdir()
        (curriculum / 'README.md').write_text('# Track', encoding='utf-8')
        (curriculum / 'manifest.json').write_text('{"format_version":1,"files":[]}', encoding='utf-8')
        validator.validate_manifest()
        self.assertTrue(any('missing from manifest: README.md' in error for error in validator.errors))

    def test_public_learner_paths_are_rejected_but_template_is_allowed(self):
        self.assertTrue(validator.is_public_student_path('students/learner/README.md'))
        self.assertFalse(validator.is_public_student_path('students/student-template/README.md'))

    def test_binary_assets_are_not_decoded_as_text(self):
        self.assertFalse(validator.is_text_file(Path('site/assets/diagram.png')))
        self.assertTrue(validator.is_text_file(Path('site/index.html')))

    def test_csv_rows_must_match_header_width(self):
        path = validator.ROOT / 'schedule.csv'
        path.write_text('Week,Study Area,Task,Status\n1,Math,Practice\n', encoding='utf-8')
        validator.validate_csv(path)
        self.assertTrue(any('row 2 has 3 columns; expected 4' in error for error in validator.errors))


if __name__ == '__main__':
    unittest.main()
