import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CarOwnerDashboardNavBar from "../../../Components/Navbar/CarOwnerDashboardNavBar";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, defaultValues } from "./utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox"

const CollectionForm = () => {
  const navigate = useNavigate();

    
  
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: defaultValues
    })

    const onSubmit = (values) => {
      console.log(values)
      const formData = {
          form_number: values.form_number,
          driver_account_num: values.driver_account_num,
          vehicle_reg_num:  values.vehicle_reg_num,
          form_acceptance: values.form_acceptance,
          road_test:  values.road_test,
          overall_comment: values.overall_comment,
          form_acceptance_date: values.form_acceptance_date,
          road_test_comment: values.road_test_comment,
          front_lights_high: values.front_lights_high,
          reverse_lights: values.reverse_lights,
          wheel_caps: values.wheel_caps,
          indicator_lights_comment: values.indicator_lights_comment,
          front_lights_high_comment: values.front_lights_high_comment,
          reverse_lights_comment: values.reverse_lights_comment,
          parking_lights_comment: values.parking_lights_comment,
          front_lights_deem_comment: values.front_lights_deem_comment,
          parking_light: values.parking_light,
          front_lights_deem: values.front_lights_deem,
          indicator_lights: values.indicator_lights,
          break_lights: values.break_lights,
          radio: values.radio,
          air_conditioner: values.air_conditioner,
          fire_extinguisher: values.fire_extinguisher,
          radio_comments: values.radio_comments,
          air_conditioner_comment: values.air_conditioner_comment,
          fire_extinguisher_comment: values.fire_extinguisher_comment,
          vehicle_tools: values.vehicle_tools,
          warning_triangle: values.warning_triangle,
          spare_tire: values.spare_tire,
          vehicle_tools_comment: values.vehicle_tools_comment,
          warning_triangle_comment: values.warning_triangle_comment,
          spare_tire_comment: values.spare_tire_comment,
          horn: values.horn,
          wiper_function: values.wiper_function,
          form_code: values.form_code
      };
      localStorage.setItem('form', JSON.stringify(formData));
     navigate('/carowner/assign/car-image/front')
    }
  
    const handleRestart = () => {
      navigate('/carowner/assign/driver-image')
    }

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <CarOwnerDashboardNavBar />
    <div className="flex flex-col md:mx-20">

      <div className="flex flex-col mt-10 items-center mb-8">
        <h1 className="text-[#0A0D14] font-bold text-3xl md:text-5xl">
          Vehicle Collection Form
        </h1>
        <p className="text-[#545151] md:text-lg md:w-full  text-center text-base font-light">
          Please fill in the vehicle checklist
        </p>
      </div>

      <Form {...form} className="px-6 space-y-4">
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 space-y-10">
         <div>
           <p className="font-Bold text-[24px] ">Section 1</p>
            <div className="grid md:grid-cols-3 gap-4  rounded-[5px] px-[22px] py-[16px] grid-cols-1 bg-[#FFFFFF]">
            <FormField
                control={form.control}
                name="form_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Form Number</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driver_account_num"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Driver Account Number</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-8/12"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             <FormField
                control={form.control}
                name="vehicle_reg_num"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Reg. No.</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-8/12"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="form_acceptance"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Form Acceptance
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="road_test"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Road Test
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overall_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overall Comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="form_acceptance_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Form Acceptance Date</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-8/12"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="road_test_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Road Test Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> 

               <FormField
                control={form.control}
                name="form_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Form code</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> 
            </div>
         </div>

         <div>
           <p className="font-Bold text-[24px]">Section 2</p>
            <div className="grid md:grid-cols-3 gap-4 rounded-[5px] px-[32px] py-[16px] grid-cols-1 bg-[#FFFFFF]">
               <FormField
                control={form.control}
                name="front_lights_high"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Front Lights (High) L/R
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="reverse_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Reverse Lights L/R
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="wheel_caps"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                         Wheel Caps (FL/FR/RL/RR)
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              /> 

              <FormField
                control={form.control}
                name="front_lights_high_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Front Lights (High) L/R Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reverse_lights_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reverse Lights L/R Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="wheel_caps_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wheel Caps (FL/FR/RL/RR) Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parking_light"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                       Parking Lights L/R
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="front_lights_deem"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Front Lights (Deem) L/R
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="indicator_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Indicator Lights (FL/FR/RL/RR)
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

             <FormField
                control={form.control}
                name="parking_lights_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parking Lights L/R Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="front_lights_deem_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Front Lights (Deem) L/R Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="indicator_lights_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Indicator Lights (FL/FR/RL/RR) Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="break_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Brake Lights L/R
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

            </div>
         </div>

         <div>
           <p className="font-Bold text-[24px]">Section 3</p>
            <div className="grid md:grid-cols-3 gap-4  rounded-[5px] px-[32px] py-[16px] grid-cols-1 bg-[#FFFFFF]">
            <FormField
                control={form.control}
                name="radio"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Radio
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="air_conditioner"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Air-Conditioner
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fire_extinguisher"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Fire Extinguisher
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="radio_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Radio Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="air_conditioner_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Air-Conditioner Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fire_extinguisher_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fire Extinguisher Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicle_tools"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Vehicle Tools
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="warning_triangle"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Warning Triangle
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="spare_tire "
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Spare tire 
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="vehicle_tools_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Tools Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="warning_triangle_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Warning Triangle Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="spare_tire_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spare Tire Comments</FormLabel>
                    <FormControl>
                      <Input className="md:w-8/12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="wiper_function"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Wiper Function
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="horn"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-8/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                         Horn
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
            </div>
         </div>

          {/* Buttons */}
          <div className="flex justify-end mt-20 p-4 gap-2">
            <div
              onClick={handleRestart}
              className="px-[40px] border-[1px] border-[#23A6BF] py-[16px] cursor-pointer rounded-[10px] mb-10">
                <p className="text-[#23A6BF]">
                  Restart
                </p>
            </div>

            <Button
              type="submit"
              className="px-[40px] py-[30px] hover:cursor-pointer  rounded-[10px] bg-[#23A6BF] border-[1px] border-[#FFFFFF] mb-10">
                <p className="text-[#FFFFFF]">
                  Continue
                </p>
            </Button>
          </div>
        </form>
      </Form>     
    </div>
    </div>
  );
};

export default CollectionForm;

CollectionForm.propTypes = {
    onNext: PropTypes.func,
    onBack: PropTypes.func,
  };

// FormDataRow.propTypes = {
//     description: PropTypes.string,
//     details: PropTypes.string,
//   };


