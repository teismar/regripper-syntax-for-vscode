const vscode = require("vscode");

function activate(context) {
    const symbolProvider = vscode.languages.registerDocumentSymbolProvider(
        { language: "regripper" },
        {
            provideDocumentSymbols(document) {
                const symbols = [];
                const sectionHeaderRegex = /^----------------------------------------$/; // Seperator Regex
                const pluginRegex = /^[a-zA-Z0-9]+ v\.\d{8}/; // Plugin regex
                const keyValueRegex = /^([\w\s\/\-]+)\s*=\s*(.*)$/; // Parent key regex
                const indexedValueRegex = /^\s*(\d+)\s*=\s*(.*)$/; // Indexed sub-value regex

                let currentSection = null;
                let currentKey = null;

                for (let i = 0; i < document.lineCount; i++) {
                    const line = document.lineAt(i);

                    // Match section header
                    if (sectionHeaderRegex.test(line.text)) {
                        // Finalize the previous section
                        if (currentSection) {
                            symbols.push(currentSection);
                            currentSection = null;
                        }

                        // Look ahead to get the next line for naming
                        const nextLine =
                            i + 1 < document.lineCount
                                ? document.lineAt(i + 1).text.trim()
                                : null;

                        if (nextLine && !sectionHeaderRegex.test(nextLine)) {
                            // Create a new section with the next line's first 30 characters as the name
                            currentSection = new vscode.DocumentSymbol(
                                nextLine.slice(0, 30),
                                "Section",
                                vscode.SymbolKind.Class, // Use the package symbol kind for unnamed sections
                                line.range,
                                line.range
                            );
                            i++; // Skip the next line since it is used as the section name
                        } else {
                            currentSection = null; // Ignore if no valid next line
                        }

                        currentKey = null; // Reset the current key
                        continue;
                    }

                    // Match plugin name
                    if (pluginRegex.test(line.text)) {
                        if (currentSection) {
                            currentSection.name = line.text.trim();
                            currentSection.kind = vscode.SymbolKind.Class; // Use the package symbol kind for plugin sections
                            currentSection.range = line.range;
                            currentSection.selectionRange = line.range;
                        }
                    }

                    // Match key-value pairs (parent keys)
                    const keyValueMatch = line.text.match(keyValueRegex);
                    if (keyValueMatch) {
                        if (currentSection) {
                            currentKey = new vscode.DocumentSymbol(
                                keyValueMatch[1].trim(),
                                keyValueMatch[2].trim(),
                                vscode.SymbolKind.Property,
                                line.range,
                                line.range
                            );
                            currentSection.children.push(currentKey);
                        }
                        continue;
                    }

                    // Match indexed sub-values
                    const indexedValueMatch = line.text.match(indexedValueRegex);
                    if (indexedValueMatch && currentKey) {
                        const childSymbol = new vscode.DocumentSymbol(
                            indexedValueMatch[1].trim(),
                            indexedValueMatch[2].trim(),
                            vscode.SymbolKind.Variable,
                            line.range,
                            line.range
                        );
                        currentKey.children.push(childSymbol);
                    }
                }

                // Finalize the last section
                if (currentSection) {
                    symbols.push(currentSection);
                }

                return symbols;
            },
        }
    );

    context.subscriptions.push(symbolProvider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
