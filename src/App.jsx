import './App.css'
import Navigation from './components/Navigation'
import AboutUs from './pages/AboutUs'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/signUp'
import StudentDetails from './components/StudentDetails'
import { Route, Routes} from 'react-router-dom'
import EditStudent from './pages/EditStudent'
import TeacherSignUp from './pages/TeacherSignUp'
import TeacherDetails from './components/TeacherDetails'
import EditTeacher from './pages/EditTeacher'



function App() {
  return (
    <>
    <Navigation/>
     <Routes>
      <Route path='/' element = {<DashBoard/>}/>
      <Route path='/signup' element = {<SignUp/>}/>
      <Route path='/aboutus' element = {<AboutUs/>}/>
      <Route path='/student/:_id' element={<StudentDetails/>}/>
      <Route path ='/edit/:_id' element={<EditStudent/>}/>
      <Route path = '/teacherEdit/:_id' element={<EditTeacher/>}/>
      <Route path ='/teachersignup' element={<TeacherSignUp/>}/>
      <Route path ='/teacher/:_id' element={<TeacherDetails/>}/>
     </Routes>
    </>
  )
}


export default App
