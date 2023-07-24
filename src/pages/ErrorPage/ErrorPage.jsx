import { useRouteError } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-full max-h-screen">
      <div className="shadow">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center mt-24 pb-24 font-Regular h-full max-h-screen">
        <h1 className="font-Bold text-6xl">Oops!</h1>
        <p className="text-xl text-slate-600 py-8 text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-amber-500 bg-red-100 px-12 pt-4 pb-3 rounded-xl text-xl text-center self-center">
          <i>{error.statusText || error.message}</i>
        </p>

        <a href="/" className="py-8">
          <PrimaryButton buttonText={"Back To HomePage"} />
        </a>
      </div>
    </div>
  );
}
