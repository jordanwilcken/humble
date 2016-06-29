var
  humble = humble || {},
  humble.ui = humble.ui || {};

humble.ui.getRelativeClickPosition = clickEvent => {
  var
    currentTarget = clickEvent.currentTarget;

  return {
    x: clickEvent.clientX - currentTarget.offsetLeft,
    y: clickEvent.clientY - currentTarget.offsetTop
  };
};

humble.ui.isTextNode = node => node.nodeType === 3;

humble.ui.getAllTextNodes = el =>
  humble.javascript.collectionToArray(el.childNodes)
    .filter(humble.ui.isTextNode);

humble.ui.parseHTML = htmlString => {
  var container = document.createElement("div");
  div.innerHTML = htmlString;
  return humble.javascript.collectionToArray(div.children);
};
