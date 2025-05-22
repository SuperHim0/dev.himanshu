import projectImg1 from '../assets/monitor.png';
import projectImg2 from '../assets/luffy.png';

const Projects = () => {
    const projectsDetails = [
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: projectImg2 , links: [{value:"",label:"view Project"},{value:"",label:"view Project"}]
        },
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: projectImg2 , links: [{value:"",label:"view Project"},{value:"",label:"view Project"}]
        },
        { title: "Fresh Basket", description: "Created an e-commerce platform with user and admin panels for managing groceries. – User Panel: Product browsing, cart management, purchase tracking, and blogging. – Admin Panel: Product/category management, order tracking, and delivery status updates.",
            techUsed: ["React", "Java", "JavaScript"," JSP", "Spring Boot", "MySQL"], picture: projectImg2 , links: [{value:"",label:"view Project"},{value:"",label:"view Project"}]
        }
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
                <div className='flex flex-row m-8'>
                <div className="w-[50%] flex gap-6 flex-col">
                    <h1 className='font-primary text-2xl font-semibold'>{project.title}</h1>
                    <p className='font-primary'>{project.description}</p>
                    <div>
                        <h3 className='font-semibold text-md font-primary'>Tech Used</h3>
                        <ul className='gap-4 mt-4 grid grid-cols-3' key={index}>
                            {project.techUsed.map((tech, index) =>(

                                <li key={index} className='bg-white text-gray-500 h-7 w-34 rounded-lg flex items-center justify-center'>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    
                    
                </div>
                
                <div className='w-[50%]  flex relative items-center justify-center'>
                    
                    <img src={projectImg1} alt="" className='w-[90%] mt-8 rounded-lg z-10'></img>
                    <img src={project.picture} alt="" className='w-[20%]  mt-8 rounded-lg z-0 absolute'></img>
                </div>
                

                </div>
                    <div className="flex flex-row gap-2 ml-8 mb-8 " >
                {project.links?.map((links,index) =>(
                        <div key={index}>
                            <button className='bg-black text-white h-12 w-36 rounded-lg mt-4' >{links.label}</button>
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