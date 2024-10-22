import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const initialState = {
    name: "",
    department: "",
    matric_number: "",
    age: "",
}
;
const EditStudent = () => {
const[StudentDet, setStudentDet] = useState(initialState)
const [loading, setLoading] = useState(false);
const [error, setError]= useState(null);
const history = useNavigate();

const {_id} = useParams();

const handleChange = (e) => {
    let {name, value} = e.target;

    setStudentDet({...StudentDet, [name]: value});
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await axios.patch(`http://localhost:5000/api/students/${_id}`, 
    StudentDet
    );

    if(response.status === 200){
      console.log('Student updated');
      console.log(response.status);
      history("/")
    }
    console.log(StudentDet);
    
    setError(null);
    setLoading(false);
  } catch (err) {
    setError("can't register student. Please make sure all fields are filled or try again later.");
    setLoading(false);
    console.log(err);
    
  }
};
useEffect(() => {
    const fetchStudentDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/students/${_id}`);
            console.log(res.data.student);
            setStudentDet(res.data.student);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
    fetchStudentDetail();
}, [_id]);


  return (
    <main className='min-h-screen text-sky-700 mt-6'>
        <h1 className='text-3xl text-center font-semibold'>Update Student</h1>

    <form className='shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center'
    onSubmit={handleSubmit}>
    <div className='grid grid-cols-3 items-center place-content-center'>
        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Name:</label>
        <input type="text" name='name' id='name' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {StudentDet.name}
        />

        <label htmlFor="name" className='col-span-1 font-bold '>Age:</label>
        <input type="text" name='age' id='age' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none' 
        onChange={handleChange} 
        value = {StudentDet.age}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Matric-Number</label>
        <input type="text" name='matric_number' id='matric_number' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {StudentDet.matric_number}
        />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Department:</label>
        <input type="text" name='department' id='department' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={handleChange} 
        value = {StudentDet.department}
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

export default EditStudent