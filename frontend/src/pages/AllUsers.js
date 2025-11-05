import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import { MdModeEdit } from "react-icons/md";
import moment from 'moment'
import ChangeUserRole from '../components/ChangeUserRole'

const AllUsers = () => {
  const [allUser, setAllUsers] = useState([])
  const [OpenUpdateRole, setOpenUpdateRole] = useState(false)
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
    
  })

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: 'include'
    })

    const dataResponse = await fetchData.json()

    if (dataResponse.success) {
      setAllUsers(dataResponse.data)
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return (
    <div>
      <table className='w-full userTable'>
        <thead>
          <tr className='bg-black text-white'>
            <th>Sr</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {
            allUser.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el?.name}</td>
                  <td>{el?.email}</td>
                  <td>{el?.role}</td>
                  <td>{moment(el?.createdAt).format('LL')}</td>

                  <td>
                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:text-white hover:bg-green-500'
                      onClick={() => {
                        setUpdateUserDetails(el)
                        setOpenUpdateRole(true)
                      }}
                      >

                      <MdModeEdit />
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        OpenUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
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

export default AllUsers