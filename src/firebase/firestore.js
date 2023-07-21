import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../configs/firebaseConfig";

const insertDocument = (collection_name, payload)=> addDoc(collection(firestoreDB, collection_name), payload)

export {
    insertDocument
}