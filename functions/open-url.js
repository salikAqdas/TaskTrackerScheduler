const open = require('open');

// URL you want to open
const url = 'http://tasktracker.finesse-cs.tech';  // Replace with your desired URL

exports.handler = async function(event, context) {
  try {
    // Open the URL in the default browser
    await open(url);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'URL opened successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error opening URL', error: error.message })
    };
  }
};
