"use strict";
const { merge } = require("../src/merge");
describe("merge function", () => {
    it("should merge three sorted collections", () => {
        const collection1 = [1, 3, 5];
        const collection2 = [2, 4, 6];
        const collection3 = [9, 8, 7];
        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
