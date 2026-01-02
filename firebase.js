<script type="module">
import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.db = getFirestore(app);
</script>
