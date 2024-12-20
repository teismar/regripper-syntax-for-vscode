# RegRipper Language Support

**RegRipper Language Support** is a Visual Studio Code extension that provides syntax highlighting, outline navigation, and enhanced readability for RegRipper output files. Designed for forensic analysts and incident responders, this extension makes it easy to analyze registry artifacts extracted by RegRipper.

## Features

- **Syntax Highlighting**:
  - Clear and distinct highlighting for timestamps, registry keys, hive names, and plugin information.
  - Unique color for timestamps to ensure they stand out.
  
- **Outline Navigation**:
  - Automatically parse and organize sections for quick navigation using the VS Code outline.
  - Support for both named sections (e.g., plugin names) and unnamed sections.

- **Error and Warning Detection**:
  - Highlights `[WARNING]` and `[ERROR]` messages for easy identification of issues.

- **Key-Value Pair Parsing**:
  - Identifies and separates keys, values, and indexed entries for better readability.

### Screenshot
Syntax highlighting and outline in action:

![img/screenshot.png](https://github.com/teismar/regripper-syntax-for-vscode/blob/main/img/screenshot.png?raw=true)
---

## Requirements

No additional dependencies are required to use this extension.

---

## Extension Settings

This extension does not add any configurable settings currently.

---

## Known Issues

- No known issues at the moment. Please report any bugs or feature requests through the [GitHub Issues](https://github.com/teismar/regripper-syntax-for-vscode/issues) page.

---

**Enjoy analyzing your RegRipper outputs efficiently with this extension!**