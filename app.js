import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_KEY",
  authDomain: "PASTE",
  projectId: "PASTE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* REGISTER */
window.registerUser = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(()=>{
    alert("Account created successfully");
    window.location.href = "login.html";
  })
  .catch(error=>{
    alert(error.message);
  });
}

/* LOGIN */
window.loginUser = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then(()=>{
    window.location.href = "dashboard.html";
  })
  .catch(error=>{
    alert("Invalid login");
  });
}

/* PROTECT DASHBOARD */
onAuthStateChanged(auth, user=>{
  if(!user && location.pathname.includes("dashboard")){
    window.location.href = "login.html";
  }
});
