import { Label } from "@/Components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";


const EditProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    <div className="flex flex-col  mt-10">
       <div className="flex flex-col items-center mb-10 gap-5">
        <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png"  />
            <AvatarFallback>
                <CgProfile size={50} />
            </AvatarFallback>
        </Avatar>

         {/* <p className="font-Light hover:underline cursor-pointer text-[16px] text-[#0075FF]">
           Edit profile photo
         </p> */}
       </div>

       <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-sm items-center gap-4">
    
          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Full name</Label>
            <input 
            type="text" 
            id="fullname" 
            name="fullname"
            placeholder="e.g Kwaku Mensah" 
            className="rounded-[5px] border-[#D9D9D9] h-[49px]"
            {...register("fullname", { required: "Full name is required",  })}
          />
          {errors?.fullname && <p className="text-red-500 text-xs">{errors?.fullname?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Your email</Label>
          <input 
             type="email" 
             id="email" 
             placeholder="e.g kwaku@mail.com"
             className="rounded-[5px] border-[#D9D9D9] h-[49px]"
             {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" } })}
           />
           {errors?.email && <p className="text-red-500 text-xs">{errors?.email?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Phone number</Label>
          <input 
            type="text" 
            id="phone" 
            placeholder="e.g  0245869979"
            className="rounded-[5px] border-[#D9D9D9] h-[49px]"
            {...register("phone", { required: "Number is required"  })}
          />
           {errors?.phone && <span className="text-red-500 text-xs">Phone Number is required</span>}


          <Button className='bg-[#23A6BF] mt-4 h-[46px]'>
             Save changes
          </Button>
  
       </form>
    </div>
  )
}

export default EditProfile