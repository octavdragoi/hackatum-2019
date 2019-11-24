const https = require('https');

export class ApiClient {
  timer;

  constructor(interval, callback) {
    this.timer = setInterval(test, interval, callback);
  }

  stop() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}

export function test(callback) {
  https.get('/api', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data));
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}