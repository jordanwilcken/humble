var
  humble = humble || {},
  humble.functional = humble.functional || {};

humble.functional.mapWrap = function mapWrap(theValue) {
  return Object.freeze({
    map: fn => mapWrap(fn(theValue)),
    tee: function(fn) {
      fn(theValue);
      return this;
    },
    value: () => theValue
  });
};
