import React, { useState } from 'react'
import Role from '../common/role'
import { IoClose } from "react-icons/io5";
import summaryApi from '../common';
import { toast } from 'react-toastify'; 

const ChangeUserRole = (
  {
    userId,
    name,
    email,
    role,
    onClose,
    callFunc,
  }
) => {
  
  const [userRole,setUserRole] = useState(role);

  const handleChangeUserRole = (e) => {
    setUserRole(e.target.value);
    console.log(e.target.value);
  }

  const updateUserRole = async() => {
    const fetchResponse =  await fetch(summaryApi.update_user.url , {
      method: summaryApi.update_user.method,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        userId : userId,
        role: userRole }),
    });

    const responseData = await fetchResponse.json() ;

    if(responseData.success){
      toast.success(responseData.message)
      onClose()
      callFunc()
  }

  console.log("role updated",responseData)



  }

  return (
    <div className='fixed inset-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50 '>
      <div className='mx-auto bg-white shadow-md p-5 w-full max-w-sm rounded-md'>

        <button className='block ml-auto'  onClick= {onClose}>
                <IoClose/>
        </button>
        <h1 className='font-medium text-lg pb-4'> Change User Role</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p> 
        <div className='flex justify-between items-center  my-4'>
          <p>Role:</p> 
          <select 
            className='border px-4 py-1 outline-none'
            value={userRole}
            onChange={handleChangeUserRole} 
            > 
            {
              Object.values(Role).map (el => {
                return (
                  <option key={el} value={el} >{el}</option>
                )
              })
            }
          </select>
        </div>
        <button className='px-3 py-1 rounded-full w-fit bg-red-500 flex justify-center mx-auto my-4 text-white hover:bg-red-700'
                onClick={updateUserRole}
        > Change Role</button>
      </div>
    </div>
  )
}

export default ChangeUserRole