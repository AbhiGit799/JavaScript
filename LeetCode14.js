// 2727. Is Object Empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    if (obj.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  if (typeof obj === "object") {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isEmpty({ x: 5, y: 42 }));

console.log(isEmpty([null, false, 0]));
