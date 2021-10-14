const assert = require('assert');
const logic = require('../dist/logic')

describe("Index", () => {
    it("Application should return 21dcBA", () => {
        assert.equal(logic("abCD12"), "21dcBA")
    })
})