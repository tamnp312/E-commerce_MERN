import React from 'react';
import { useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link , useNavigate } from 'react-router-dom';
import summaryApi from '../common'
import {toast} from 'react-toastify'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {name , value} = e.target;

        setData((pre) => {
            return {
               ...pre,
                [name]: value,
            };
        });
    };

    // console.log('data login' , data);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const dataResponse =  await fetch(summaryApi.signIn.url, {
            method: summaryApi.signIn.method,
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const response = await dataResponse.json();
        // console.log('response', response);
        if (response.success) {
            toast.success(response.message);
            navigate('/')
        } else {
            toast.error(response.message);
        }
    };

    console.log("data login " , data);

    return (
        <section id="login">
            <div className="mx-auto container px-4">
                <div className="bg-white mt-5 p-5 w-full max-w-sm mx-auto rounded-md">
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcons} alt="login icons " />
                    </div>

                    <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="grid">
                            <label>Email: </label>
                            <div className="bg-slate-100 p-2 rounded-md">
                                <input
                                    type="email"
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    placeholder="Enter your email..."
                                    className="w-full h-full outline-none bg-transparent "
                                />
                            </div>
                        </div>

                        <div className="">
                            <label>PassWord: </label>
                            <div className="bg-slate-100 p-2 flex items-center justify-center rounded-md ">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    onChange={handleOnChange}
                                    placeholder="Enter your password..."
                                    className="w-full h-full outline-none bg-transparent"
                                />
                                <div className="cursor-pointer text-xl" onClick={() => setShowPassword((pre) => !pre)}>
                                    <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'}>
                                <p className="block  w-fit ml-auto hover:underline hover:text-red-600">
                                    Forgot password ?
                                </p>
                            </Link>
                        </div>

                        <div>
                            <button className="bg-red-500 hover:bg-red-700 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all block mx-auto mt-6 text-white">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="my-5">
                        Don't have account ?{' '}
                        <Link to={'/sign-up'} className="text-red-600 hover:underline">
                            Sign Up{' '}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
