
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig (){
const config = {
  apiKey: "AIzaSyBr93tJNAzu_ZfpANsdxwk2gX8IRy3WVhk",
  authDomain: "challenge-greydive-7a8ca.firebaseapp.com",
  projectId: "challenge-greydive-7a8ca",
  storageBucket: "challenge-greydive-7a8ca.appspot.com",
  messagingSenderId: "182441956688",
  appId: "1:182441956688:web:d31551a5b7b8fa83848855",
  measurementId: "G-HDGMBE0MGK"
};

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);
}

export async function firebaseBuscar(coleccionABuscar) {
  let listado = [];
  let consulta = collection(getFirestore(), coleccionABuscar);
  let resultado = await getDocs(consulta);
  resultado.forEach(documento => {
    let objeto = documento.data();
    objeto.id = documento.id;
    listado.push(objeto);
  });
  return listado;
}

export function firebaseGuardar(coleccion, objeto) {
  objeto.id = uuidv4();
  let referencia = doc(getFirestore(), coleccion, objeto.id);
  setDoc(referencia, objeto);
}
