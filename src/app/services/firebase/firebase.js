import fireBaseTransformer from './../../transformers/firebase';
import store from './../../store';

// When the request succeeds
const success = (res) => {
  const firebaseData = fireBaseTransformer.fetch(res);
  store.dispatch('getFireBaseData', firebaseData);
};

// When the request fails
const failed = () => {
};

export default () => {
  // Get a reference to the database service
  const callback = (snapshot) => {
    if (snapshot) {
      success(snapshot.val());
    } else {
      failed();
    }
  };
  window.firebase.database().ref('/stream').once('value').then(callback);
};
