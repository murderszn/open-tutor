# Security and Privacy Reporting

## Scope

Report exposed credentials, learner-identifying information, unsafe access to private records, or vulnerabilities in this repository's HTML tools and hosting configuration. Maintainers review the current default branch; older copies and deployments may require separate fixes.

## Report Privately

Do not include credentials, learner records, identifying screenshots, or exploitable details in a public issue or pull request.

If the repository's Security tab offers **Report a vulnerability**, use that private channel. Private vulnerability reporting was disabled when this policy was added. If that option is unavailable, contact the [repository owner](https://github.com/murderszn) through a private contact channel they explicitly publish. If no private channel is available, open an issue requesting a confidential reporting channel without disclosing the finding, affected individuals, credentials, or exploit steps. Wait for a private channel before sending sensitive evidence.

In a private report, include the affected public file or page, a minimal reproduction using synthetic data, the impact, and any proposed correction. Share only the information necessary to understand the issue. Response and resolution times depend on maintainer availability.

## Containment

An authorized owner should revoke or rotate exposed credentials and restrict affected private resources. Removing a file from the current branch does not remove it from earlier commits, forks, caches, or deployments. Coordinate any history cleanup with maintainers rather than force-pushing independently.

For curriculum inaccuracies or broken public links that disclose no sensitive information, use a normal GitHub issue. Follow the [public content review](docs/content-review.md) when preparing a correction.
