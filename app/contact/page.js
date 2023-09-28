export default function Contact() {
  return (
    <div className="flex flex-col justify-items-center items-center py-20 bg-gradient-to-tr from-zinc-600 to-zinc-950 h-screen text-zinc-700">
      <h1 className="text-red-50 text-xl hover:text-2xl">
        Let's chat! Tell me about your project! 🤩
      </h1>
      <form className="mt-8 ml-8 w-full max-w-lg justify-items-center border-y-4 border-pink-800/50 hover:border-pink-800">
        <div className="flex flex-wrap mb-6 mt-2 ">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="basis-1/4  flex-col px-4 py-2 border rounded-md   focus:outline-none focus:ring-2 focus:ring-pink-800 hover:bg-slate-600"
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label htmlFor="name" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            className="basis-1/4 px-4 py-2 border rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-800"
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            className=" px-4 py-2 border rounded-md  hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-800"
          />
        </div>
        <button
          type="submit"
          className=" basis-1/4 py-2 px-4 bg-blue-500 text-white rounded-3xl hover:bg-pink-800 mb-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
