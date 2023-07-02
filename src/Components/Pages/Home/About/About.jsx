import img from "../../../../assets/img.jpg"
import { FaRegFile, FaRegUser, FaRegEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
    const handleDownloadResume = ()=>{
        const url = "/data/YusufHasan_Resume.pdf";
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "YusufHasan_Resume.pdf";
        anchor.click();
    }
    return (
        <div className=" mt-32 mx-5 md:mx-10 flex flex-col-reverse gap-10 md:flex-row" id="home">
            <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="bg-slate-100 p-10 flex flex-col gap-2 rounded-xl shadow-2xl hover:translate-y-1 relative">
                    <p className="text-2xl"><FaRegUser></FaRegUser></p>
                    <h1 className="text-4xl font-bold">Hi, I'm <span className="text-red-500">Yusuf Hasan</span></h1>
                    <p className="text-xl">Working as a MERN Stack Developer from the part of my passion.</p>
                    <p className="flex items-center gap-2 text-xl"><FaRegFile className="text-red-500"></FaRegFile> MERN stack Developer</p>
                    <p className="flex items-center gap-2 text-xl"><FaRegEnvelope className="text-red-500"></FaRegEnvelope> yhpolok@gmail.com</p>
                    <p className="flex items-center gap-2 text-xl"><FaMapMarkerAlt className="text-red-500"></FaMapMarkerAlt> Rajshahi, Bangladesh</p>
                </div>
                <div className="bg-slate-100 p-4 my-4 rounded-xl shadow-2xl">
                    <p className="text-xl mb-2">Download my Resume</p>
                    <div className="text-center">
                        <button onClick={handleDownloadResume} className="w-1/2 bg-slate-200 px-4 py-2 rounded-md text-red-600 text-xl font-semibold">Resume</button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-slate-100 p-4 rounded-xl shadow-2xl">
                <div className="overflow-hidden">
                    <img src={img} alt="" className="hover:scale-110"/>
                </div>
            </div>            
        </div>
    );
};

export default About;