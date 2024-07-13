import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc, doc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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

let btn = document.getElementById('btn')
btn.addEventListener('click', async () => {
getol.innerHTML = ''
    let inp = document.getElementById('input')

    const docRef = await addDoc(collection(db, "todo"), {
        name: inp.value

    });
    // console.log("Document written with ID: ", docRef.id);
    get()

})
let getol = document.getElementById('ol')
async function get() {

    const q = collection(db, "todo")

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        //   console.log(doc.id, " => ", doc.data());

        getol.innerHTML += `<li style="display: flex;justify-content: space-between;"><span>${doc.data().name}</span><span>
<button class="abc" onclick="delet('${doc.id}')">Delete</button>
<button class ="abc" onclick="edit('${doc.id}')">Edit</button> 
</span></li><br>`

    });


}

window.delet = delet
window.edit = edit
get()
async function edit(e) {
getol.innerHTML = ''
// console.log(e);
    let update = prompt('Enter Updated Value')
    const washingtonRef = doc(db, "todo", e);

    await updateDoc(washingtonRef, {
        name: update
    });
    get()
// location.reload();
}
async function delet(e) {
getol.innerHTML = ''

    // console.log(e);
    await deleteDoc(doc(db, "todo", e));
    // location.reload;
get()
}