# Youtube-Streaming-Service

Web-page that retrieves a list of Youtube search results and displays them in a styled list.
The results should be displayed on the page as a styled list including title, description, and an image for each result.
The application is based on https://github.com/paullucas/youtube-search

## Architecture Diagram

![](https://raw.githubusercontent.com/kargov/youtube-streaming/master/youtube-streaming.png)

## Technology Stack

* REACT
* JEST

### Install Dependencies

The project is prefigured with `npm` to automatically run `webpack` so simply do:

```
npm install
```

The result will be

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

Please update src/index.js with your YOUTUBE API KEY

The project is prefigured with a simple development web server. The simplest way to start
this server is:

```
npm start
```

### Running End-to-End Tests

The `Youtube-Streaming-Service` app comes with JEST tests. These tests can be run by

```
npm test
```