import React from "react";
import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font font-extrabold text-white tracking-widest">
        403
      </h1>
      <div className="bg-black text-white px-2 text-sm absolute rotate-12">
        Access denied
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring">
          <span
            onClick={() => navigate(-1)}
            className="relative block px-8 py-3 bg-[#1A2238] border border-current rounded-lg"
          >
            Go Back
          </span>
        </a>
      </button>
    </main>
  );
}

export default Denied;
