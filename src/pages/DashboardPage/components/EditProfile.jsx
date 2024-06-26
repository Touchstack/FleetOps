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
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";

const EditProfile = () => {
  const prefillData = JSON.parse(localStorage.getItem('From-Prefill')) || {};
  const [transmission, setTransmission] = useState(prefillData.transmission || 'Manual');
  const [Loading, setLoading] = useState(false)
  
  const id = localStorage.getItem("driver_id")
  const driver_avatar = localStorage.getItem('driver_avatar')
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: prefillData.fname,
      lastName: prefillData.lname,
      phone: prefillData.phone,
      email: prefillData.email,
    }
  });

  const onSubmit = async (data) => {
     // Do something with the form data
    const payLoad = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phone,
      email: data.email,
      transmission: transmission
    }

   // console.log(payLoad);

    try {
     await apiEditDriverProfile(id, payLoad).then((res) => {
      setLoading(true)
       if(res.status === 200) {
        setLoading(false)
        toast.success("Driver Profile updates");
        setLoading(false)
       }else{
        setLoading(false)
        toast.error(res?.response?.data?.message || "Error Updating Driver profile ");
       }
     })
    } catch (error) {
      setLoading(false)
     console.log(error) 
     toast.error(error?.response?.data?.message || "Error updating profile");
    }
  };



  return (
    <div className="flex flex-col  mt-10">
       <div className="flex flex-col items-center mb-10 gap-5">
        <Avatar className="w-24 h-24">
            <AvatarImage src={`http://engines.fleetopsgh.com/uploads/photo/${driver_avatar}`}  />
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
            className={`rounded-[5px] ${prefillData?.unedit ? 'bg-slate-300' : 'bg-white'}  border-[#D9D9D9] h-[49px]`}
            disabled = {prefillData?.unedit}
            {...register("firstName", { required: "First name is required",  })}
          />
          {errors?.firstName && <p className="text-red-500 text-xs">{errors?.firstName?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Last name</Label>
            <input 
            type="text" 
            id="lastName" 
            name="lastName"
            placeholder="e.g Mensah" 
            className={`rounded-[5px] ${prefillData?.unedit ? 'bg-slate-300' : 'bg-white'}  border-[#D9D9D9] h-[49px]`}
            disabled = {prefillData?.unedit}
            {...register("lastName", { required: "Last name is required",  })}
          />
          {errors?.lastName && <p className="text-red-500 text-xs">{errors?.lastName?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Your email</Label>
          <input 
             type="email" 
             id="email" 
             placeholder="e.g kwaku@mail.com"
             disabled = {prefillData?.unedit}
             className={`rounded-[5px] ${prefillData?.unedit ? 'bg-slate-300' : 'bg-white'}  border-[#D9D9D9] h-[49px]`}
             {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" } })}
           />
           {errors?.email && <p className="text-red-500 text-xs">{errors?.email?.message}</p>}

          <Label className='text-[#0A0D14] font-[400]' htmlFor="email">Phone number</Label>
          <input 
            type="text" 
            id="phone" 
            placeholder="e.g  0245869979"
            disabled = {prefillData?.unedit}
            className={`rounded-[5px] ${prefillData?.unedit ? 'bg-slate-300' : 'bg-white'}  border-[#D9D9D9] h-[49px]`}
            {...register("phone", { required: "Number is required"  })}
          />
           {errors?.phone && <span className="text-red-500 text-xs">Phone Number is required</span>}
           
           <Label className='text-[#0A0D14] font-[400]'>Preferred Transmisson</Label>
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
             {Loading ? (
              <ClipLoader size={30} color="#FFFFFF" />
             ) : (
              "Save changes"
             )}
          </Button>
       </form>


       <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default EditProfile