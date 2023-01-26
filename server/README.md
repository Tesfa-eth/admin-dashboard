### Server :briefcase:
Open a terminal and cd to the server folder.

Installation:

`npm install`  

To Start Server:

`npm start dev` 

At this point you should see """ server running on: 5001""".

To visit api endpoints:

`localhost:5001/{endpoints}` 

#### `server` - Holds the server application
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - Defines mongoose configuration and connect to database as well as base routes.
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
