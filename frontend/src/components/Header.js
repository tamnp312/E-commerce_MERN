import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
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
                    <div className="cursor-pointer text-2xl">
                        <FaRegCircleUser />
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
                        <Link to="/login">
                            <button className="rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
