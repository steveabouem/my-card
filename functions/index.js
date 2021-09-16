const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cuid = require('cuid');
const cors = require('cors')({ origin: true });
admin.initializeApp();
const db = admin.firestore();

exports.saveLead = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const leadID = `${req.body.senderEmail}`;

    db.collection("leads").doc(`${leadID}`).set({[cuid()]: req.body}, {merge: true})
      .then(() => {
        console.log('New lead created');
        res.send({status: 200});
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
        res.send({status: 500});
      });
    });
});