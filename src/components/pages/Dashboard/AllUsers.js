import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner.js/Spinner';
import UserRow from './UserRow';

const AllUsers = () => {
    const { isLoading, data: users, refetch } = useQuery(('users'), () => fetch(`http://localhost:5000/users`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl text-center my-10'>All user</h1>
            <h2 className='text-xl text-center my-10'>Total user: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Remove user</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;