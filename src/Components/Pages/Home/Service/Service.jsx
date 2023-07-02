import Heading from "../../../Shared/Heading/Heading";
import frontEnd from "../../../../assets/frontEnd.jpg";
import backEnd from "../../../../assets/backEnd.jpg";

const Service = () => {
    return (
        <div className="mx-2 md:mx-0" id="services">
            <Heading subTitle={"Services I Offer"} title={"What Can I Do"}></Heading>
            <div className="my-10 md:my-20 mx-10 flex flex-col md:flex-row justify-evenly">
                <div className="card card-compact mb-20 md:w-96 md:mb-0 bg-base-100 shadow-xl relative">
                    <figure><img src={frontEnd} alt="Front end Development" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Front End Web Application</h2>
                        <p className="text-base">Build client-side applications using React, Tailwind CSS/Bootstrap, and Firebase. Can make single page application using React Router.</p>
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-red-700 bg-opacity-40 inline-block p-4 rounded-xl">
                        <p className="text-4xl text-white font-semibold">10+</p>
                    </div>
                </div>
                <div className="card card-compact md:w-96 bg-base-100 shadow-xl relative">
                    <figure><img src={backEnd} alt="Front end Development" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Full Stack Web Application</h2>
                        <p className="text-base">Build both client-side and server-side to make an full stack applications using React, Tailwind CSS/Bootstrap, Firebase, Node JS, Express JS, and MongoDB.</p>
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-red-700 bg-opacity-40 inline-block p-4 rounded-xl">
                        <p className="text-4xl text-white font-semibold">3+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;