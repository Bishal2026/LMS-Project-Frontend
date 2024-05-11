import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { role, data } = useSelector((state) => state.auth);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5">
            <img
              className="w-full h-64"
              src={state?.thumbnail?.secure_url}
              alt="Coures thambnail"
            />
            <div className="space-y-4">
              <div className="flex items-center flex-col justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    {" "}
                    Total lecture :
                  </span>
                  {state?.numberOfLecturese}
                </p>

                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor :{" "}
                  </span>
                  {state?.createdBy}
                </p>
              </div>
              {role === "ADMIN" || data?.subscription?.status === "active" ? (
                <button
                  onClick={() =>
                    navigate("/course/displaylecture", { state: { ...state } })
                  }
                  className="mt-2 bg-yellow-600 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                >
                  {" "}
                  Watch lectures
                </button>
              ) : (
                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-2 bg-yellow-600 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                >
                  Subcribe
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2 text-xl">
            <h1 className="text-3xl font-bold text-yellow-500 line-clamp-2">
              {state?.title}
            </h1>
            <p className="text-yellow-500">Course Description :</p>
            <p className="line-clamp-2">{state?.description}</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
