'use strict';

const internalapi = require("../build/Release/addon");
const clone = require("lodash.clone");


/**
 * Rectangle
 * 
 * @typedef {Object} Rectangle
 * @property {number} top
 * @property {number} bottom
 * @property {number} right
 * @property {number} left
 */

/**
 * Window Size
 * @typedef {Object} WindowSize 
 * @property {number} width Window width
 * @property {number} height Window height
 */

/**
 * Gets the Windows Bounds for a given Window Name.
 * Returns null if window not found.
 * 
 * @param {string} name - Window name
 * @returns {Rectangle|null} Rectangle
 * 
 * @throws {TypeError} Wrong Number of Arguments
 * @throws {TypeError} Window name is not a string
 * @throws {Error} Failed to get Window Bounds
 */
function getWindowCoords(name){
    const rect_internal = internalapi.getWindowCoords(name);

    // Hopefully prevent the object from not being garbage collected ...
    const rect = clone(rect_internal);

    return rect;
}

/**
 * Gets the size of a specific Window
 * @param {string} name Window name 
 * @throws {TypeError} Window name is not a string
 * @throws {Error} Failed to get Window Bounds
 * @returns {WindowSize|null} Size of the Window
 */
function getWindowSize(name){
    const rect = getWindowCoords(name);

    if(rect === null){
        return null;
    }

    const size = {
        width: rect.right - rect.left,
        height: rect.bottom - rect.top,
    }
    
    return size;
}


module.exports = {
    getWindowCoords,
    getWindowSize
}