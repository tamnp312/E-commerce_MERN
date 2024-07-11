import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link ,Outlet,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ROLE from '../common/role';


const AdminPanel = () => {
    const user =  useSelector((state) => state?.user?.user );

    // const navigate = useNavigate()

    // // useEffect(()=>{
    // //     if(user?.role !== ROLE.ADMIN){
    // //         navigate("/")
    // //     }
    // // },[user])

    return (
        <div className="hidden min-h-[calc(100vh-128px)] md:flex">
            <aside className="min-h-full min-w-60 bg-white">
                <div className="flex h-32 flex-col items-center justify-center">
                    <div className="relative flex cursor-pointer justify-center text-5xl">
                        {user?.profilePic ? (
                            <img src={user?.profilePic} className="h-20 w-20 rounded-full" alt={user?.name} />
                        ) : (
                            <FaRegCircleUser />
                        )}
                    </div>
                    <p className="text-lg font-semibold capitalize">{user?.name}</p>
                    <p className="text-sm">{user?.role}</p>
                </div>

                {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All product</Link>
                    </nav>
                </div>  
            </aside>

            <main  className='w-full h-full p-2'>
                <Outlet/>
            </main>
        </div>
    );
};

export default AdminPanel;
