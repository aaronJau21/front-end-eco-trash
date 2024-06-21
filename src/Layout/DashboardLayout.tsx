import { Outlet } from 'react-router-dom'
import { NavBarComponents } from './components/NavBarComponents'

export const DashboardLayout = () => {
    return (
        <div className='flex mt-7'>
            <NavBarComponents />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}
