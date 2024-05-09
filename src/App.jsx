import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CourseList from "./pages/Course/CourseList";
import Contact from "./pages/Contact";
import Denied from "./pages/Denied";
import CourseDescription from "./pages/Course/CourseDescription";
import RequireAuth from "./components/Auth/Requireauth";
import CreateCourse from "./pages/Course/CreateCourse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/description" element={<CourseDescription />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/courses/create" element={<CreateCourse />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />
      </Routes>
    </>
  );
}

export default App;
