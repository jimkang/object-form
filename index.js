function ObjectFromDOM({
  dataAttribute = 'of',
  dataTypeAttribute = 'oftype',
  getValueFromElement = defaultGetValueFromElement
}) {
  return objectFromDOM;

  function objectFromDOM(domRoot) {
    var formEls = domRoot.querySelectorAll(`[data-${dataAttribute}]`);
    var obj = {};
    for (let i = 0; i < formEls.length; ++i) {
      putFormElValueInObject(formEls[i]);
    }
    return obj;

    function putFormElValueInObject(formEl) {
      let ofProp = formEl.dataset[dataAttribute];
      let ofType = formEl.dataset[dataTypeAttribute] || 'string';
      let path = ofProp.split('/');
      let subObject = obj;
      for (let j = 0; j < path.length; ++j) {
        let segment = path[j];
        if (j === path.length - 1) {
          // This is the last path segment, so assign the value here.
          assignValueToObject(
            subObject,
            segment,
            ofType,
            getValueFromElement(formEl)
          );
        } else {
          if (subObject[segment]) {
            subObject = subObject[segment];
          } else {
            subObject[segment] = {};
            subObject = subObject[segment];
          }
        }
      }
    }

    function assignValueToObject(obj, key, type, value) {
      if (type === 'array') {
        var array = obj[key];
        if (!array) {
          array = [];
          obj[key] = array;
        }
        array.push(value);
      } else {
        if (type === 'int') {
          obj[key] = parseInt(value, 10);
        } else {
          obj[key] = value;
        }
      }
    }
  }
}

function defaultGetValueFromElement(el) {
  if (el.type === 'checkbox') {
    return el.checked;
  } else if (el.type === 'select') {
    let options = el.selectedOptions;
    if (options.length < 1) {
      return;
    }
    if (options.length === 1) {
      return options[0].value;
    }

    let values = [];
    for (let i = 0; i < options.length; ++i) {
      values.push(options[i].value);
    }
    return values;
  } else {
    return el.value || el.textContent;
  }
}

module.exports = {
  ObjectFromDOM
};
