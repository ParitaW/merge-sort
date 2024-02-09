"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2, collection3) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1; // Start from the end of collection3
    while (i < collection1.length && j < collection2.length && k >= 0) {
        const minVal = Math.min(collection1[i], collection2[j], collection3[k]);
        result.push(minVal);
        if (minVal === collection1[i]) {
            i++;
        }
        else if (minVal === collection2[j]) {
            j++;
        }
        else {
            k--;
        }
    }
    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }
    while (k >= 0) {
        result.push(collection3[k]);
        k--;
    }
    return result; // Reverse the result to correct the order
}
exports.merge = merge;
