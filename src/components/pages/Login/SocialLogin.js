import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import Spinner from '../../Shared/Spinner.js/Spinner';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Spinner />
    }

    if (user) {
        navigate('/');
        console.log(user);
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