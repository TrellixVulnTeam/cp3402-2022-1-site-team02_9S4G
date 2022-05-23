# Theme Developement Overview

While you can change various functions and features of the site in-situ via Wordpress, the look, feel, and many important factors are only able to be modified by changing the theme's code. Theme changes can drastically change how the site looks and if all aspects
are displayed correctly, so be mindful of your process when applying changes (check out the [deployment.md](/deployment.md) for our local setups and how such changes should be made). Information regarding the theme, how it was created, and the major points to look
for when modifying it can be found below.

## Theme Origin

Our theme was created using [underscores](https://underscores.me/) with the additional "sassify" option. This provided a starting codebase and organising in which to proceed with development a custom theme. From there, the starter theme was modified to its current form.

## Theme Folder Overview

When looking at the site directory and repository, the theme "tsvjazz" sits within the 'wp-content/themes' area. Inside the 'tsvjazz' folder are a number of sub-folders and files important for editing and maintaining the theme. A basic overview of the folder structure,
important sub-folders and files, and their purpose to the overall theme are listed below:

- **tsvjazz** (main folder)
  - **sass** (sub-folder): the sass folder contains a number of important elements and was automatically added to the folder structure when the starter theme was "sassified" in underscores. The sass folder contains the majority of custom code that gets output to the .css file.
      - **components** (sub-folder):
      - **custom** (sub-folder): the sass custom folder was created by our developers to hold custom versions of sass starter files with our own changes added. This was done to preserve original files in case of updates or the need to recover default layouts.
          - **grunt** (sub-folder):
              - _custom_styles.css.map:
              - custom_styles.css:
              - styles_archive.css:
          - **custom_styles.scss**:
          - **custom_vars_mixins.scss**:
          - **output.css**:
      - **generic** (sub-folder):
      - **layouts** (sub-folder):
      - **plugins** (sub-folder):
      - **utilities** (sub-folder):
      - **style.scss**:
  - **footer.php**: 
  - **functions.php**:
  - **Gruntfile.js**:
  - **header.php**:
  - **index.php**:
  - **LICENSE**: The license file was created by underscores and contains a standard GNU General Public License, version 2 license. This file is necessary to have contained within the theme directory and provides information on use of the theme. This is not intended to be modified.
  - **output.css**:
  - **page.php**:
  - **screenshot.png**:
  - **search.php**:
  - **sidebar.php**:
  - **single.php**:
  - **style.css**:
  - **style-rtl.css**:

## Theme Features

When designing a theme you are able to make a number of choices regarding the features your website will have. Because of our project guidelines and information regarding the client (design and cms experience), we chose to keep to a minimalistic approach, including only a few key features.

### Two-column layout
Talk about the layout of the site?

### Sidebar
Talk about the sidebar?

### Any other features go here
And talk about them

## Design Decisions

The below list is a number of important factors of the current theme and our justification for designing them in that way. Also included is the location/file at which point these decisions could be later modified.

### Structure

Talk about structure variables, layout, sidebar?, other things, and justify why we chose them. Include important files and variables to make changes.

### Typography

Talk about our choice of font, font size, spacing, etc , reasoning for it, and important files. Something like:

**Font Used**: X, we chose X font because Y. You can change the font using the X variable in the Z file, located here: _______.

### Colours

Talk about our choice of colours, why we chose them, variables to change if you need to change the colour, important files within file structure, etc

### Any other important sections