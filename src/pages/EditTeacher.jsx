import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const initialState = {
    name: "",
    department: "",
    staff_id: "",
    age: "",
    qualification: "",
    salary: "",
}

const EditTeacher = () => {
    const [TeacherDet, setTeacherDet] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const history = useNavigate()

    const {_id} = useParams()

    const handleChange = (e) => {
        let {name, value} = e.target;

        setTeacherDet({...TeacherDet, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.patch(`http://localhost:5000/api/teachers/${_id}`, TeacherDet)

            if(response.status === 200){
                console.log('Teacher Updated');
                console.log(response.status);
                history('/')
            }
            console.log(TeacherDet);

            setError(null)
            setLoading(false) 
        } catch (err) {
            setError("can't register student. Please make sure all fields are filled or try again later.");
            setLoading(false)
            console.log(err);
            
        }
    }

    useEffect(() => {
        const fetchTeacherDetail = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/teachers/${_id}`);
                console.log(res.data.teacher);
                setTeacherDet(res.data.teacher);
                
            } catch (err) {
                console.log(err);
                setLoading(false)
                
            }
        }
        fetchTeacherDetail()
    }, [_id])

    return (

        <main className='min-h-screen text-sky-700 mt-6'>
        <h1 className='text-3xl text-center font-semibold'>Update Teacher</h1>

    <form className='shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center'
    onSubmit={handleSubmit}>
    <div className='grid grid-cols-3 items-center place-content-center'>
        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Name:</label>
        <input type="text" name='name' id='name' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {TeacherDet.name}
        />

        <label htmlFor="name" className='col-span-1 font-bold '>Age:</label>
        <input type="text" name='age' id='age' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none' 
        onChange={handleChange} 
        value = {TeacherDet.age}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Staff_ID:</label>
        <input type="text" name='staff_id' id='staff_id' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {TeacherDet.staff_id}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Department:</label>
        <input type="text" name='department' id='department' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {TeacherDet.department}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Qualification:</label>
        <input type="text" name='qualification' id='qualification' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {TeacherDet.qualification}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Salary:</label>
        <input type="text" name='salary' id='salary' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {TeacherDet.salary}
        />
    </div>
    <div className='flex justify-center'>
        <button type='submit' className='px-7 py-2 border justify-center   text-white bg-sky-600 mt-12 rounded-lg shadow-xl text-xl transition-all duration-200 hover:shadow-xl hover:font-bold'>
          {loading ? "Updating..." : "Update"}</button>
    </div>
    {error && (
            <p className='text-red-500 text-center'>{error}</p>
          )}
    </form>
    </main>
  )
}

export default EditTeacher