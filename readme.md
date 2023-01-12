# Cryptolayer

Prototype, design and text content was made from scratch at Figma. [View template]()

Consist of seven pages:
* Main
* About
* Faq

All pages have 3 adaptive versions.

## Features

* Currency rate widget

## Usage

I use an Gulp-based build. First of all, open project in [VS Code](https://code.visualstudio.com). After that, open terminal.

If you do not have Gulp installed, write the commands:

```bash
  npm i gulp -D

  npm i gulp-cli -D
```

After that, install dependencies:

```bash
  npm i
```

For start the project in development mode:

```bash
  gulp
```

If the project is finished, minify the code and images, use command:

```bash
  gulp --production
```

### Troubleshooting

1. Set VS Code to run as an administrator [Click](https://qastack.ru/programming/37700536/visual-studio-code-terminal-how-to-run-a-command-with-administrator-rights)
2. **Node JS v12** and **Gulp v4** is required to work correctly (NodeJS v12.12 and Gulp v4.0.1 is based version).
3. **npm rebuild** - if not all packages are installed after **npm i** command.
4. **npm cache verify** - If after restarting, build doesn't catch changes "on the fly".

### Folder structure

**src** - source folder.

**dist** - project bundle.

```
project
│   readme.md
│   package.json 
|   package-lock.json
|   gulpfile.js
|   .gitignore
|
└───src
│   └───fonts                     # Fonts in .ttf, .otf format
|
│   └───img                       # All images
|   |   └───...    
│   └───js                        # All .js files
|   |   └───...    
|   └───scss                      # All .scss files
|       └───base                  # Basic stylisation files (vars, null, fonts etc.)
|       └───components            # Components styles
|       └───pages                 # Pages styles
|       |   style.scss            # For import all styles
│   
└───dist                          # Project bundle
|   └───css
|   └───fonts
|   └───img
|   └───js
|   *.html
|
└───node_modules
    └───...
```
