"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const merge_1 = require("./merge");
// Sample usage
const collection1 = [1, 3, 5];
const collection2 = [2, 4, 6];
const collection3 = [9, 8, 7];
const mergedResult = (0, merge_1.merge)(collection1, collection2, collection3);
console.log(mergedResult);
