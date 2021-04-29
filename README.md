# Kirby CMS & Tailwind CSS boilerplate
I just add Tailwind CSS to the Kirby Plainkit starter pack. With Purge via PostCSS and Kirby as submodule. 
More coming soon.

## Generate Tailwind
    npm run build
Run this command for a non-minified and non-purged dev version of your stylesheet. Source for the stylesheet is site/tailwind/tailwind.css, destination is assets/style.css

    npm run watch
Starts the watch mode for local development. Simply runs the build task automatically as soon as you change something on your site/tailwind/tailwind.css

    npm run prod
Like the "build" commmand but runs the postcss processes along with the stylesheet generation. It purges and minifies the outputed assets/style.css file

## Credits
- **[getkirby.com](https://getkirby.com)** – Flat file PHP CMS.
- **[tailwindcss.com](https://tailwindcss.com/)** – THE utility first framework.
