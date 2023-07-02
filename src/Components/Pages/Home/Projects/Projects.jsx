import { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';
import { FaGlobe, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div id='projects'>
            <Heading subTitle="Some of my finished Projects" title="My Works"></Heading>
            <div className='my-10 mx-5 md:mx-10'>
                {
                    projects.map(project => (
                        <div key={project.id} className=" my-10 w-full bg-base-100 shadow-2xl md:flex rounded-xl">
                                <figure className='md:w-2/5 flex'><img src={project.image} className='w-full' alt="Front end Development"/></figure>
                                <div className="card-body md:w-3/5">
                                    <div className='flex justify-between items-center text-xl'>
                                        <span className='bg-red-600 px-2 py-1 rounded-full text-sm text-white font-semibold '>{project.type}</span>
                                        <FaRegHeart></FaRegHeart>
                                    </div>
                                    <h2 className="card-title text-2xl justify-between">
                                        {project.name} 
                                        <Link to={project.liveLink} target='_blank'>
                                            <FaGlobe></FaGlobe>
                                        </Link>
                                    </h2>
                                    <p>
                                        {project.details}
                                    </p>
                                    <div className='grid grid-cols-2 md:grid-cols-4 my-4'>    
                                        {
                                            project.technology.map(item => <span key={project.id} className='bg-slate-100 p-2 mr-4 mb-4 rounded-xl font-semibold text-center'> {item}</span> )
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;