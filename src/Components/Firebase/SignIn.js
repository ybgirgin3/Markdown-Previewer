import { getAuth, singInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
singInWithEmailAndPassword(auth, email, password).then((userCrediential) => {
  const user = userCrediential.user;
});
singInWithEmailAndPassword(auth, email, password)
  .then((userCrediential) => {
    const user = userCrediential.user;
  })
  .catch((err) => {
    throw err;
  });
