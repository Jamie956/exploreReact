import express from "express"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'
import Loadable from 'react-loadable';

import { getBundles } from 'react-loadable/webpack'
import stats from './../../dist/react-loadable.json';

const app = express()

app.use(express.static("public"))

app.get("/test1", (req, res, next) => {
  const markup = renderToString(<App />)
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.get('/test2', (req, res) => {
  let modules = [];

  let html = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  res.send(`
  <!doctype html>
  <html lang="en">
    <body>
      <div id="app">${html}</div>
      ${bundles.map(bundle => {
        return `<script src="${bundle.file}" defer></script>`
      }).join('\n')}
    </body>
  </html>
`);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});