import { fs } from "../../firebase";
import { store } from "../../../store";

export const get = ({ uid }) =>
  fs
    .collection("users")
    .doc(uid)
    .collection("posts")
    .orderBy("created_at", "desc")
    .get();

export const post = (data, { uid }) => {
  return fs
    .collection(`users`)
    .doc(uid)
    .collection(`posts`)
    .add({
      ...data,
      created_at: new Date()
    });
};

export const observerPosts = ({ uid }) => {
  const subscribe = () =>
    fs
      .collection(`users`)
      .doc(uid)
      .collection(`posts`)
      .orderBy("created_at", "desc")
      .onSnapshot(collection => {
        collection.docChanges().map(item => {
          if (item.type === "added") {
            store.dispatch({
              type: "RECEIVE_POST",
              post: item.doc.data()
            });
            // callback(item.doc.data())
          }
        });
      });

  const unsubscribe = () => {
    fs.collection(`users`)
      .doc(uid)
      .collection(`posts`)
      .orderBy("created_at", "desc")
      .onSnapshot(() => {});
  };

  return {
    subscribe,
    unsubscribe
  };
};
