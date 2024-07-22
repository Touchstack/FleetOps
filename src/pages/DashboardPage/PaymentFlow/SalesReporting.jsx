import Table from "@/Components/Table/Table";
import DashboardNavBar from "@/Components/Navbar/DashboardNavBar";
import { useForm } from "react-hook-form";
import { Form } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SalesReporting = () => {
  const headers = ['Platform', 'Earning', 'Cash', 'Trips', 'Actions'];
  const headerKeyMap = {
    'Platform': 'platform',
    'Earning': 'earning',
    'Cash': 'cash',
    'Trips': 'trips',
    'Actions': 'action',
  };

  const navigate = useNavigate()

  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm({
    mode: 'onChange' // This will trigger validation on input change
  });

  const onSubmit = (formData) => {
    const newData = {
      id: Date.now(),  // generate a unique id
      platform: formData.platform,
      earning: formData.earning,
      cash: formData.cash_collected,
      trips: formData.trips,
    };
    setData([...data, newData]);
  };

  return (
    <div className="bg-[#F7F9F8] min-h-[120vh]">
      <DashboardNavBar payment={true} />
      <div className="flex flex-col mt-10 px-5 items-center justify-center">
        <div className="flex flex-col md:min-w-[550px] min-w-[350px] space-y-4 items-center mb-4">
          <h1 className="text-[#0A0D14] font-Bold text-[32px] md:text-[45px]">
            Sales Reporting
          </h1>
          <p className={'text-center md:w-[589px]'}>
            Fill in the details below. Please be clear about your entries. 
            You are responsible for your own mistakes.
          </p>
        </div>

        <div className={'space-y-10 flex flex-col items-center justify-center'}>
          <div>
            <Form>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'}>
                  <div className={'space-y-2'}>
                    <Label>Select company platform</Label>
                    <Select 
                      onValueChange={(value) => setValue("platform", value)} 
                      defaultValue=""
                    >
                      <SelectTrigger className={'h-12 text-[#545151]'}>
                        <SelectValue placeholder={'Select Company Platform'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bolt">Bolt</SelectItem>
                        <SelectItem value="Uber">Uber</SelectItem>
                        <SelectItem value="Yango">Yango</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.platform && <span className="text-red-500 mt-2">{errors.platform.message}</span>}
                  </div>

                  <div className={'space-y-2'}>
                    <Label>Earning</Label>
                    <Input 
                      placeholder={"Enter your earnings for the day"}
                      {...register("earning", { required: "Earning is required" })}
                      className="w-[348px] h-12" 
                    />
                    {errors.earning && <span className="text-red-500 mt-2">{errors.earning.message}</span>}
                  </div>

                  <div className={'space-y-2'}>
                    <Label>Cash collected</Label>
                    <Input
                      placeholder={"Enter earnings collected in cash"}
                      {...register("cash_collected", { required: "Cash collected is required" })} 
                      className="w-[348px] h-12" 
                    />
                    {errors.cash_collected && <span className="text-red-500 mt-2">{errors.cash_collected.message}</span>}
                  </div>

                  <div className={'space-y-2'}>
                    <Label>Trips</Label>
                    <Input 
                      placeholder={"Enter number of trips"}
                      {...register("trips", { required: "Trips are required" })} 
                      className="w-[348px] h-12" 
                    />
                    {errors.trips && <span className="text-red-500 mt-2">{errors.trips.message}</span>}
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className={`px-6 py-3 ${isValid ? 'bg-[#23A6BF]' : 'bg-[#AAAAAA]'} transition duration-700 ease-in-out hover:scale-110 text-white  rounded-[10px]`}
                    disabled={!isValid}
                  >
                    Add input
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <Table headers={headers} data={data} headerKeyMap={headerKeyMap} onDelete={handleDelete} />

          <button
            disabled={data.length < 1}
            className={`${data.length < 1 ? 'bg-[#AAAAAA]' : 'bg-[#23A6BF]'} hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[200px] h-[46px] rounded-[10px] flex items-center justify-center`}
            onClick={() => navigate('/drivers/dashboard/payment/invoice')}
          >
            <p className="font-Bold text-[#FFFFFF] text-[16px]">Continue</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesReporting;
