// React components
import { useEffect, useState } from 'react';

// Firebase Authentication service
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(false);
  const [ isCancelled, setIsCancelled ] = useState(false);

  const signup = async (email, password, displayName) => {
    // set signup initial states
    setError(null);
    setIsPending(true);

    try {
      // sign the user up
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);

      // check if sign up was successful
      if (!res) {
        throw new Error('Unable to complete signup');
      }

      // update new created user profile
      await res.user.updateProfile({ displayName });

      // check if the component has been unmounted
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      // check if the component has been unmounted
      if (!isCancelled) {
        // set error message
        setError(err.message);

        // reset pending status
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending }
}