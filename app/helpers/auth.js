export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Duc Tran',
        avatar: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11667298_967621593259350_9088687871227869340_n.jpg?oh=e02674e601069531c78cb9261a9ede5a&oe=5968B8DE',
        uid: 'dtran39'
      });
    }, 2000);
  });
};
export function checkIfAuthed(store) {
  // adding firebase later
  return store.getState().isAuthed
}
export function logout() {
  console.log('Logged Out')
}
