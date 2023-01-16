// Here is an example of a function that can be used to handle a server crash in 
// Node.js when using PM2 as a process manager:



const pm2 = require('pm2');

function handleServerCrash() {
  pm2.connect(function(err) {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.restart('all', function(err, proc) {
      pm2.disconnect();   // Disconnects from PM2
      if (err) throw err;
    });
  });
}

process.on('uncaughtException', function(error) {
  console.error(error);
  handleServerCrash();
});


// This function connects to PM2, and then uses the pm2.
// restart method to restart all processes managed by PM2. Then it disconnects from PM2.

// This function should be called on an uncaughtException event, 
// so that it gets triggered whenever a crash occurs in the server. 
// You can also include other ways to detect the crash, 
// like using a log monitoring tool or checking the response of the server with a health-check endpoint.

// It is important to note that you will have to have PM2 installed and running before you can use this function.