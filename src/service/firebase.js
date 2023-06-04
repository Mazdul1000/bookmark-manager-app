import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const getBookmarks = async () => {
  const querySnapshot = await getDocs(collection(db, "bookmarks"));
  const newData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return newData;
};

export const addBookmark = async (newLink) => {
  await addDoc(collection(db, "bookmarks"), newLink)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const deleteBookmark = async (id) => {
  await deleteDoc(doc(db, "bookmarks", id))
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
};
