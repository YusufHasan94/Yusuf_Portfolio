import { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';
import { FaGithub, FaGlobe, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

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
                            <figure className='md:w-2/5 flex items-center'>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    {project?.image?.map(img => (
                                        <SwiperSlide key={project.id}>
                                            <img src={img} className='w-full' alt="Front end Development" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </figure>
                            <div className="card-body md:w-3/5">
                                <div className='flex justify-between items-center text-xl'>
                                    <span className='bg-red-600 px-2 py-1 rounded-full text-sm text-white font-semibold '>{project.type}</span>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                                <div className="card-title flex-col md:flex-row justify-between">
                                    <h2 className='text-2xl'>
                                        {project.name}
                                    </h2>
                                    <div className='flex items-center gap-4'>
                                        <div className='flex flex-col gap-1 items-center'>
                                            <FaGithub></FaGithub>
                                            <Link to={project.github_client} target='_blank' className='text-lg hover:text-red-500'>Client</Link>
                                        </div>
                                        <div className='flex flex-col gap-1 items-center'>
                                            <FaGithub></FaGithub>
                                            <Link to={project.github_server} target='_blank' className='text-lg hover:text-red-500'>Server</Link>
                                        </div>
                                        <div className='flex flex-col gap-1 items-center'>
                                            <FaGlobe></FaGlobe>
                                            <Link to={project.liveLink} target='_blank' className='text-lg hover:text-red-500'>Live Link</Link>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    {project.details}
                                </p>
                                <div className='grid grid-cols-2 md:grid-cols-4 my-4'>
                                    {
                                        project.technology.map(item => <span key={project.id} className='bg-slate-100 p-2 mr-4 mb-4 rounded-xl font-semibold text-center'> {item}</span>)
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