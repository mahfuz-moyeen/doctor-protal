import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {

    const { email, role } = user;

    const handleAdmin = () => {
        fetch(`https://doctor-portal-pi.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr >
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role !== 'admin' && <button onClick={() => handleAdmin()} className="btn btn-xs">Make Admin</button>}</td>
            <td>
                <button className='btn btn-xs btn-error'>Remove user</button>
            </td>
        </tr>
    );
};

export default UserRow;