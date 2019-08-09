module.exports = function(success, data, error) {
  return ({
    'error': error ? error : [],
    'success': success ? success : true,
    'data': data
  });
};