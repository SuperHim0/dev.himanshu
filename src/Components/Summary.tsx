import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconExternalLink} from '@tabler/icons-react';
import profileImage from '../assets/luffy.png';
import { Fade } from "react-awesome-reveal";

const Summary = () => {
  return (
    <div className="mb-16 mt-16 px-4">
      <div className="flex flex-col sm:flex-row w-full gap-8 items-center">
        {/* Text Section */}
        <div className="font-primary sm:w-1/2 flex flex-col gap-4">
          <div className="flex flex-row gap-2.5 mt-6 sm:mt-12 font-semibold text-4xl sm:text-5xl">


            <Fade cascade 
            delay={100}
            duration={1000}>
            <h1 className="text-gray-400">I'm</h1>
            <h1>Himanshu Kumar</h1>
            </Fade>
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
      <div className="mt-8 flex flex-col gap-4">
        <div className='flex flex-row gap-4'>
          <IconBrandLinkedin onClick={()=>{window.open("http://www.linkedin.com/in/him-kumar")}}  size={48} className='cursor-pointer hover:text-gray-500'/>
          <IconBrandGithub onClick={()=>{window.open("https://github.com/SuperHim0")}}  size={48} className='cursor-pointer hover:text-gray-500'/>
          <IconBrandLeetcode onClick={()=>{window.open("https://leetcode.com/u/superhim/")}}  size={48} className='cursor-pointer hover:text-gray-500'/>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-base sm:text-lg  w-2/12 flex gap-2 hover:bg-gray-600 cursor-pointer" onClick={()=>{window.open("https://drive.google.com/file/d/10PThvNFtszvLNd0bDhCJLi24Io7w8yC3/view?usp=sharing")}}>
         <IconExternalLink /> View Resume
        </button>
      </div>
    </div>
  );
};

export default Summary;
