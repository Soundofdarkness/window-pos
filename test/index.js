const assert = require("assert");
const windowPos = require("../index");

const window = process.env.TEST_WINDOW || "Untitled - Notepad";

describe("WindowPos", function(){

    describe("#getWindowCoords", function(){
        it("should return null if window is not found", function(){
            assert.strictEqual(windowPos.getWindowCoords("000111232320"), null);
        });

        it("should throw TypeError if the parameter given is not a string", function(){
            assert.throws(function(){
                windowPos.getWindowCoords(34543);
            });
        });

        it("should return a rectangle if window is found", function(){
            if(process.env.CI) {
                this.skip();
            }
            const wPos = windowPos.getWindowCoords(window);
            assert.notStrictEqual(wPos, null);
        });
    })

    describe("#getWindowSize", function(){
        it("should return null if window is not found", function() {
            assert.strictEqual(windowPos.getWindowSize("0400432043204"), null);
        });

        it("should throw TypeError if parameter given is not a string", function(){
            assert.throws(function(){
                windowPos.getWindowSize(3424243);
            });
        });

        it("should return a size object if window is found", function(){
            if(process.env.CI) {
                this.skip();
            }
            const wSize = windowPos.getWindowSize(window);
            assert.notStrictEqual(wSize, null);
        });
    })
})