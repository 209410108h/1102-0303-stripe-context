import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext} from './context'

const Sidebar_08 = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div className = {`${ isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper' }`}>
        <aside className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </aside>
    </div>
  )
}

export default Sidebar_08
