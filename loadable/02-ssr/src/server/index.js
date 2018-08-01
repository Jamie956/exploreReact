import express from "express";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";
import Loadable from "react-loadable";

import { getBundles } from "react-loadable/webpack";
import stats from "./../../dist/react-loadable.json";

const app = express();

app.use(express.static("dist"));

app.get("/*", (req, res) => {
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
      <div id="root">${html}</div>
    </body>
    ${bundles
      .map(bundle => {
        return `<script src="${bundle.file}" defer></script>`;
      })
      .join("\n")}
  </html>
`);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, console.log("Listen on port 3000"));
});
