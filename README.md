## admin-dashboard
[![npm](https://img.shields.io/npm/v/immer.svg)](https://www.npmjs.com/package/immer) [![Build Status](https://travis-ci.org/immerjs/immer.svg?branch=master)](https://travis-ci.org/immerjs/immer) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This is an admin dashboard to manage products, transactions, performance and sales info with yearly, monthly, and daily breakdowns. Users can also get information about their customers and their geographical information.

## Table of Contents
- [Demo](#demo)
- [Screeshots](#screenshots)
- [Installation and Set up](#installation)
  - [Server](#server-briefcase)
  - [Client](#client-ribbon)
- [File Structure](#file-structure)
- [Features](#basic-props)
  - [children](#children)
  - [itemToString](#itemtostring)
  - [onChange](#onchange)
  - [stateReducer](#statereducer)
- [Technologies used](#technologies-used)
- [Contribute](#contribute)

# Demo
#### [Live link](https://admin-dashboard-6p1s.onrender.com/). 

The server is hosted on render.com. Since it is on a free plan, it takes some time to load. Thank you for your patience. Also, find the video demo link [here](#).

## Screenshots

<img width="1512" alt="Screen Shot 2023-01-15 at 11 56 09 AM" src="https://user-images.githubusercontent.com/62855279/212554811-6c6fff0e-4264-4cb3-bda3-da9c3cbd9dc0.png">


See more screen shots [here]()

## Installation

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

### Server :briefcase:
Open a terminal and cd to the server folder.

Installation:

`npm install`  

To Start Server:

`npm start dev` 

At this point you should see """ server running on: 5001""".

To visit api endpoints:

`localhost:5001/{endpoints}` 

### Client :ribbon:

Once you have the server running, open another terminal and go into the client folder

Installation:

`npm install`  

To Start Server:

`npm start dev` 

To Visit App:

`localhost:3000`  

<!--## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

#### Example:  

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process. -->

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
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

# Technologies used

Front-end: [React](reatjs.org), [Material UI](mui.com), [Nivo](https://nivo.rocks/).

Backend: [Node](https://nodejs.org/en/), Express(https://expressjs.com/), [MongoDb](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)

# Contribute
Feel free to create a pull request to contribute. You can also reach out to me at stesfatsionmulugeta@gmaiil.com

