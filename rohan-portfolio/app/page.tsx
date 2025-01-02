export default function HomePage() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Section: Text */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Rohan Bokaria
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Software Engineer | Tech Enthusiast | Blogger
          </p>
          <a
            href="/Rohan_Bokaria_Resume.pdf"
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
        </div>

        {/* Right Section: Headshot */}
        <div className="flex-1 flex justify-center">
        <img
          src="/images/Rohan.png" // Use the absolute path starting with `/`
          alt="Rohan Bokaria"
          className="rounded-full w-48 md:w-64 shadow-lg"
        />
        </div>
      </div>
    </section>
  );
}