import { renderToString } from 'react-dom/server';
import React from 'react';

//The HTML goes here
export default (itemToRender, locationName) => ` <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Lato|Source+Serif+Pro" rel="stylesheet">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
        <title>The Playground!</title>
    </head>
    <body>
        <div id="app">${renderToString(itemToRender)}</div>
        <script src="/static/js/compiled.js"></script>
        <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
    </body>
  </html>
`