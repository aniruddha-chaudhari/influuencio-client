import React from 'react'
import { createContext,useContext } from 'react'
import { useState } from 'react'
import img1 from '../../assets/rsz_1rsz_influenio.jpg'
import {ChevronFirst, ChevronLast} from 'lucide-react'
import { MoreVertical } from 'lucide-react'
import { LifeBuoy,Receipt,Boxes,Package,UserCircle,BarChart3,LayoutDashboard,Settings} from 'lucide-react'

const Sidebarcontext = createContext()
export default function sidebar() {
  const[expanded,setExpanded]=useState(true)
  return (
    <aside className={`h-screen fixed ${expanded ? "w-56" : "w-20"}`}>
     <nav className={`h-full flex flex-col bg-white ${expanded ? "shadow-md" : ""}`}>
      <div className='p-4 pb-2 flex justify-between items-center'>
        <img
         src={img1} 
         className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} 
         alt="" 
         />
         <button onClick={()=>setExpanded(curr => !curr)} className='p-2 rounded-lg bg-gray-50 hover:bg-gray-200'>
          {expanded ? <ChevronFirst /> : <ChevronLast/>}
         </button>
      </div>

      <Sidebarcontext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">
          <Sidebaritem
              icon={<LayoutDashboard size={20} />}
              text="Dashboard"
              alert
              to="/"
            />
            <Sidebaritem
              icon={<BarChart3 size={20} />}
              text="Analytics"
              active
              to="/analytics"
            />
            <Sidebaritem
              icon={<UserCircle size={20} />}
              text="Users"
              to="/users"
            />
            <Sidebaritem
              icon={<Boxes size={20} />}
              text="Inventory"
              to="/inventory"
            />
            <Sidebaritem
              icon={<Package size={20} />}
              text="Orders"
              alert
              to="/orders"
            />
            <Sidebaritem
              icon={<Receipt size={20} />}
              text="Billings"
              to="/billings"
            />
            <hr className="my-3" />
            <Sidebaritem
              icon={<Settings size={20} />}
              text="Settings"
              to="/settings"
            />
            <Sidebaritem
              icon={<LifeBuoy size={20} />}
              text="Support"
              to="/support"
            />
          
          
          </ul>
        </Sidebarcontext.Provider>
<div className='border-t flex p-3'>
  <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" 
  className='w-10 h-10 rounded-full'
  />

<div className={`
flex justify-between items-center
overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
  <div className='loading-4'>
    <h4 className='font-semibold'>John Doe</h4>
  </div>
<MoreVertical size={20} />
</div>
</div>
     </nav>
    </aside>
  )
}

export function Sidebaritem({icon,text,active,alert}) {
  const { expanded } = useContext(Sidebarcontext)
  return (
    <li className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${
      active
      ? 'bg-gradient-to-tr from-fuchsia-50 to-rose-100 text-rose-500'
      : 'hover:bg-rose-50 text-gray-600'
    }
    `}>
      {icon}
      <span className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }
      `} >
        {text}
      </span>
      {alert && (
        <div className={` absolute right-2 w-2 h-2 bg-rose-500 rounded-full ${
          expanded ? "" : "top-2 right-4"
        }`}/>
      )}

      {!expanded && (
        <div
        className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-fuchsia-50 text-rose-500 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100
        group-hover:translate-x-0
        `}
       >
        {text}
       </div> )}
    </li>
  )
}