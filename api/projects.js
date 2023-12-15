import { db } from "@/config/firebase";
import {
    collection,
    getDocs
  } from "firebase/firestore";

const collection_ref = "project";

export const readDocuments = async () => {
    const ref = collection(db, collection_ref);
    const res = await getDocs(ref);
    let docs = [];
    if (res.docs.length <= 0) {
      return [];
    } else {
      res.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      return docs;
    }
  };

const data = readDocuments()
console.log(data);