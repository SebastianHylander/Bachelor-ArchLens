// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { getWebviewContent } from './utilities/getWebviewContent';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
        vscode.commands.registerCommand('betterarchitecture.openWebview', () => {
            const panel = vscode.window.createWebviewPanel(
                'myWebview',
                'My Webview',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'graph-webview')],
                }
            );

            panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);
        })
    );

	/*
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "betterarchitecture" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('betterarchitecture.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from BetterArchitecture!');
	});

	context.subscriptions.push(disposable);
	*/

}

// This method is called when your extension is deactivated
export function deactivate() {}
