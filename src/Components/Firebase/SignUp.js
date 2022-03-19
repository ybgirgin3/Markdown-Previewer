import { getAuth, createUserwithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

createUserwithEmailAndPassword(auth, email, password)
  .then((userCrediential) => {
    // muhtemelen şifre falan da burda girilecek
    const user = userCrediential.user;
  })
  .catch((err) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
