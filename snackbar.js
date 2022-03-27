const snackbar = require('snackbar');

// Optional configuration
snackbar.duration = 5000;
snackbar.gap = 250;

// Show the snackbar or add it to the queue
snackbar.show('Ohai!');

module.exports.snackbar = snackbar;
