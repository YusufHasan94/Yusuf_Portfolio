import { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

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
            <div className='my-10'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {
                        projects.map(project => (
                            <SwiperSlide key={project.id}>
                                <div className="card card-compact w-96 h-80 bg-base-100 shadow-2xl relative">
                                    <figure><img src={project.image} alt="Front end Development"/></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl justify-between">
                                            {project.name} 
                                            <Link to={project.liveLink} target='_blank' className='text-2xl'><FaGlobe></FaGlobe></Link>
                                        </h2>
                                        <p className="text-base"><span className='font-semibold'>Technology:</span> {project.technology}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;