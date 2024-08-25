import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner.js/Spinner';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://doctor-portal-pi.vercel.app/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-2xl text-center my-5 text-primary">Manage Doctor</h1>
            <h1 className="text-center">Total Doctor : {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmModal
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctor;