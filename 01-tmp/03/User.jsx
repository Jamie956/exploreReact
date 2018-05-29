import React, { Component } from "react";
import { EventEmitter } from "events";

export class User extends EventEmitter {
  constructor() {
    super();
    this.users = [
      {
        id: 1,
        name: "tom"
      },
      {
        id: 2,
        name: "Will"
      }
    ];
  }

  add(name) {
    const id = Date.now();
    this.users.push({
      id,
      name
    });
    this.emit("change");
  }

  findAll() {
    return this.users;
  }
}
