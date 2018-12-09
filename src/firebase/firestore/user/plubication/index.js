import { fs } from "../../../firebase";
import { store } from "../../../../store";

export const get = ({ uid }) =>
  fs
    .collection(`users`)
    .doc(uid)
    .collection(`publications`)
    .orderBy(`created_at`, `desc`)
    .get();

/**
 *
 * @param {*} data | { author, content, created_at, media: [], likes: [] }
 * @param {*} param1 uid => author
 */
export const post = (data, { uid }) => {
  console.log(data);
  return fs
    .collection(`users`)
    .doc(uid)
    .collection(`publications`)
    .add({
      ...data,
      author: uid,
      created_at: new Date()
    });
};

export const observePublications = ({ uid }) => {
  const subscribe = () =>
    fs
      .collection(`users`)
      .doc(uid)
      .collection(`publications`)
      .orderBy("created_at", "desc")
      .onSnapshot(collection => {
        collection.docChanges().map(item => {
          if (item.type === "added") {
            store.dispatch({
              type: "ADD_POST",
              post: item.doc.data()
            });
            // callback(item.doc.data())
          }
        });
      });

  const unsubscribe = () => {
    fs.collection(`users`)
      .doc(uid)
      .collection(`publications`)
      .orderBy("created_at", "desc")
      .onSnapshot(() => {});
  };

  return {
    subscribe,
    unsubscribe
  };
};
