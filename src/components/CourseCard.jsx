import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/course/description/", { state: { ...data } })}
      className="text-white w-[22rem] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full rounded-lg group-hover: scale-[1,2] transition-all"
          src={data?.thumbnail?.secure_url}
          alt="Coures thambnail"
        />
        <div className="p-3 space-y-1 text-white">
          <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
            {data?.title}
          </h2>
          <p className="line-clamp-2">{data?.description}</p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold"> category :</span>
            {data?.category}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold"> Total lecture :</span>
            {data?.numberOfLecturese}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold"> Instructor:</span>
            {data?.createdBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
