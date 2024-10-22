import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherSignUp = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [staff_id, setStaff_id] = useState('');
    const [department, setDepartment] = useState('');
    const [qualification, setQualification] = useState('');
    const [salary, setSalary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(null);

    const history = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const response = await axios.post(`http://localhost:5000/api/teachers`, {
            name,
            age,
            staff_id,
            department,
            qualification,
            salary
          });
      
          if(response.status === 201){
            console.log('Teacher registered successfully');
            console.log(response.status);
            history('/')
          }
          setName("");
          setAge("");
          setStaff_id("");
          setDepartment("");
          setQualification("");
          setSalary("")
          setError(null);
          setLoading(false);
        } catch (err) {
          setError("can't register teacher. Please make sure all fields are filled or try again later.");
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

    <label htmlFor="name" className='col-span-1 font-bold text-lg'>Staff_Id</label>
    <input type="text" name='staff_id' id='Staff_id' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
    onChange={(e) => setStaff_id(e.target.value)} />

    <label htmlFor="name" className='col-span-1 font-bold text-lg'>Department:</label>
    <input type="text" name='department' id='department' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
    onChange={(e) => setDepartment(e.target.value)} />

    <label htmlFor="name" className='col-span-1 font-bold text-lg'>Qualification:</label>
    <input type="text" name='qualification' id='qualification' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
    onChange={(e) => setQualification(e.target.value)} />

    <label htmlFor="name" className='col-span-1 font-bold text-lg'>Salary:</label>
    <input type="text" name='salary' id='salary' className='col-span-2 w-full p-2 border-b-2 border-sky-600 outline-none'
    onChange={(e) => setSalary(e.target.value)} />


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

export default TeacherSignUp
