const logError = (error) => {
    if (error.response) {
    console.log('Error Data: ', error.response.data);
    console.log('Error Status: ', error.response.status);
    console.log('Correlation ID: ', error.response.headers['x-correlation-id']);
    } else if (error.request) {
    console.log('No response received');
    } else {
    console.log('Error', error.message);
    }
   };
   export default {log: logError};