# Test PDF Environment Variable

This is a test page to verify PDF_VIEW environment variable.

## Debug Information

- PDF_VIEW should be hidden when generating PDFs
- Language switcher should not appear when PDF_VIEW=true
- Download button should not appear when PDF_VIEW=true

## Current Server

The dev server is running with PDF_VIEW=true (if started correctly).

## To Test:

1. Visit http://localhost:4323/ (or whatever port the dev server is using)
2. View page source or inspect element
3. Look for the HTML comment showing PDF_VIEW values
4. If PDF_VIEW is working, you should NOT see:
   - Language switcher in top-right
   - Download button below language switcher
   - Background colors (bg-indigo-50 or dark:bg-slate-900)
   - Margin classes (sm:my-14)