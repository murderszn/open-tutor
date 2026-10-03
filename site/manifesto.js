(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  var specimens = document.querySelector('.hero-specimens');
  var composition = document.querySelector('.hero-composition');
  var atlas = document.querySelector('.hero-atlas');
  var welcome = document.querySelector('.hero-welcome');
  function verticalPadding(element) {
    var style = window.getComputedStyle(element);
    return parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  }
  function fitHero() {
    var chromeHeight = header.getBoundingClientRect().height;
    hero.style.setProperty('--opening-chrome-height', chromeHeight + 'px');
    var contentHeight = verticalPadding(hero) + verticalPadding(composition) + atlas.getBoundingClientRect().height + welcome.getBoundingClientRect().height + specimens.getBoundingClientRect().height + 24;
    hero.style.setProperty('--opening-content-height', contentHeight + 'px');
  }
  fitHero();
  if ('ResizeObserver' in window) {
    var openingObserver = new ResizeObserver(fitHero);
    openingObserver.observe(header);
    openingObserver.observe(specimens);
    openingObserver.observe(atlas);
    openingObserver.observe(welcome);
  } else {
    window.addEventListener('resize', fitHero);
  }
  function initExamplePicker(attribute, choicesId, onSelect) {
    var examples = Array.from(document.querySelectorAll('[' + attribute + ']'));
    var choices = document.getElementById(choicesId);
    if (!choices || !examples.length) return;
    var announcement = document.createElement('p');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    choices.after(announcement);
    examples.forEach(function (example, index) {
      var button = document.createElement('button');
      button.type = 'button';
      var number = document.createElement('span');
      number.textContent = '0' + (index + 1);
      number.setAttribute('aria-hidden', 'true');
      button.append(number, document.createTextNode(example.getAttribute(attribute)));
      button.setAttribute('aria-pressed', String(index === 0));
      button.setAttribute('aria-controls', example.id);
      button.addEventListener('click', function () {
        examples.forEach(function (panel, panelIndex) {
          panel.hidden = panel !== example;
          choices.children[panelIndex].setAttribute('aria-pressed', String(panel === example));
        });
        if (onSelect) onSelect(example);
        announcement.textContent = 'Showing example: ' + example.getAttribute(attribute) + '.';
      });
      choices.appendChild(button);
    });
    if (onSelect) onSelect(examples[0]);
  }
  initExamplePicker('data-example', 'picks');
  initExamplePicker('data-repo-view', 'repo-choices', function (view) {
    var usedFolders = view.dataset.repoUses.split(' ');
    document.querySelectorAll('[data-repo-folder]').forEach(function (folder) {
      folder.classList.toggle('is-relevant', usedFolders.includes(folder.dataset.repoFolder));
    });
  });

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    var resetTimer;
    button.hidden = false;
    button.setAttribute('aria-live', 'polite');
    button.addEventListener('click', async function () {
      clearTimeout(resetTimer);
      try {
        await navigator.clipboard.writeText(button.getAttribute('data-copy'));
        button.textContent = 'Copied';
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(button.previousElementSibling);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Select and copy';
      }
      resetTimer = setTimeout(function () { button.textContent = 'Copy address'; }, 2000);
    });
  });
})();
