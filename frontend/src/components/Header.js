import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import summaryApi from '../common/index';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
const Header = () => {
    const user = useSelector((state) => state?.user?.user);
    console.log('user-header', user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menuDisplay, setMenuDisplay] = useState(false);

    const openMenu = () => {
        setMenuDisplay((pre) => !pre);
    };

    const handleLogout = async () => {
        const dataFetch = await fetch(summaryApi.logout_user.url, {
            method: summaryApi.logout_user.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const response = await dataFetch.json();
        if (response.success) {
            toast.success(response.message);
            navigate('/');
            dispatch(setUserDetails(null));
        } else {
            toast.error(response.message);
        }
    };
    return (
        <header className="h-16 bg-white shadow-md">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <div className="">
                    <Link to={'/'}>
                        <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className="hidden w-full max-w-sm items-center justify-between rounded-full border pl-2 focus-within:shadow lg:flex">
                    <input type="text " placeholder="Search product here..." className="w-full outline-none" />
                    <div className="flex h-8 min-w-[50px] items-center justify-center rounded-r-full bg-red-500 text-lg text-white">
                        <GrSearch />
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative flex justify-center">
                        {user?._id && (
                            <div
                                className="relative flex cursor-pointer justify-center text-3xl"
                                onClick={openMenu}
                            >
                                {user?.profilePic ? (
                                    <img src={user?.profilePic} className="h-10 w-10 rounded-full" alt={user?.name} />
                                ) : (
                                    <FaRegCircleUser />
                                )}
                            </div>
                        )}

                        {menuDisplay && user?.role === ROLE.ADMIN && (
                            <div className="absolute bottom-0 top-11 h-fit rounded bg-white p-2 shadow-lg">
                                <nav>
                                    <Link
                                        to={'/admin-panel/all-users'}
                                        className="hidden whitespace-nowrap p-2 hover:bg-slate-100 md:block"
                                        onClick={openMenu}
                                    >
                                        Admin Panel
                                    </Link>
                                </nav>
                            </div>
                        )}
                    </div>

                    <div className="relative cursor-pointer text-2xl">
                        <span>
                            {' '}
                            <FaShoppingCart />
                        </span>
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 p-1 text-white">
                            <p className="text-sm">0</p>
                        </div>
                    </div>

                    <div>
                        {user?._id ? (
                            <button
                                onClick={handleLogout}
                                className="rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
