import { Label } from "@/Components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { CgProfile } from "react-icons/cg";
import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";
import { apiEditDriverProfile } from "@/services/VehiclesService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const EditProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [transmission, setTransmission] = useState('Manual')

  const onSubmit = async (data) => {
     // Do something with the form data
    const payLoad = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phone,
      email: data.email,
      transmission: transmission
    }

    console.log(payLoad);

    try {
     await apiEditDriverProfile(payLoad).then((res) => {
       if(res.status === 200) {
        toast.success("Driver Profile updates");
       }else{
        toast.error(res?.response?.data?.message || "Error Updating Driver profile ");
       }
     })
    } catch (error) {
     console.log(error) 
    }
  };



  return (
    <div className="flex flex-col  mt-10">
       <div className="flex flex-col items-center mb-10 gap-5">
        <Avatar className="w-24 h-24">
            <AvatarImage src=""  />
            <AvatarFallback>
                <CgProfile size={50} />
            </AvatarFallback>
        </Avatar>

         {/* <p className="font-Light hover:underline cursor-pointer text-[16px] text-[#0075FF]">
           Edit profile photo
         </p> */}
       </div>

       <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-sm items-center gap-4">
    
          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">First name</Label>
            <input 
            type="text" 
            id="fullName" 
            name="firstName"
            placeholder="e.g Kwaku" 
            className="rounded-[5px] border-[#D9D9D9] h-[49px]"
            {...register("firstName", { required: "First name is required",  })}
          />
          {errors?.firstName && <p className="text-red-500 text-xs">{errors?.firstName?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Last name</Label>
            <input 
            type="text" 
            id="lastName" 
            name="lastName"
            placeholder="e.g Mensah" 
            className="rounded-[5px] border-[#D9D9D9] h-[49px]"
            {...register("lastName", { required: "Last name is required",  })}
          />
          {errors?.lastName && <p className="text-red-500 text-xs">{errors?.lastName?.message}</p>}

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
           
           <Label className='text-[#0A0D14] font-[400]'>Transmisson Preference</Label>
              <Select onValueChange={(value) => setTransmission(value)}  defaultValue={transmission}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Manual">Manual</SelectItem>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="Automatic / Manual">Automatic / Manual</SelectItem>
                </SelectContent>
              </Select>

          <Button className='bg-[#23A6BF] mt-4 h-[46px]'>
             Save changes
          </Button>
       </form>
    </div>
  )
}

export default EditProfile