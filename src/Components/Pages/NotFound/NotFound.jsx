import { Link } from "react-router-dom";
import notFound from "../../../assets/404-error.png";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col md:w-1/2 items-center gap-4">
                <img src={notFound} alt="page not found" className="w-full" />
                <Link to="/">
                    <button className="btn bg-red-500 text-white hover:bg-red-200 hover:text-black">Back to Home</button>          
                </Link>
            </div>
        </div>
    );
};

export default NotFound;