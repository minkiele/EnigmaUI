# EnigmaUI
A ReactJS User Interface for Enigma Machine

## ES5 and CommonJS

The `dist` directory has been transpiled for ES5 and to support a CommonJS environment.

    BABEL_ENV=ES5-CJS node_modules/.bin/babel -d dist src/Enigma

Or in a gulp fashion
    
    gulp transpile