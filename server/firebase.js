const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "image-uploader-8edbb.firebaseapp.com",
  projectId: "image-uploader-8edbb",
  storageBucket: "image-uploader-8edbb.appspot.com",
  messagingSenderId: "384516157931",
  appId: "1:384516157931:web:b3ff70d8387555d40729ae"
};
let firebaseApp

function getFileRef (name) {
  const storage = getStorage(firebaseApp)
  return ref(storage, name)
}

class Firebase {
  constructor() {
    firebaseApp = initializeApp(firebaseConfig);
  }
  upload(file, name, metadata) {
    const fileRef = getFileRef(name)
    return uploadBytes(fileRef, file, metadata)
  }

  get(name) {
    const fileRef = getFileRef(name)
    return getDownloadURL(fileRef)
  }
}

module.exports = Firebase

