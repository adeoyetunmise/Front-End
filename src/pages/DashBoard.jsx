import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import anim from '../assets/Animation - 1728387110071.json'
import StudentList from '../components/StudentList';
import TeacherList from '../components/TeacherList';


const DashBoard = () => {
    
    const history = useNavigate();

    

  return (
    <main className='text-neutral-900 py-10 bg-sky-600 md:px-24 min-h-screen'>
        <div className='flex justify-between items-center flex-col md:flex-row'>

            <div className='space-y-5 md:w-1/2 text-center md:text-start'>
                <h1 className='text-3xl font-bold text-white text-justify'>
                    Welcome to the SchoolUp App, where you find ALL your school needs
                </h1>
                <p className='text-xl text-slate-800 text-center'>
                    Explore all basic need about education with our features, within and outside the school. 
                </p>
                <div className='flex justify-between'>
                <button onClick={() => history("/signup")} className='px-7 py-4 border  text-black bg-white mt-12 rounded-lg shadow-xl text-xl transition-all duration-200 hover:shadow-xl hover:font-bold'>Student's Registration</button>
                <button onClick={() => history("/teachersignup")} className='px-7 py-4 border  text-black bg-white mt-12 rounded-lg shadow-xl text-xl transition-all duration-200 hover:shadow-xl hover:font-bold'>Teacher's Registration</button>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <Lottie
                animationData = {anim}
                loop = {true}
                autoplay = {true}
                style = {{ height: 300, width: '100%'}}
                />
            </div>


        </div>
    <StudentList/>
    <TeacherList/>
    </main>
  )
}

export default DashBoard