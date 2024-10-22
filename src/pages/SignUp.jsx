import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
const [name, setName] = useState('')
const [age, setAge] = useState('')
const [matric_number, setMatric_number] = useState('');
const [department, setDepartment] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError]= useState(null);

const history = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await axios.post(`http://localhost:5000/api/students`, {
      name,
      age,
      matric_number,
      department,
    });

    if(response.status === 201){
      console.log('Student registered successfully');
      console.log(response.status);
      history('/')
    }
    setName("");
    setAge("");
    setMatric_number("");
    setDepartment("");
    setError(null);
    setLoading(false);
  } catch (err) {
    setError("can't register student. Please make sure all fields are filled or try again later.");
    setLoading(false);
    console.log(err);
    
  }
}

  return (
    <main className='min-h-screen text-sky-700 mt-6'>
        <h1 className='text-3xl text-center font-semibold'>Sign Up</h1>

    <form className='shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center'
    onSubmit={handleSubmit}>
    <div className='grid grid-cols-3 items-center place-content-center'>
        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Name:</label>
        <input type="text" name='name' id='name' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={(e) => setName(e.target.value)} />

        <label htmlFor="name" className='col-span-1 font-bold '>Age:</label>
        <input type="text" name='age' id='age' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none' 
        onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Matric-Number</label>
        <input type="text" name='matric_number' id='matric_number' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={(e) => setMatric_number(e.target.value)} />

        <label htmlFor="name" className='col-span-1 font-bold text-lg'>Department:</label>
        <input type="text" name='department' id='department' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
        onChange={(e) => setDepartment(e.target.value)} />
    </div>
    <div className='flex justify-center'>
        <button type='submit' className='px-7 py-2 border justify-center   text-white bg-sky-600 mt-12 rounded-lg shadow-xl text-xl transition-all duration-200 hover:shadow-xl hover:font-bold'>
          {loading ? "Registering..." : "Register"}</button>
    </div>
    {error && (
            <p className='text-red-500 text-center'>{error}</p>
          )}
    </form>
    </main>
  )
}

export default SignUp