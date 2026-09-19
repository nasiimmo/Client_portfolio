# Portfolio website

A simple, free portfolio site. Everything lives in `index.html`; photos live in the `images` folder.

## First-time edits (top of the script in index.html)
Change these two lines to the real name and email:

    var NAME='Your Name';
    var EMAIL='hello@example.com';

## Add photos to a project
1. Upload the photo into the `images` folder.
2. In `index.html`, find the project and add the file names, in slide order:

       images:['pipe-climber-01.jpg','pipe-climber-02.jpg'],

The first image is also the cover shown on the homepage. Slides with no image keep the grey placeholder.

## Add a new project
Copy a whole project block in the `PROJECTS` list (from `{slug:` to the closing `}`), paste it after a comma,
then change the text. Give it a new `slug` (lowercase, no spaces) and a category in `cat`.
If you use a new category, add it to the `CATS` line below the list.

## Publish
Commit your changes on GitHub. The site updates within a minute or two.
