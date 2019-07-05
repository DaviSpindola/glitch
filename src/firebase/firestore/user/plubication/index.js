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

const subscribe = uid => () =>
  fs
    .collection(`users`)
    .doc(uid)
    .collection(`publications`)
    .orderBy("created_at", "desc")
    .onSnapshot(collection =>
      collection.docChanges().map(
        item =>
          item.type === "added" &&
          store.dispatch({
            type: "ADD_POST",
            post: item.doc.data()
          })
      )
    );

const unsubscribe = uid => () => {
  fs.collection(`users`)
    .doc(uid)
    .collection(`publications`)
    .orderBy("created_at", "desc")
    .onSnapshot(() => {});
};

export const observePublications = ({ uid }) => ({
  subscribe: subscribe(uid),
  unsubscribe: unsubscribe(uid)
});
