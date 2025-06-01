
module.exports = function(date) {
  return date ? date.toLocaleString() : '';
};
// This function takes a date object and returns a formatted date string using the local time zone.