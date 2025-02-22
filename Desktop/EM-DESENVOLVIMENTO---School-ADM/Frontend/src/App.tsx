import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Students from './pages/Students';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import StudentInfo from './pages/StudentInfo';
import ClassInfo from './pages/ClassInfo';

const NotFound = () => {
  return(
    <>
      <h1> Not found </h1>
    </>);
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/student/:id" element={<StudentInfo />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/class/:id" element={<ClassInfo />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;