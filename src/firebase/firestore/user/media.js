import { fs } from "../../firebase";

export const getAll = ({ uid }) =>
  fs
    .collection(`users`)
    .doc(uid)
    .collection(`media`)
    .get();
