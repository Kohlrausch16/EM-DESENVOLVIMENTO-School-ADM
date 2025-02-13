import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Students from './pages/Students';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';

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
        <Route path="/class" element={<Classes />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;