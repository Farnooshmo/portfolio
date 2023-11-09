// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <h1 className="text-red-50 text-md md:text-xl text-center hover:text-pink-800">
        Get in touch!
        Tell me about your project!
      </h1>
    </div>
  );
}

//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [subject, setSubject] = useState("");
//   // const [message, setMessage] = useState("");

//   // //   Form validation
//   // const [errors, setErrors] = useState({});

//   // //   Setting button text
//   // const [buttonText, setButtonText] = useState("Send");

//   // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   // const [showFailureMessage, setShowFailureMessage] = useState(false);

//   // const handleValidation = () => {
//   //   let tempErrors = {};
//   //   let isValid = true;

//   //   if (name.length <= 0) {
//   //     tempErrors["name"] = true;
//   //     isValid = false;
//   //   }
//   //   if (email.length <= 0) {
//   //     tempErrors["email"] = true;
//   //     isValid = false;
//   //   }
//   //   if (subject.length <= 0) {
//   //     tempErrors["subject"] = true;
//   //     isValid = false;
//   //   }
//   //   if (message.length <= 0) {
//   //     tempErrors["message"] = true;
//   //     isValid = false;
//   //   }

//   //   setErrors({ ...tempErrors });
//   //   console.log("errors", errors);
//   //   return isValid;
//   // };

//   // //   const [form, setForm] = useState(false);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   let isValidForm = handleValidation();

//   //   if (isValidForm) {
//   //     setButtonText("Sending");
//   //     const res = await fetch("/api/sendgrid", {
//   //       body: JSON.stringify({
//   //         email: email,
//   //         name: name,
//   //         subject: subject,
//   //         message: message,
//   //       }),
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       method: "POST",
//   //     });

//   //     const { error } = await res.json();
//   //     if (error) {
//   //       console.log(error);
//   //       setShowSuccessMessage(false);
//   //       setShowFailureMessage(true);
//   //       setButtonText("Send");

//   //       // Reset form fields
//   //       setName("");
//   //       setEmail("");
//   //       setMessage("");
//   //       setSubject("");
//   //       return;
//   //     }
//   //     setShowSuccessMessage(true);
//   //     setShowFailureMessage(false);
//   //     setButtonText("Send");
//   //     // Reset form fields
//   //     setName("");
//   //     setEmail("");
//   //     setMessage("");
//   //     setSubject("");
//   //   }
//   //   console.log(name, email, subject, message);
//   // };
// return (
//     <div className="flex flex-col justify-items-center items-center py-20 bg-gradient-to-tr from-zinc-600 to-zinc-950 h-screen text-zinc-700">
//       <h1 className="text-red-50 text-xl hover:text-2xl">
//         Get in touch! Tell me about your project!
//       </h1>
//       <form className="mt-8 ml-8 w-full max-w-lg justify-items-center border-y-4 border-pink-800/50 hover:border-pink-800">
//         {/* Form inputs and elements here */}
//         <div className="flex flex-wrap mb-6 mt-2">
//           <label htmlFor="name" className="sr-only">
//             Name
//           </label>
//           <input
//             minLength={2}
//             maxLength={15}
//             required
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Your name"
//             // value={formData.name}
//             // onChange={handleChange}
//             className="basis-1/4 flex-col px-4 py-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-pink-800"
//           />
//         </div>
//         <div className="flex flex-wrap mb-6">
//           <label htmlFor="email" className="sr-only">
//             Email
//           </label>
//           <input
//             minLength={5}
//             maxLength={150}
//             required
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Your email"
//             // value={formData.email}
//             // onChange={handleChange}
//             className="basis-1/4 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-pink-800"
//           />
//         </div>
//         <div className="flex flex-wrap mb-6">
//           <label htmlFor="message" className="sr-only">
//             Message
//           </label>
//           <textarea
//             minLength={7}
//             maxLength={150}
//             required
//             type="text"
//             name="message"
//             id="message"
//             placeholder="Your Message"
//             // value={formData.message}
//             // onChange={handleChange}
//             className="px-4 py-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-pink-800"
//           />
//         </div>
//         <Link href="https://formsubmit.co/el/dehuci">
//           <button
//             type="submit"
//             className="basis-1/4 py-2 px-4 bg-pink-800 text-white rounded-3xl hover:bg-pink-700 mb-2"
//           >
//             Send Message
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }
