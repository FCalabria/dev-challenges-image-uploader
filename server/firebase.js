const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes } = require('firebase/storage');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "image-uploader-8edbb.firebaseapp.com",
  projectId: "image-uploader-8edbb",
  storageBucket: "image-uploader-8edbb.appspot.com",
  messagingSenderId: "384516157931",
  appId: "1:384516157931:web:b3ff70d8387555d40729ae"
};

class Firebase {
  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this.storage = getStorage(firebaseApp);
  }
  upload(file, name, metadata) {
    const fileRef = ref(this.storage, name)
    return uploadBytes(fileRef, file, metadata)
  }
}

module.exports = Firebase

