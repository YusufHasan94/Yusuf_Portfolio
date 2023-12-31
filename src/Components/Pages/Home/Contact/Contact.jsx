import Heading from "../../../Shared/Heading/Heading";
import profile from "../../../../assets/profile.jpg"
import { Link } from "react-router-dom";
import {FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmitForm = event =>{
        event.preventDefault();
        console.log("form submitted");
        const form = event.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const userMessage = {name, number, email, subject, message};
        console.log(userMessage);
        if(userMessage){
            Swal.fire({
                icon: 'success',
                title: 'Congratulations',
                text: 'Successfully Send Message'
            })
            form.reset();
        }
    }
    return (
        <div>
            <Heading subTitle="stay connected" title="Contact Me"></Heading>
            <div className="my-10 md:mx-5">
                <div className="hero">
                    <div className="hero-content flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <div className="card bg-slate-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={profile} alt="profile images" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-start">
                                    <h2 className="text-4xl font-semibold">Yusuf Hasan</h2>
                                    <h2 className="text-lg">MERN Stack Developer</h2>
                                    <p className="text-xl">I am available for freelance & project work. Contact with me & notify me about your requirements briefly.</p>
                                    <div className="card-actions flex-col">
                                        <h1 className="text-xl uppercase">Find me with</h1>
                                        <div className="flex gap-5">
                                            <Link to="https://www.facebook.com/profile.php?id=100004186909385" target="_blank" className="p-4 text-2xl bg-white shadow-2xl rounded-xl"><FaFacebookF></FaFacebookF></Link>
                                            <Link to="https://www.linkedin.com/in/md-yusuf-hasan-0817a31a4/" target="_blank" className="p-4 text-2xl bg-white shadow-2xl rounded-xl"><FaLinkedin></FaLinkedin></Link>
                                            <Link to="https://github.com/YusufHasan94" target="_blank" className="p-4 text-2xl bg-white shadow-2xl rounded-xl"><FaGithub></FaGithub></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-slate-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmitForm}>

                                    <div className="md:flex gap-4">
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-lg uppercase">Your Name</span>
                                            </label>
                                            <input type="text" name="name" className="input input-bordered" required/>
                                        </div>
                                        <div className="form-control md:w-1/2">
                                            <label className="label">
                                                <span className="text-lg uppercase">Your Phone Number</span>
                                            </label>
                                            <input type="number" name="number" className="input input-bordered" required/>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg uppercase">Email</span>
                                        </label>
                                        <input type="email" name="email" className="input input-bordered" required/>
                                    </div> 
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg uppercase">Subject</span>
                                        </label>
                                        <input type="text" name="subject" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg uppercase">Your message</span>
                                        </label>
                                        <textarea name="message" id="" rows="5" className="w-ful rounded-lg p-4" required></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" name="submit" value= "Send Message" 
                                        className="btn text-black bg-white shadow-2xl hover:bg-red-500 hover:text-white uppercase"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;