import { LayoutDashboard, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import profileImage from '../../assets/profile.png'

const AdminSidebar = () => {

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: profileImage,
  }

  const adminNavlinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', path: '/admin/list-shows', icon: ListIcon },
    { name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon },
  ]

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>

      {/* Profile Image */}
      <img
        className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'
        src={user.imageUrl}
        alt='sidebar'
      />

      {/* User Name */}
      <p className='mt-2 text-base max-md:hidden'>
        {user.firstName} {user.lastName}
      </p>

      {/* Navigation Links */}
      <div className='w-full'>
        {adminNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end={link.path === "/admin"}
            className={({ isActive }) =>
              `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 transition-all
              ${isActive ? 'bg-[#D63854] text-white' : 'text-gray-400 hover:bg-gray-800/20'}`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className="max-md:hidden">{link.name}</p>
                <span
                  className={`w-1 h-10 absolute right-0 ${
                    isActive ? 'bg-[#D63854]' : ''
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>

    </div>
  )
}

export default AdminSidebar