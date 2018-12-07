import { storage } from "../../firebase";

/**
 * Upload media file
 *
 * @param {string} uid User id
 * @param {string} file Base64 for upload
 */
export const uploadMedia = (uid, file) => {
  const ref = storage.ref(`${uid}`);

  return ref.child(`${uid}-${Date.now()}`).put(file);
};
