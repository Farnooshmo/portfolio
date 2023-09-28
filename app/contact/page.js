export default function Contact() {
  return (
    <div className="flex flex-col mx-4 items-center py-20 bg-gradient-to-tr from-zinc-600 to-zinc-950 h-screen text-red-50">
      <form className="mt-8 w-full max-w-lg">
        <div className="flex flex-wrap mb-6">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="basis-1/4  flex-col px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="basis-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap mb-6">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            className="basis-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="h-1/5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
