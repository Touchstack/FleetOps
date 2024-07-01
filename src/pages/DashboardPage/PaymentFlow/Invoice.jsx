import DashboardNavBar from "@/Components/Navbar/DashboardNavBar"
import { Separator } from "@/Components/ui/separator";

const Invoice = () => {
    
    const carDetails = [
        { label: 'Vehicle registration number', value: 'GW123456' },
        { label: 'Phone number', value: '02426729000' },
        { label: 'Payment Option', value: 'MTN momo' },
        { label: 'Date', value: '19/04/2024' },
      ];
  
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar payment={true} />
      <div className="flex flex-col mt-10 items-center justify-center">
          <div className="flex flex-col md:min-w-[550px] min-w-[350px] space-y-6 items-center mb-8">
                <h1 className="text-[#0A0D14] font-Bold text-[32px] md:text-[45px]">
                Invoice
                </h1>
                
               <div className="w-full flex flex-col">
                  {carDetails.map((detail, index) => (
                      <div key={index} className="flex justify-between text-[16px] mb-5">
                      <p className="font-Bold">{detail?.label}</p>
                      <p className="text-[#545151] font-Light">{detail?.value}</p>
                      </div>
                  ))}
                  <Separator orientation = "horizontal" className="bg-[#AAAAAA] mt-6"/>
                </div>

                
          </div>
      </div>
    </div>
  )
}

export default Invoice