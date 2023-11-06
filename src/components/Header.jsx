import { Link, useLocation } from "react-router-dom";
import logoWH from "../assets/logoWH.png";

function Header() {
    const location = useLocation();
    return (
        <div className="mt-3 flex justify-between items-center flex-wrap container mx-auto">
            <Link to="/" className="flex-1">
                {" "}
                <h1 className="text-2xl px-4 text-green-700 font-youngSerif md:text-4xl">
                    HRnet
                </h1>
            </Link>

            <div className="w-20 md:w-32 mx-4">
                <img
                    src={logoWH}
                    alt="A logo with a collection of olive-colored leaves"
                    className="flex-1 "
                />
            </div>
            <div className="flex-1 flex justify-center  flex-nowrap min-w-full md:justify-end sm:min-w-0 ">
                <button className="text-1xl text-custom-502 font-youngSerif p-2 px-4 rounded-md  md:text-2xl  transition-all  duration-300 hover:bg-custom-502 hover:text-white">
                    {" "}
                    {location.pathname === "/employee" ? (
                        <Link to="/">Home</Link>
                    ) : (
                        <Link to="/employee">View Current Employees</Link>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Header;
