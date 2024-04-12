import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/Components/ui/button";

const CarOwnerLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");

    const onSubmit = (data) => {
        // Implement your login logic here
    };

    return (
        <div className="bg-[#F7F9F8] min-h-screen">
            <div className="py-5 flex flex-col justify-start items-center">
                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent  min-w-[350px] pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-[14px] font-Light mb-2" htmlFor="email">
                            Enter your email
                        </label>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" } })}
                            className={`appearance-none border-gray-200  rounded w-full py-3 px-3 text-gray-700 leading-tight  ${errors.email ? 'border-red-500' : ''}`}
                            id="email"
                            type="email"
                            placeholder=" e.g. johndoe@gmail.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-[14px] font-Light mb-2" htmlFor="password">
                            Enter your password
                        </label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            className={`appearance-none border-gray-200 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                            id="password"
                            type="password"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                        <Button
                            type="submit"
                            className="bg-[#23A6BF] flex items-center justify-center pb-1 font-SemiBold text-white font-bold w-full md:w-[140px] h-[46px] rounded-[10px]"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
                {/* Error message */}
                {error && <p className="text-red-500 text-xs italic">{errorText}</p>}
            </div>
        </div>
    );
};

export default CarOwnerLogin;
