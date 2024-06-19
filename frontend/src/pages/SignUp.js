import React from 'react';
import { useState } from 'react';
import loginIcons from '../assest/signin.gif';
import imageToBase64 from '../helpers/imageToBase64';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePic: '',
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    };

    // console.log('data login' , data);

    const handleUploadPic = async(e) =>{
        const file = e.target.files[0]
        
        const imagePic = await imageToBase64(file);
        console.log('imagePic', imagePic);
        
        setData((pre)=>{
          return{
            ...pre,
            profilePic : imagePic
          }
        })
    
      }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="signup">
            <div className="container mx-auto px-4">
                <div className="mx-auto mt-2 mb-2 w-full max-w-sm rounded-md bg-white p-5">
                    <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                        <div>
                            <img src={data.profilePic || loginIcons} alt="login icons" />
                        </div>
                        <form>
                            <label>
                                <div className="absolute bottom-0 w-full cursor-pointer bg-slate-200 bg-opacity-80 pb-4 pt-2 text-center text-xs">
                                    Upload Photo
                                </div>
                                <input type="file" className="hidden" onChange={handleUploadPic} />
                            </label>
                        </form>
                    </div>

                    <form className="flex flex-col gap-2 pt-6" onSubmit={handleSubmit}>
                        <div className="grid">
                            <label>Name: </label>
                            <div className="rounded-md bg-slate-100 p-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    placeholder="Enter your name..."
                                    className="h-full w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Email: </label>
                            <div className="rounded-md bg-slate-100 p-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    placeholder="Enter your email..."
                                    className="h-full w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>

                        <div className="">
                            <label>PassWord: </label>
                            <div className="flex items-center justify-center rounded-md bg-slate-100 p-2">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    onChange={handleOnChange}
                                    required
                                    placeholder="Enter your password..."
                                    className="h-full w-full bg-transparent outline-none"
                                />
                                <div className="cursor-pointer text-xl" onClick={() => setShowPassword((pre) => !pre)}>
                                    <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <label>Confirm PassWord: </label>
                            <div className="flex items-center justify-center rounded-md bg-slate-100 p-2">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                    required
                                    placeholder="Enter confirm password..."
                                    className="h-full w-full bg-transparent outline-none"
                                />
                                <div
                                    className="cursor-pointer text-xl"
                                    onClick={() => setShowConfirmPassword((pre) => !pre)}
                                >
                                    <span>{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="mx-auto mt-6 block w-full max-w-[150px] rounded-full bg-red-500 px-6 py-2 text-white transition-all hover:scale-110 hover:bg-red-700">
                                Sign UP
                            </button>
                        </div>
                    </form>

                    <p className="my-5">
                        Already have an account? {''}
                        <Link to={'/login'} className="text-red-600 hover:underline">
                            Login{' '}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
