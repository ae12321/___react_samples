authentication google check

firestore

- production mode

created project settning > myapp

- `npm install firebase`

easy routing

- `npm install react-router-dom`

try fontawesome

https://fontawesome.com/docs/web/use-with/react/

- `npm i --save @fortawesome/fontawesome-svg-core`
- `npm i --save @fortawesome/free-solid-svg-icons`
- `npm i --save @fortawesome/free-regular-svg-icons`
- `npm i --save @fortawesome/react-fontawesome@latest`

https://fontawesome.com/docs/web/use-with/react/add-icons

login with google

https://firebase.google.com/docs/auth/web/google-signin?hl=ja

document search `google login`

.env.local
need `REACT_APP_` prefix

auth data save localstorage, because lost data for reload

add data to firestore

https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja

if manually setup doc , then `Set a document`

setDoc, addDoc

Uncaught (in promise) FirebaseError: Missing or insufficient permissions.
-> edit firebase rule
-> allow read, write: if false; -> allow read, write: if true;
