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
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button"


const schema = z.object({
    phoneNumber : z.string().regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    ).min(10, {
        message: "Phone number is required",
      }),
  
  });

const PaymentAuth = () => {

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          phoneNumber: ''  
        }
    })
    
    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar payment={true} />
     <div className="flex flex-col mt-10 items-center justify-center">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-[#0A0D14] font-Bold text-[32px] md:text-[45px]">
          Authenticate Driver
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
                      <Input 
                        placeholder='Enter your phone number' 
                        className="w-[348px] h-12"  {...field} 
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

          <Button type="submit" className="mt-16 bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-full md:w-[200px] h-[46px] rounded-[10px] flex items-center justify-center">
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

export default PaymentAuth