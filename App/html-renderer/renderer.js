import { renderToString } from 'react-dom/server';
import React from 'react';

//The HTML goes here
export default (itemToRender, locationName) => ` <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${locationName !== null || locationName !== '/' ? locationName : 'The Playground!'}</title>
    </head>
    <body>
        <div id="app">${renderToString(itemToRender)}</div>
        <script src="/static/js/compiled.js"></script>
    </body>
  </html>
`