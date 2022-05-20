import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex gap-2">
                {/* <!-- Page content here --> */}
                <label htmlFor="dashboard" className="sticky top-0 h-screen bg-accent p-2 flex items-center text-base-100 text-xl font-bold drawer-button lg:hidden"> &#62;</label>

                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content gap-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/my-appointment'>My Appointment</NavLink></li>
                    <li><NavLink to='/dashboard/my-reviews'>My Review</NavLink></li>
                    {admin && <>
                        <li><NavLink to='/dashboard/users'>All User</NavLink></li>
                        <li><NavLink to='/dashboard/add-doctor'>Add new doctor</NavLink></li>
                        <li><NavLink to='/dashboard/manage-doctor'>Manage doctor</NavLink></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;