### Client :ribbon:

Once you have the server running, open another terminal and go into the client folder

Installation:

`npm install`  

To Start Server:

`npm start dev` 

To Visit App:

`localhost:3000`  

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `scene` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `.gitignore` - Tells git which files to ignore
- #### `jsonconfig.json` - Defines the import structure of files
- #### `README` - This file!
