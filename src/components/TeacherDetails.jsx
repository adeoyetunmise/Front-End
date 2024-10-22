import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";

const TeacherDetails = () => {
    const {_id} = useParams();
    const history = useNavigate();

    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTeacherDetail = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/api/teachers/${_id}`);
                setTeacher(res.data.teacher)
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                
            }
        }

        fetchTeacherDetail()
    }, [_id]);

    const deleteTeacher = async () => {
        const sure = window.confirm("Are you sure you want to delete this Teacher?");

    if (sure) {
        try{
            const res = await axios.delete(`http://localhost:5000/api/teachers/${_id}`)
        if (res.status === 200) {
            console.log("Teacher deleted successfully");
            history('/')
            
        }
        }catch(err) {
            console.log(err);
            
        }
    }
    }

    const firstLetter = teacher?.name.split('')[0].toUpperCase();
  return (
    <div className='flex flex-col items-center justify-center'>
    <>
    <div  className='bg-sky-700 text-white rounded-full p-5 h-36 w-36 m-2 grid place-content-center'>
        <h2 className='text-7xl front-extrabold'>{firstLetter}</h2>
    </div>
        <div>
            {loading ? (
                <div className='h-36 grid place-content-center w-full text-emerald-600'>
                    Loading...
                </div>
            ) : (
                teacher ? (
                    <div className='p-4'>
                        <h1 className='text-2xl text-sky-900 font-bold mb-4'>Teacher Details</h1>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Name:</strong> {teacher.name}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Age:</strong> {teacher.age} years old</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Staff Id:</strong> {teacher.staff_id}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Department:</strong> {teacher.department}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Qualification:</strong> {teacher.qualification}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Salary:</strong> {teacher.salary}</p>
                    </div>
                ) : (
                    <p className='text-center'>Teacher not found.</p>
                )
            )}
        </div>
        <Link to={`/teacherEdit/${_id}`} className='bg-green-800 text-white px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-sky-300'><CiEdit className='text-white text-2xl'/> 
        </Link>
        <button onClick={deleteTeacher} className="bg-red-500 text-white px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-red-300"><MdDelete className='text-white text-2xl'/></button>
        </>
        </div>
  )
}

export default TeacherDetails