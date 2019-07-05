import { fs } from "../../firebase";
import { store } from "../../../store";

export const get = ({ uid }) =>
  fs
    .collection("users")
    .doc(uid)
    .collection("posts")
    .orderBy("created_at", "desc")
    .get();

/**
 *
 * @param {*} data | { author, content, created_at, media: [], likes: [] }
 * @param {*} param1 uid => author
 */
export const post = (data, { uid }) =>
  fs
    .collection(`users`)
    .doc(uid)
    .collection(`posts`)
    .add({
      ...data,
      author: uid,
      created_at: new Date()
    });

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
          }
          return null;
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
