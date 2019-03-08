// sign in user
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error });
        });
    }
}
// sign out user
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}
// sign up user
export const signUp = (newUser) => {
    return(dispatch, getSate, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
// create new user in firebase
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }).then(() => {
                dispatch({type: 'SIGNUP_SUCCESS'});
            }).catch(error => {
                dispatch({type: 'SIGNUP_ERROR', error})
            })

        })
    }
}