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
import UserProfile from "./pages/User/UserProfile";
import EditProfile from "./pages/User/EditProfile";
import Checkout from "./pages/Payment/Checkout";
import Displaylectures from "./pages/Dashboard/Displaylectures";
import Addlecture from "./pages/Dashboard/Addlecture";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";

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

          <Route path="/admin/dashbord" element={<AdminDashboard />} />

          <Route path="/course/addlecture" element={<Addlecture />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/editprofile" element={<EditProfile />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/course/displaylecture" element={<Displaylectures />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
