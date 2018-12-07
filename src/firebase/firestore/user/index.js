import { fs } from "../../firebase";

export const postUser = ({ username, nickname, email, isChecked }, uid) => {
  return fs
    .collection("users")
    .doc(uid)
    .set({
      username,
      nickname,
      email,
      isChecked
    })
    .then(() => {
      return uid;
    });
};

export const get = uid =>
  fs
    .collection(`users`)
    .doc(uid)
    .get();

export const getUser = ({ nickname }) => {
  return fs
    .collection("users")
    .doc(nickname)
    .get();
};
