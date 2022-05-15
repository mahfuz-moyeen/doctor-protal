import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import useToken from '../../../hooks/useToken';
import Spinner from '../../Shared/Spinner.js/Spinner';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token,navigate,from])

    
    if (loading) {
        return <Spinner />
    }

    return (
        <div>
            <div className="divider">OR</div>
            {
                error ? 
                <p className='text-red-500 my-3 text-center'>{error?.message.slice(22)}</p> : <></>
            }
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-outline w-full'
            >Google Login</button>
        </div>
    );
};

export default SocialLogin;