import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landingpage from './pages/Landingpage';
import Auth from './pages/Auth';
import Admission from './pages/Admission';
import Admin from './pages/Admin';
import Student from './pages/Student';
import Notification from './components/Notification';
import Enquiry from './components/Enquiry';
import Review from './components/Review';
import Post from './components/Post';
import Profile from './components/Profile';
import Exam from './components/Exam';
import Result from './components/Result';
import Request from './components/Request';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landingpage/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth register/>}></Route>
        <Route path='/admission' element={<Admission/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/notification' element={<Notification/>}></Route>
        <Route path='/enquiry' element={<Enquiry/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/student/profile' element={<Profile/>}></Route>
        <Route path='/student/exam' element={<Exam/>}></Route>
        <Route path='/student/result' element={<Result/>}></Route>
        <Route path='/student/request' element={<Request/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
