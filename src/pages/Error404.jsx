import { Link } from "react-router-dom";
import error404 from "../assets/404.png";
/**
 * The Page404 component displays a 404 error page if the requested page cannot be found.
 * There is also a link back to the home page.
 *
 * @returns {JSX.Element} The rendered Page404 component
 */

function Error404() {
    return (
        <div className="mt-2 w-full h-screen flex flex-col justify-evenly items-center bg-black text-white">
            <img src={error404} alt="Erreur 404" className="w-9/12 md:w-5/12" />
            <div className="text-sm font-semibold sm:text-xl">
                <h2 className="-mt-10 mb-6 text-center">
                    Oups! Page non trouvée
                </h2>
                <Link to="/">
                    <p className=" cursor-pointer transition-transform hover:scale-110 hover:underline">
                        Retourner sur la page d’accueil
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Error404;
