import profileImage from '../assets/luffy.png';

const Summary = () => {
  return (
    <div className="mb-16 mt-16 px-4">
      <div className="flex flex-col sm:flex-row w-full gap-8 items-center">
        {/* Text Section */}
        <div className="font-primary sm:w-1/2 flex flex-col gap-4">
          <div className="flex flex-row gap-2.5 mt-6 sm:mt-12 font-semibold text-4xl sm:text-5xl">
            <h1 className="text-gray-400">I'm</h1>
            <h1>Himanshu Kumar</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-700">
            As a full stack developer, I craft end-to-end web solutions for growing businesses.
            My expertise spans front-end design, back-end programming, and database management.
            I build responsive interfaces, develop robust server-side applications, and optimize
            database performance. Leveraging latest technologies and best practices, I excel in
            problem-solving and implementing efficient data structures.
          </p>
        </div>

        {/* Image Section */}
        
        <div className="hidden sm:flex sm:w-1/2 items-center justify-center">
          <img
              src={profileImage}
              alt="luffy"
              className="max-h-72 sm:max-h-[300px] md:max-h-[350px] w-auto object-contain"
              />
            </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8 flex  ">
        <button className="bg-black text-white px-6 py-3 rounded-lg text-base sm:text-lg">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Summary;
