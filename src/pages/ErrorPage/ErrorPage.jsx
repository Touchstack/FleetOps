import { useRouteError } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center mt-24 font-Regular">
      <h1 className="font-Bold text-6xl">Oops!</h1>
      <p className="text-3xl text-slate-400 py-8 text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-amber-500 text-2xl text-center">
        <i>{error.statusText || error.message}</i>
      </p>

      <a href="/" className="py-8">
        <PrimaryButton buttonText={"Back To HomePage"} />
      </a>
    </div>
  );
}
