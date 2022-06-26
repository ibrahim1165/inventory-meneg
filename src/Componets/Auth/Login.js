import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import auth from"../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    let form = location.state?.form?.pathname || "/";
    if(user || gUser){
        navigate(form, { replace: true });
    }

    // useEffect(()=>{
    //     if (token) {
    //         navigate(form, { replace: true });
    //     }
    // },[token,form,navigate])
    let signInError;
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    if(loading || gLoading){
        return  <Loading />;
    }
    return (
        <div className="flex justify-center h-screen items-center my-8">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  
                         {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                        </label>
                    </div>

                {/* password-input-----
                ------------------- */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your password</span>
                        </label>
                        <input  
                        {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                        </label>
                    </div>
                    {signInError}
                    <input className="btn w-full max-w-xs" type="submit" value="Login" />
                
                </form>
                <p><small>Create to account <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

            </div>
        </div>
    </div>
    );
};

export default Login;