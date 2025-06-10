import projectImg1 from '../assets/monitor.png';
import FreshBasekt from '../assets/freshbasketImg.png';
import Homeopathy from '../assets/homeopathy.png';
import EduHub from '../assets/EduHub.png'
import SrmsImg from '../assets/srms.png';
import { Fade } from 'react-awesome-reveal';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
const Projects = () => {
const projectsDetails = [
    { title: "Edu-Hub", description: "Edu-Hub is a full-stack e-learning application that enables students to purchase and stream educational courses. The platform uses Razorpay for secure payment processing and JWT-based authentication to manage user sessions. Built with React.js on the frontend and Spring Boot on the backend, the system ensures responsive UI and robust API services. A scheduling mechanism is implemented to automatically expire course access after one month, ensuring time-bound availability. Once expired, courses are no longer visible to students. The application demonstrates strong integration of security, payments, scheduling, and user access control, making it a complete learning platform.",
       techUsed: ["React", "Java", "TypeScript","Tailwind-CSS", "Spring Boot", "Postgres"], picture: EduHub , links: [{value:"https://edu-hub-smoky.vercel.app/",label:"Visit Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/Edu-hub",label:"view Project",icon:<IconBrandGithub></IconBrandGithub>}]
   },
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: FreshBasekt , links: [{value:"https://grocerysite-production.up.railway.app/",label:"Visit Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/Grocery_site",label:"Source Code",icon:<IconBrandGithub></IconBrandGithub>} ]
         },
        { title: "Student Result Management System", description: "SMS is a web-based application designed to manage student records efficiently. Administrators can add new students, update their results, post important notices, and perform complete CRUD operations on all entities. The platform includes a secure login system with role-based access, allowing only authorized users to manage academic data. Built using React.js for the frontend and Spring Boot for the backend, SMS ensures smooth and scalable performance. A demo login is available at /login using Email: Admin@admin.com and Password: Admin@123.",
            techUsed: ["React", "Java", "JavaScript","Tailwind-CSS", "Spring Boot", "Postgres"], picture: SrmsImg , links: [{value:"https://smrs-frontend.vercel.app/",label:"Vist Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/SMRS_Frontend",label:"Source Code", icon:<IconBrandGithub></IconBrandGithub>}]
        },
        { title: "Homeopathy", description: "This project is a responsive single-page frontend for a homeopathy clinic or practice, designed specifically for desktop viewports. It includes a professional header with navigation links (such as Home, About, Services, Contact), a clean hero section to showcase clinic highlights or specialties, and an informative footer with contact details, social media links, and quick navigation. Built using React.js and Tailwind CSS, the layout is clean, modern, and user-friendly, reflecting trust and care – ideal for a health-focused audience.",
            techUsed: ["React","Tailwind-CSS","TypeScript"], picture: Homeopathy , links: [{value:"https://deft-rabanadas-a3c899.netlify.app/",label:"Vist Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0",label:"Source Code", icon:<IconBrandGithub></IconBrandGithub>}]
        },
        { title: " Pathology Lab Management System", description: "– Developed a monolithic app for Doctor to generating and printing PDF test reports for patients. – Enabled test value updates, dynamic pricing, and test additions with data managed via MySQL – Streamlined the report generation process with IText for PDF creation, enhancing operational efficiency – Patient Management: Registration, test booking, and report generation. – Admin Panel:test management, and billing.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: FreshBasekt , links: [{value:"#",label:"Visit Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/pahology-lab",label:"Source Code",icon:<IconBrandGithub></IconBrandGithub>}]
        },
    ]

  return (
    <section className='flex flex-col gap-4'> 
    <div className='border-b-2 border-gray-200 py-8'>
            <h1 className='font-primary text-3xl font-semibold'>Projects</h1>
            <p className='font-primary text-md font-medium mt-2 text-gray-500'>project i have wroked on</p>
        </div>
        <div className="flex flex-col gap-4 ">
            {projectsDetails.map((project, index) => (

            
         <div className="shadow-md bg-gray-100 w-full rounded-xl mt-8 flex flex-col gap-4" key={index}>
            <div className='md:flex md:flex-row m-8'>
                <div className="md:w-[50%] flex gap-6 flex-col">
                    <h1 className='font-primary text-2xl font-semibold'>{project.title}</h1>

                     <div className='block scale-110  md:hidden w-full'>
                        <Fade duration={1000} delay={300} className='flex items-center justify-center'>
                            <img src={project.picture}  alt="" className='w-[70%] border-2 transform transition-transform duration-200 hover:scale-110 rounded-lg z-[0] '></img>
                        </Fade>
                    </div>

                    <p className='font-primary'>{project.description}</p>
                    <div>
                        <h3 className='font-semibold text-md font-primary'>Tech Used</h3>
                        <ul className='gap-4 mt-4 grid grid-cols-2  sm:grid-cols-3' key={index}>
                            {project.techUsed.map((tech, index) =>(

                                <li key={index} className='bg-white text-gray-500 px-2 rounded-lg flex items-center text-center justify-center'>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    
                    
                </div>
                
                <div className='hidden  md:w-1/2 lg:w-1/2 md:flex relative items-center justify-center'>
                    
                    <img src={projectImg1} alt="" className='w-[90%]  lg:mt-4  rounded-lg z-10'></img>
                    <img src={project.picture}  alt="" className='w-[70%]  top-9/20 left-1/2 transform -translate-x-1/2  -translate-y-1/2  rounded-lg z-0 absolute'></img>
                </div>
                

            </div>
                    <div className="flex flex-row gap-2 ml-8 mb-8 " >
                {project.links?.map((links,index) =>(
                        <div key={index}>
                            <button className='bg-black text-white px-6 py-3 rounded-lg mt-4 flex justify-center items-center gap-2 hover:bg-gray-600 cursor-pointer' onClick={() => window.open(links.value)}>{links.icon} {links.label}</button>
                        </div>
                    ))
                }
                </div>

            </div>

            ))}
        </div>
    </section>
  )
}

export default Projects