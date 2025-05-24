import projectImg1 from '../assets/monitor.png';
import FreshBasekt from '../assets/freshbasketImg.png';
import { Fade } from 'react-awesome-reveal';
import {IconBrandGithub, IconExternalLink} from '@tabler/icons-react';

const TopProjects = () => {
 const projectsDetails = [
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: FreshBasekt , links: [{value:"https://grocerysite-production.up.railway.app/",label:"Visit Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/Grocery_site",label:"Source Code",icon:<IconBrandGithub></IconBrandGithub>} ]
         },
        { title: " Pathology Lab Management System", description: "– Developed a monolithic app for Doctor to generating and printing PDF test reports for patients. – Enabled test value updates, dynamic pricing, and test additions with data managed via MySQL – Streamlined the report generation process with IText for PDF creation, enhancing operational efficiency – Patient Management: Registration, test booking, and report generation. – Admin Panel:test management, and billing.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: FreshBasekt , links: [{value:"#",label:"Visit Site",icon:<IconExternalLink></IconExternalLink>},{value:"https://github.com/SuperHim0/pahology-lab",label:"Source Code",icon:<IconBrandGithub></IconBrandGithub>}]
        },
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: FreshBasekt , links: [{value:"",label:"view Project",icon:<IconExternalLink></IconExternalLink>},{value:"",label:"view Project",icon:<IconBrandGithub></IconBrandGithub>}]
        }
    ]

  return (
    <section className='flex flex-col gap-4'>
        <h1 className='font-primary text-3xl font-semibold underline'>Some Projects</h1>
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

export default TopProjects