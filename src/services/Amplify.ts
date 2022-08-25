import { Auth } from '@aws-amplify/auth';
import { Subject } from 'rxjs';
import type { SignUp } from '../models/signup';

const userSubject = new Subject();
async function signUp({
  email, name, password, phoneNumber,
}: Omit<SignUp, 'confirmPassword'>) {
  const user = await Auth.signUp({
    username: email,
    password,
    attributes: {
      email, // optional
      phone_number: phoneNumber, // optional - E.164 number convention
      name,
      // other custom attributes
    },
    autoSignIn: {
      // optional - enables auto sign in after user is confirmed
      enabled: true,
    },
  });

  userSubject.next(user);
  return user;
}

export default {
  userSubject,
  signUp,
};
