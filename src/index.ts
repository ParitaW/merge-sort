// src/index.ts
import { merge } from "./merge";

// Sample usage
const collection1 = [1, 3, 5];
const collection2 = [2, 4, 6];
const collection3 = [9, 8, 7];

const mergedResult = merge(collection1, collection2, collection3);
console.log(mergedResult);
