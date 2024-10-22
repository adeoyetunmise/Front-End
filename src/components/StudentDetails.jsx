import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";


const StudentDetails = () => {
    const {_id} = useParams();
    const history = useNavigate()

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const fetchStudentDetail = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:5000/api/students/${_id}`);
                setStudent(res.data.student);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchStudentDetail();
    }, [_id]);

    const deleteStudent = async () => {
        const sure = window.confirm(
            "Are you sure you want to delete this student?"
        );
        if (sure) {
            try {
                const res = await axios.delete(`http://localhost:5000/api/students/${_id}`)
        if (res.status === 200) {
            console.log("Student deleted successfully");
            history('/')
            
        }
            }catch(err) {
                console.log(err)
            }
        }
    }

    const firstLetter = student?.name.split("")[0].toUpperCase();
    
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
                student ? (
                    <div className='p-4'>
                        <h1 className='text-2xl text-sky-900 font-bold mb-4'>Student Details</h1>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Name:</strong> {student.name}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Age:</strong> {student.age} years old</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Matric Number:</strong> {student.matric_number}</p>
                        <p><strong className='font-semibold text-sky-600 mr-2'>Department:</strong> {student.department}</p>
                    </div>
                ) : (
                    <p className='text-center'>Student not found.</p>
                )
            )}
        </div>
        <Link to={`/edit/${_id}`} className='bg-green-800 text-white px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-sky-300'><CiEdit className='text-white text-2xl'/> 
        </Link>
        <button onClick={deleteStudent} className="bg-red-500 text-white px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-red-300"><MdDelete className='text-white text-2xl'/></button>
        </>
        </div>
  )
}

export default StudentDetails