import DashboardNavBar from '@/Components/Navbar/DashboardNavBar'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { InputToolTip } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button"
import { useNavigate } from "react-router-dom";


const schema = z.object({
    phoneNumber : z.string().regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    ).min(10, {
        message: "Phone number is required",
      }),
  
  });

const InitializeAuth = () => {
   const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          phoneNumber: ''  
        }
    })
    
    const onSubmit = (data) => {
      navigate("/drivers/dashboard/payment/option")
      console.log(data);
    };

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar payment={true} />
     <div className="flex flex-col mt-10 items-center justify-center">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#0A0D14] font-Bold text-[32px] md:text-[45px]">
           Initialize Payment
        </h1>
        <p className="text-[#545151] md:text-[19px] w-7/12  text-center text-[16px] font-Light">
           Fill in the details below. Please be clear about your entries. 
           You are responsible for your own mistakes.
        </p>
      </div>


      {/* Input field */}
      <Form {...form}>
            <form className='flex flex-col items-center' onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <InputToolTip
                        type="tel" 
                        name="phoneNumber" 
                        placeholder='Enter your phone number' 
                        className="w-[348px] h-12"  {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          <Button  disabled={!form.formState.isValid} type="submit" className={`mt-16 ${!form.formState.isValid ? 'bg-[#AAAAAA]' : 'bg-[#23A6BF]'}  hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-full md:w-[200px] h-[46px] rounded-[10px] flex items-center justify-center`}>
            <p className=" font-Sans text-[#FFFFFF] text-[14px]">
             Continue
           </p>
          </Button>
        </form>
        </Form>
      {/* Input field */}
     </div>
   </div>
  )
}

export default InitializeAuth