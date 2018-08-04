import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import path from "path";
import Loadable from "react-loadable";
const app = express();

app.use("/dist", express.static(path.resolve("dist")));

//获取加载的组件
app.get("/", (req, res) => {
  let modules = [];

  let html = renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  console.log(modules);

  res.send(html);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, console.log("Listen on port 3000"));
});
