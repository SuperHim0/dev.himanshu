import himanshu from "../assets/himanshu.jpg";

const AboutMe = () => {
    const aboutMeDetails = [
        {title: "WHO I AM", description: "As a final-year Computer Science student at UIET MDU Rohtak, I am honing my skills as a full-stack developer, with a strong focus on problem-solving and data structures."},
        {title: "WHAT I DO", 
            description: "I am a full-stack developer with strong expertise in Java and Spring Boot, focused on building scalable, efficient, and maintainable server-side applications. I have hands-on experience in designing and developing RESTful APIs, managing relational databases using PostgreSQL, and applying core data structures and algorithms to solve real-world problems effectively."},
        {title: "WHAT I DID", description: "I secured 5th rank in a Smart India Hackathon (SIH) college-level hackathon, where I contributed as a backend developer by creating a chatbot and a login/signup module using Spring Boot."},
        {title: "MY LEARNING RESOURCES", description: "I have acquired web technology skills from various online resources, such as YouTube videos,StackOverflow, freecodecamp, W3Schools, and official documentation etc."},
    ]

    // const ceritficate = [

    // ]

  return (
    <section className='flex flex-col gap-4'>
        <div className='border-b-2 border-gray-200 py-12'>
            <h1 className='font-primary text-2xl font-semibold'>A little bit About Me</h1>
            <p className='font-primary text-md font-medium mt-2 text-gray-500'>Who am i and what i do</p>
        </div>
        <div className="flex flex-row gap-8 m-6">
            <div className="w-6/10 flex flex-col gap-6">
                {
                    aboutMeDetails.map((about,index)=>(
                        <div key={index} className="flex flex-col gap-4">
                            <h2 className="font-family font-semibold tracking-wide text-lg">{about.title}</h2>
                            <p className="font-primary text-md text-gray-700">  {about.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-4 items-center" >
                <img className="w-[50%]" src={himanshu} alt="Profile" />
                <button className="bg-black text-white w-1/3 rounded-lg h-12">Get in Touch</button>
            </div>
        </div>
    </section>
  )
}

export default AboutMe