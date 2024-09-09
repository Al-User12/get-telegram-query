# Telegram query_id / user Data Copier

A JavaScript tool that searches for URL-encoded `query_id` or `user` data in `sessionStorage` and copies it to the clipboard. It uses `document.execCommand('copy')` to handle the clipboard copying.

## What This Code Do

- Finds `query_id` or `user` from `sessionStorage`.
- Copies the found data to the clipboard.
- Displays the data in the console if the copy operation fails.

## How to Use

1. **Open Telegram Developer Tools**:
   Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) or by right-clicking anywhere on the page and selecting "Inspect" 

2. **Load and Run the Script**:
   - Copy all code in the `query.js` script to the browser console 
   
