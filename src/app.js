import { initializeApp } from 'firebase'

export const app = initializeApp({
  apiKey: "AIzaSyAdzQCzswmZnc1c6SqpPltlw7Zu5z_xKxQ",
  authDomain: "nobacon-227bb.firebaseapp.com",
  databaseURL: "https://nobacon-227bb.firebaseio.com",
  projectId: "nobacon-227bb",
  storageBucket: "",
  messagingSenderId: "605173431243"
})

export const database = app.database()

export const auth = app.auth()
