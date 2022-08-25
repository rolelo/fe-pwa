import { Auth } from '@aws-amplify/auth';
import type { ISignUpResult } from 'amazon-cognito-identity-js';
import { BehaviorSubject } from 'rxjs';
import { Hub } from 'aws-amplify';
import type { SignUp } from '../models/signup';

const userSubject = new BehaviorSubject<ISignUpResult | null>(null);
const userSignedIn = new BehaviorSubject<boolean | null>(null);
async function signUp({
  email,
  name,
  password,
  phoneNumber,
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

Hub.listen('auth', ({ payload }) => {
  const { event } = payload;
  console.log(event);
  if (event === 'autoSignIn' || event === 'signIn') {
    // assign user
    userSignedIn.next(true);
  } else if (event === 'autoSignIn_failure') {
    userSignedIn.next(false);
  }
  // redirect to sign in page
});

async function confirmSignUp(email: string, code: string) {
  await Auth.confirmSignUp(email, code);
}

async function resendConfirmationCode(email: string) {
  await Auth.resendSignUp(email);
}

async function verifyUser() {
  const user = await Auth.currentSession();
  if (!user.isValid()) {
    throw Error('Invalid User');
  }
}

async function login(email: string, password: string) {
  await Auth.signIn(email, password);
}

export default {
  userSubject,
  userSignedIn,
  signUp,
  confirmSignUp,
  resendConfirmationCode,
  verifyUser,
  login,
};
