import {ref, firebaseAuth} from 'config/constants'
export default function auth() {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
};
export function checkIfAuthed(store) {
  // adding firebase later
  return store.getState().isAuthed
}
export function logout() {
  return firebaseAuth().signout()
}
export function saveUser(user) {
  return ref.child(`users/${user.uid}`).
    .set(user)
    .then(() => user)
}
