import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout.jsx";
import CourseCard from "../../components/CourseCard.jsx";

function CourseList() {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  async function loadCourse() {
    const res = await dispatch(getAllCourses());

    // console.log(res?.payload);
  }

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white ">
        <h1 className="text-3xl text-center capitalize mb-5 font-semibold ">
          Explore the course made by
          <span className=" ml-3 font bold text-yellow-500 ">
            Industry exparts
          </span>
        </h1>
        <div className="mb-10 flex ml-24 flex-wrap gap-14">
          {courseData?.map((element) => {
            return <CourseCard key={element._id} data={element} />;
          })}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseList;
