import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CarOwnerDashboardNavBar from "../../../Components/Navbar/CarOwnerDashboardNavBar";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from "./utils";
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
import { Checkbox } from "@/Components/ui/checkbox";
import { Separator } from "@/Components/ui/separator";


const CollectionForm = () => {
  const navigate = useNavigate();

   const defaultData = JSON.parse(localStorage.getItem('defaultData'))
   //console.log(defaultData)

    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        registration: defaultData?.registration,
        chasis_num: defaultData?.chasis_num,
        insurance: defaultData?.insurance,
        starting_mileage: '',
        road_cert: defaultData?.road_cert,
        comment: '',
        hand_over_date: defaultData?.hand_over_date,
        acceptance_code: defaultData?.acceptance_code,
        signed_by: defaultData?.driver,
        front_lights_high_comment: '',
        reverse_lights_comment: '',
        parking_lights_comment: '',
        front_lights_deem_comment: '',
        indicator_lights_comment: '',
        vehicle_tools_comment: '',
        warning_triangle_comment: '',
        air_conditioner_comment: '',
        spare_tire_comment: '',
        radio_comments: '',
        fire_extinguisher_comment: '',
        road_test_comment: '',
        front_lights: false,
        reverse_lights: false,
        wheel_caps: false,
        parking_lights: false,
        front_lights_deem: false,
        indicator_lights: false,
        brake_lights: false,
        vehicle_tools: false,
        wiper_function: false,
        radio: false,
        warning_triangle: false,
        horn: false,
        air_conditioner: false,
        spare_tire: false,
        fire_extinguisher: false,
        road_test: false
      }
    })

    const onSubmit = (values) => {

      //console.log(values)
      const formData = {
        registration: values.registration,
        chasis_num: values.chasis_num,
        insurance: values.insurance,
        starting_mileage: values.starting_mileage,
        road_cert: values.road_cert,
        comment: values.comment,
        hand_over_date: values.hand_over_date,
        front_lights: values.front_lights,
        reverse_lights: values.reverse_lights,
        wheel_caps: values.wheel_caps,
        parking_lights: values.parking_lights,
        front_lights_deem: values.front_lights_deem,
        indicator_lights: values.indicator_lights,
        brake_lights: values.brake_lights,
        vehicle_tools: values.vehicle_tools,
        wiper_function: values.wiper_function,
        radio: values.radio,
        warning_triangle: values.warning_triangle,
        horn: values.horn,
        air_conditioner: values.air_conditioner,
        spare_tire: values.spare_tire,
        fire_extinguisher: values.fire_extinguisher,
        road_test: values.road_test,
        acceptance_code: values.acceptance_code,
        signed_by: values.signed_by,
        front_lights_high_comment: values.front_lights_high_comment,
        reverse_lights_comment: values.reverse_lights_comment,
        parking_lights_comment: values.parking_lights_comment,
        front_lights_deem_comment: values.front_lights_deem_comment,
        indicator_lights_comment: values.indicator_lights_comment,
        vehicle_tools_comment: values.vehicle_tools_comment,
        radio_comments: values.radio_comments,
        warning_triangle_comment: values.warning_triangle_comment,
        air_conditioner_comment: values.air_conditioner_comment,
        spare_tire_comment: values.spare_tire_comment,
        fire_extinguisher_comment: values.fire_extinguisher_comment,
        road_test_comment: values.road_test_comment
      };
      localStorage.setItem('form', JSON.stringify(formData));
     navigate('/carowner/assign/car-image/front')
    }
  
    const handleRestart = () => {
      localStorage.removeItem('driver-img');
      navigate('/carowner/assign/driver-image')
    }

  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <CarOwnerDashboardNavBar />
      <div className="flex flex-col">

      <div className="flex flex-col mt-10 items-center mb-8">
        <h1 className="text-[#0A0D14] font-bold text-3xl md:text-5xl">
          Vehicle Collection Form
        </h1>
        <p className="text-[#545151] md:text-lg md:w-full pt-[16px]  text-center text-base font-light">
          Please fill in the vehicle checklist
        </p>
      </div>

      <Form {...form} className="px-6 space-y-4">
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 space-y-10">
         <div className="space-y-4">
           <div className="grid md:grid-cols-2 gap-4 px-[22px] py-[16px] mb-10 md:mx-20 grid-cols-1">
            <FormField
                control={form.control}
                name="registration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration(number plate)</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="chasis_num"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chasis No</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             <FormField
                control={form.control}
                name="insurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance expiry date</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="road_cert"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roadworthy certificate expiry date</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="starting_mileage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Starting Mileage</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <Separator orientation='horizontal' className="h-[2px] bg-[#D9D9D9]" />
             
            {/* Booleans */}
            <div className="grid md:grid-cols-2 gap-4 px-[22px] py-[16px] md:mx-20 grid-cols-1">
            
              <FormField
                control={form.control}
                name="front_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="parking_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="brake_lights"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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

              <FormField
                control={form.control}
                name="vehicle_tools"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="wiper_function"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="radio"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="warning_triangle"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="horn"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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

              <FormField
                control={form.control}
                name="air_conditioner"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="spare_tire"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-Light">
                        Spare Tire
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
                  <FormItem className="flex h-10 flex-row items-center justify-between  md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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
                name="road_test"
                render={({ field }) => (
                  <FormItem className="flex h-10 flex-row items-center justify-between md:w-6/12 space-x-3 space-y-0 rounded-md border p-4">
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

            </div>
            <Separator orientation='horizontal' className="h-[2px] bg-[#D9D9D9]" />
            
            {/* Comments */}
            <div className="grid md:grid-cols-2 gap-4 px-[22px] py-[16px] md:mx-20 grid-cols-1">
            <FormField
                control={form.control}
                name="front_lights_high_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Front Lights High comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]" {...field} />
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
                    <FormLabel>Reverse lights comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             <FormField
                control={form.control}
                name="parking_lights_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parking lights comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Front lights deem comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Indicator lights comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicle_tools_comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle tools comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="radio_comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Radio comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Warning triangle comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Air conditioner comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Spare tire comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                    <FormLabel>Fire extinguisher comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]"  {...field} />
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
                  <FormLabel>Road test comment</FormLabel>
                  <FormControl>
                    <Input className="md:w-6/12 h-[52px]"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <Separator orientation='horizontal' className="h-[2px] bg-[#D9D9D9]" />

            <div className="grid md:grid-cols-2 gap-4 px-[22px] py-[16px] md:mx-20 grid-cols-1">
            <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>General Comment</FormLabel>
                    <FormControl>
                      <Input className="md:w-6/12 h-[52px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hand_over_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Hand-over date</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

             <FormField
                control={form.control}
                name="acceptance_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contract Acceptance Code</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 h-[52px] bg-[#AAAAAA]"  {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="signed_by"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Signed By</FormLabel>
                    <FormControl>
                      <Input disabled className="md:w-6/12 bg-[#AAAAAA] h-[52px]"  {...field} />
                    </FormControl>
                    <FormMessage />
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




