"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        setSuccessMessage("Message sent successfully!🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Message sending failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col justify-items-center items-center py-20 bg-gradient-to-tr from-zinc-600 to-zinc-950 h-screen text-zinc-700">
      <h1 className="text-red-50 text-xl hover:text-2xl">
        Let's chat! Tell me about your project! 🤩
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-8 ml-8 w-full max-w-lg justify-items-center border-y-4 border-pink-800/50 hover:border-pink-800"
      >
        {/* Form inputs and elements here */}
        <div className="flex flex-wrap mb-6 mt-2">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            minLength={2}
            maxLength={15}
            required
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="basis-1/4 flex-col px-4 py-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-pink-800"
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            minLength={5}
            maxLength={150}
            required
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="basis-1/4 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-pink-800"
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            minLength={7}
            maxLength={150}
            required
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-pink-800"
          />
        </div>
        <button
          type="submit"
          className="basis-1/4 py-2 px-4 bg-blue-500 text-white rounded-3xl hover:bg-pink-800 mb-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
