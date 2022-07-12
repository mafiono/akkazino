const firebaseConfig = {
  apiKey: "AIzaSyCEXDVl0O2GSq640E4IX1yZemFPREL6a3Q",
  authDomain: "jackpotjill-c251b.firebaseapp.com",
  projectId: "jackpotjill-c251b",
  storageBucket: "jackpotjill-c251b.appspot.com",
  messagingSenderId: "518777267735",
  appId: "1:518777267735:web:eb0120d4be74b5dcf09e52"
};

function initializeApp(firebaseConfig) {
  return undefined;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Variables
let firebase;
const auth = firebase.auth()
firebase.database = function () {
  return undefined;
}
const database = firebase.database()

// set up our register function
function register(e) {
  e.preventDefault()
  // get the values from the form
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  auth.createUserWithEmailAndPassword = function (email, password) {

  }
  // create the user
  auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      // if we have a user, redirect to the home page
      window.location.href = 'index.html'
    })
    .catch(function(error) {
      // if there is an error, show error message
      document.getElementById('error').innerHTML = error.message
    })
}
