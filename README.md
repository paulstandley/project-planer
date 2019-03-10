# _**PAUL STANDLEY**_

![Profile Pick](http://res.cloudinary.com/pieol2/image/upload/v1516543296/profile-small.png)

## [Live Hosting Firebase](https://project-planer-8d7d7.firebaseapp.com/)

---

### [The Net Ninja You Tube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3)

---

### [The Net Ninja Github Repo](https://github.com/iamshaunjp/React-Redux-Firebase-App)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### Dep

```BASH
npm install react-redux@5.1.1
npm install react-redux-firebase@2.2.4
npx create-react-app name
npm install react-router-dom
npm install redux
npm install redux-thunk
npm install firebase
npm install redux-firestore
npm install moment
npm install -g firebase-tools
firebase init
firebase deploy --only functions
npm run build
firebase deploy
```

---

### Data Base Rules

```JAVASCRIPT
service cloud.firestore {
  match /databases/{database}/documents {
    match /project/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId} {
      allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
    match /notifications/{notification} {
      allow read, write: if request.auth.uid != null
    }
  }
}
```