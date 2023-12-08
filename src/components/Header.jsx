import { Link, useLocation } from "react-router-dom";
import logoWH from "../assets/logoWH.webp";

function Header() {
    const location = useLocation();
    return (
        <div
            data-testid="div1"
            className="mt-3 flex justify-between items-center flex-wrap container mx-auto">
            <Link to="/" className="flex-1">
                {" "}
                <h1
                    className="text-2xl px-4 text-custom-505 font-youngSerif md:text-4xl"
                    title="Go to homepage">
                    HRnet
                </h1>
            </Link>

            <div className="w-20 md:w-32 mx-4">
                <img
                    src={logoWH}
                    alt="A logo with a collection of olive-colored leaves"
                    className="flex-1 "
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="flex-1 flex justify-center  flex-nowrap min-w-full sm:justify-end sm:min-w-0 ">
                <button className="text-1xl text-custom-505 font-youngSerif p-2 px-4 rounded-md  md:text-2xl  transition-all  duration-300 hover:bg-custom-502 hover:text-white">
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
