// React components
import { useEffect, useState } from 'react';

// FIrebase authentication service
import { projectAuth } from '../firebase/config';

export const useLogin = () => {
  // states
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(false);
  const [ isCancelled, setIsCancelled ] = useState(false);

  const login = async ( email, password ) => {
    // set initial login states
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // check if request was successful
      if (!res) {
        throw new Error('Unable to complete login');
      }

      if (!isCancelled) {
        // set error message
        setError(null);

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

  return { login, error, isPending }
}