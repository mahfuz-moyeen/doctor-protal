import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex gap-2">
                {/* <!-- Page content here --> */}
                    <label htmlFor="dashboard" className="sticky top-0 h-screen bg-accent p-2 flex items-center text-base-100 text-xl font-bold drawer-button lg:hidden">></label>

                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content gap-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/my-appointment'>My Appointment</NavLink></li>
                    <li><NavLink to='/dashboard/my-reviews'>My Review</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;