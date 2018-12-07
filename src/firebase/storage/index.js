import { storage } from "../firebase";

export const upload = (uid, postId, file) => {
  const ref = storage.ref(`${uid}`);

  return ref.child(postId).put(file);
};
