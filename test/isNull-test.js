var test = require("tape"),
    isNull = require("../src/index");


test("isNull", function(t) {

    t.equal(isNull(null), true, "null returns true");


    t.equal(isNull(undefined), false, "undefined returns false");
    t.equal(isNull(NaN), false, "NaN returns false");
    t.equal(isNull(14), false, "number returns false");
    t.equal(isNull(true), false, "boolean returns false");
    if (typeof(Symbol) !== "undefined") {
        t.equal(isNull(Symbol("foo")), false, "symbol returns false");
    }
    t.equal(isNull("string"), false, "string returns false");

    t.equal(isNull(/regexp/), false, "regexp returns false");
    t.equal(isNull([1, 2, 3]), false, "array returns false");
    t.equal(isNull({
        foo: "foo"
    }), false, "object returns false");
    t.equal(isNull(function() {}), false, "function returns false");

    t.end();

});
