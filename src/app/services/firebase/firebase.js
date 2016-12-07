import accountTransformer from './../../transformers/account';
import store from './../../store';

// When the request succeeds
const success = (account) => {
  account = accountTransformer.fetch(account);

  store.dispatch('getAccount', account);
};

// When the request fails
const failed = () => {
};

export default () => {




  // Get a reference to the database service
  var database = firebase.database();
  firebase.database().ref('/stream').once('value')
    .then(function(snapshot) {
      console.log("once",snapshot.val());
    });

};
