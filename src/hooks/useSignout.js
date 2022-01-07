// React components
import { useEffect, useState } from 'react';

// Firebase authentication service
import { projectAuth } from '../firebase/config';

export const useSignout = () => {

  const signout = async () => {
    // states
    const [ error, setError ] = useState(null);
    const [ isPending, setIsPending ] = useState(false);
    const [ isCancelled, setIsCancelled ] = useState(false);
  
    try {
      // sign user out of their account
      const res = await projectAuth.signOut();

      // check if request was successful
      if (!res) {
        throw new Error('Unable to complete signout');
      }

      if (!isCancelled) {
        // set error message
        setError(err.message);

        // reset pending status
        setIsPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        // set error message
        setError(err.message);

        // reset pending status
        setIsPending(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signout, error, isPending }
}