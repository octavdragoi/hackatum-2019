const https = require('https');

export function test(callback) {
  //https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  https.get('/api', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      callback(JSON.parse(data).xyz);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}