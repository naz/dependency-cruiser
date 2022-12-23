const { deepEqual } = require("assert");

/**
 *
 * @param {any} pLeftObject
 * @param {any} pRightObject
 * @returns {boolean}
 */
function objectsAreEqual(pLeftObject, pRightObject) {
  try {
    deepEqual(pLeftObject, pRightObject);
    return true;
  } catch (pError) {
    return false;
  }
}
module.exports = { objectsAreEqual };