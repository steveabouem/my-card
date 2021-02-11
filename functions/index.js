const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.saveAndReplyToLead = functions.https.onRequest((req, res) => {
  cors((req, res, () => {

    res.send('HI THERE');
  }))
});
