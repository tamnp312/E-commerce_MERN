import React, { useEffect, useState } from 'react'
import summaryApi from '../common';
import { toast } from 'react-toastify';
import  moment from 'moment'
import { MdEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole'

const AllUser = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [openUpdateRole,setOpenUpdateRole] = useState(false);
    const [updateUserDetails,setUpdateUserDetails] = useState({
        email : "",
        name : "",
        role : "",
        _id  : ""
    })


    const fetchAllUsers = async () => {
        const fetchData = await fetch(summaryApi.all_users.url , {
            method: summaryApi.all_users.method,
            credentials: 'include',
        }) 

        const response = await fetchData.json();

        if(response.success) {
            // toast.success(response.message)
            setAllUsers(response.data)
        }else {
            toast.error(response.message);
        }
     }

    useEffect(() => {
         fetchAllUsers();
    },[]);

  return (
    <div>
        <table className='w-full userTable'>
            <thead>
                <tr className='bg-black text-white'>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    allUsers.map((el,index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                    onClick={()=>{
                                        setUpdateUserDetails(el)
                                        setOpenUpdateRole(true)

                                    }}
                                    >
                                        <MdEdit />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            openUpdateRole && (
                <ChangeUserRole 
                    onClose={()=>setOpenUpdateRole(false)} 
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )      
        }
    </div>
  )
}

export default AllUser