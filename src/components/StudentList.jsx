import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const StudentList = () => {
    const [students, setStudents] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchStudents = async () => {
            try{
                setLoading(true);
                const res = await axios.get('http://localhost:5000/api/students');
                console.log(res.data.students);
                setStudents(res.data.students);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleRowClick = (_id) => {
        navigate(`/student/${_id}`)
    }

  return (
    <div className='my-20'>
        <table className='border table-auto w-full'>
            <thead>
                <tr className='bg-white text-dark font-bold'>
                    <th className='border border-dark px-4 py-2'>Name</th>
                    <th className='border border-dark px-4 py-2'>Age</th>
                    <th className='border border-dark px-4 py-2'>Matric Number</th>
                    <th className='border border-dark px-4 py-2'>Department</th>
                </tr>
            </thead>
            <tbody>
                        {students && students.length > 0 ? (
                            students.map((student, index) => (
                                <tr key={index} className='table-row cursor-pointer' onClick={() => handleRowClick(student._id)}>
                                    <td className='border border-dark px-4 py-2 text-center'>{student.name}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{student.age}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{student.matric_number}</td>
                                    <td className='border border-dark px-4 py-2 text-center'>{student.department}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center p-4'>No students found.</td>
                            </tr>
                        )}
                    </tbody>
        </table>
    </div>
  )
}

export default StudentList



//  <tbody>
//                 {loading ? (<div className='h-36 grid place-content-center w-full text-emerald-600'><AiOutlineLoading3Quarters className='text-3xl animate-spin' />
//                     </div>
//                 ): (
//                     students&&students.map((student, index) =>(
//                         <tr key = {index} className='table-row'>
//                             <td className='border border-dark px-4 py-2 text-center'>{student.name}</td>
//                             <td className='border border-dark px-4 py-2 text-center'>{student.age}</td>
//                             <td className='border border-dark px-4 py-2 text-center'>{student.matric_number}</td>
//                             <td className='border border-dark px-4 py-2 text-center'>{student.department}</td>
//                         </tr>
//                     ))
//                 )}
//             </tbody>