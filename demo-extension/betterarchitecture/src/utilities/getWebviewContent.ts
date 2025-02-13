import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
    const indexPath = vscode.Uri.joinPath(extensionUri, 'views','index.html');

    let html = fs.readFileSync(indexPath.fsPath, 'utf8');
    // Replace placeholders with actual URIs

    html = html.replace("{baseUri}", webview.asWebviewUri(extensionUri).toString());

    console.log(html);    

    return html;
}
