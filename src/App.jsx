
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to College Website</p>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <Link to="/course/1">Computer Science</Link><br />
      <Link to="/course/2">Information Technology</Link><br />
      <Link to="/course/3">Electronics</Link>
    </div>
  );
}

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: "Computer Science",
    2: "Information Technology",
    3: "Electronics"
  };

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {id}</p>
      <p>Course Name: {courses[id] || "Course Not Found"}</p>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Login Successful!</p>
    </div>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/courses">Courses</Link> {" | "}
        <Link to="/login">Login</Link> {" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
