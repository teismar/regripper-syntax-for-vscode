# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2024-11-26

### Added
- Initial `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) standard.
- Syntax highlighting for:
  - Section headers
  - Plugin information
  - Key-value pairs
  - Indexed values
  - Registry paths and hive names
  - Timestamps with a unique color
- Support for outline navigation:
  - Named and unnamed sections.
  - Nested key-value pairs under sections in the outline.
- Highlighting for `[WARNING]` and `[ERROR]` messages.
- README file explaining features and usage.
- `icon.png` for the extension.
- Unique TextMate scopes for elements like timestamps and hive names.
- Support for `.regripper` files.
- Added scripts to package and deploy

### Changed
- Improved modular grammar structure for better maintenance and scalability.
- Enhanced regular expressions to match more detailed key-value pairs, including keys with spaces and special characters.

### Fixed
- Resolved issues with outline entries appearing at the wrong level.
- Ensured timestamps have unique, non-colliding colors.

