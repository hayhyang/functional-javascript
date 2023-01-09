const slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}

function _filter(list, predi) {
  let new_list = [];

  _each(list, (val) => {
    if (predi(val)) {
      new_list.push(val);
    }
  });

  return new_list;
}

function _map(list, mapper) {
  let new_list = [];
  _each(list, (val) => new_list.push(mapper(val)));

  return new_list;
}

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}
