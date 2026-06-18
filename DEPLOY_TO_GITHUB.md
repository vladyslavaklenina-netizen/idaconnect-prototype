# Publish This Prototype With GitHub Pages

Use this when you want to share the IDAConnect prototype as a normal web link.

## Recommended Setup

- Repository name: `idaconnect-prototype`
- Visibility: public if you want the simplest GitHub Pages link
- Source: `main` branch, root folder

## Browser Upload Steps

1. Go to https://github.com/new
2. Create a new repository named `idaconnect-prototype`.
3. Choose `Public` for the simplest shareable link.
4. Do not add a README, .gitignore, or license on GitHub.
5. After the repository is created, choose `uploading an existing file`.
6. Upload the contents of this folder, not the outer parent folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - `assets/`
   - `README.md`
   - `design-qa.md`
7. Commit the uploaded files.
8. Open repository `Settings`.
9. Go to `Pages`.
10. Under `Build and deployment`, set:
    - Source: `Deploy from a branch`
    - Branch: `main`
    - Folder: `/root`
11. Save.

GitHub usually publishes the site in 1-3 minutes. The link will look like:

`https://YOUR-USERNAME.github.io/idaconnect-prototype/`

## Note About Privacy

Public GitHub Pages links are easy to share, but anyone with the link can open them. If the prototype should stay private, use a private repository and add your boss as a collaborator. Private GitHub Pages availability depends on the GitHub plan.
