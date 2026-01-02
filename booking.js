import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs
} from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE",
  authDomain: "PASTE",
  projectId: "PASTE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;

onAuthStateChanged(auth, user=>{
  if(!user){
    location.href="login.html";
  } else {
    currentUser = user;
  }
});

window.bookTest = async function(){
  const testType = document.getElementById("testType").value;
  const testDate = document.getElementById("testDate").value;

  if(testType=="" || testDate==""){
    alert("Fill all fields");
    return;
  }

  // prevent double booking
  const q = query(
    collection(db,"bookings"),
    where("uid","==",currentUser.uid)
  );
  const snap = await getDocs(q);

  if(!snap.empty){
    alert("You already booked a test");
    return;
  }

  await addDoc(collection(db,"bookings"),{
    uid: currentUser.uid,
    email: currentUser.email,
    testType,
    testDate,
    status:"Booked",
    created: new Date()
  });

  document.getElementById("msg").innerText =
  "Booking successful. Exam details will be shared.";

}
