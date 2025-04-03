import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BrokenLink from './pages/BrokenLink';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Navigate to="/" />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="*" element={<BrokenLink />} />
            </Routes>
          </main>
        </div>
      <Footer/>
      </Router>
    </>
  );
}

export default App;