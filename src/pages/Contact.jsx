import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatch";
import axiosIntances from "../helpers/axiosinstance";

function Contact() {
  const [userInput, setuserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setuserInput({
      ...userInput,
      [name]: value,
    });
  };

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All fileld are required");
      return;
    }
    if (!isEmail(userInput.email)) {
      toast.error("Invalid email id");
      return;
    }
    try {
      const res = axiosIntances.post("/contact", userInput);
      toast.promise(res, {
        loading: "submited your messages.. ",
        success: " Form submitted seccuessfully",

        error: "Failed to submit form",
      });
      const contactRespones = await res;
      if (contactRespones?.data?.success) {
        setuserInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("opertion failed ..");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]"
        >
          <h1 className="text-3xl font-semibold capitalize">contact Form</h1>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullName" className="font-semibold">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Enter your name.."
              className="bg-transparent px-2 py-1 border rounded-lg"
              onChange={handleUserInput}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullName" className="font-semibold">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email.."
              className="bg-transparent px-2 py-1 border rounded-lg"
              onChange={handleUserInput}
              value={userInput.email}
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="fullName" className="font-semibold">
              {" "}
              Message{" "}
            </label>
            <textarea
              type="message"
              required
              name="message"
              id="message"
              placeholder="Enter your message..."
              className="bg-transparent px-2 py-1 border rounded-lg resize-none h-40"
              onChange={handleUserInput}
              value={userInput.message}
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-yellow-600 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            Countact Us
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Contact;
