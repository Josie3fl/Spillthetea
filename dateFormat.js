// This function takes a timestamp and returns a formatted date string using the local time zone.

module.exports = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};
