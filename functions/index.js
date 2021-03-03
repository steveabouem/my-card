const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.saveAndReplyToLead = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    res.send('HI THERE');
  })
});

