import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAs1Doh3H0AVh0xHUe3llAw8MlJgTcFr_o",
    authDomain: "second-cf038.firebaseapp.com",
    projectId: "second-cf038",
    storageBucket: "second-cf038.appspot.com",
    messagingSenderId: "418355371537",
    appId: "1:418355371537:web:f77f0905f7bb26998a5bb0",
    measurementId: "G-HZTC5SPRJ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let ol = document.getElementById('ul')

var getbtn = document.getElementById('btn')
getbtn.addEventListener('click', async () => {
    let inp = document.getElementById('inp')
    
    const docRef = await addDoc(collection(db, "todos"), {
        input: inp.value
    });
    
    ol.innerHTML = ''
    inp.value = ''
  
    async function abc() {
        const abcd = await getDocs(collection(db, "todos"))

        abcd.forEach((items) => {
          
            ol.innerHTML += `<li>${items.data().input}</li>`
        })
    }
    abc()
})