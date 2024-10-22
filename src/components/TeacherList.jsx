import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherList = () => {
const [teachers, setTeachers] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate()

useEffect(() => {
    const fetchTeachers = async () => {
        try{
            setLoading(true);
            const res = await axios.get('http://localhost:5000/api/teachers');
            console.log(res.data.teachers);
            setTeachers(res.data.teachers);
            setLoading(false);
            
        } catch (err) {
            console.log(err);
            setLoading(false)
            
        }
    };
    fetchTeachers();
}, []);

const handleRowClick = (_id) => {
    navigate(`/teacher/${_id}`)
}
  return (
    <div className='my-20'>
        <table className='border table-auto w-full'>
            <thead>
                <tr className='bg-white text-dark font-bold'>
                    <th className='border border-dark px-4 py-2'>Name</th>
                    <th className='border border-dark px-4 py-2'>Age</th>
                    <th className='border border-dark px-4 py-2'>Staff_ID</th>
                    <th className='border border-dark px-4 py-2'>Department</th>
                    <th className='border border-dark px-4 py-2'>Qualification</th>
                    <th className='border border-dark px-4 py-2'>Salary</th>
                </tr>
            </thead>
            <tbody>
                        {teachers && teachers.length > 0 ? (
                            teachers.map((teacher, index) => (
                                <tr key={index} className='table-row cursor-pointer' onClick={() => handleRowClick(teacher._id)}>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.name}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.age}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.staff_id}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.department}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.qualification}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{teacher.salary}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center p-4'>No teachers found.</td>
                            </tr>
                        )}
                    </tbody>
        </table>
    </div>
  )
}

export default TeacherList
