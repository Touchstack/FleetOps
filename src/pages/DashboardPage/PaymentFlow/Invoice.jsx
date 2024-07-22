import { useState } from "react";
import DashboardNavBar from "@/Components/Navbar/DashboardNavBar"
import PaymentConfirmation from "./modals/PaymentConfirmation";
import { Separator } from "@/Components/ui/separator";
import Table from "@/Components/Table/Table";


const CashPrompt = () => (
   <div className={'fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center px-0 justify-center'}>
       <div className={'bg-[#FFFFFF] p-10 rounded-[20px] w-auto h-auto '}>
          <p className={'text-black md:text-[19px] text-[14px] font-SemiBold'}>
            Please check your phone for the cash release prompt.
          </p>
       </div>
   </div>
)


const Invoice = () => { 

    const [promptActive, setPromptActive] = useState(false);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);

    const carDetails = [
        { label: 'Vehicle registration number', value: 'GW123456' },
        { label: 'Phone number', value: '02426729000' },
        { label: 'Payment Option', value: 'MTN momo' },
        { label: 'Date', value: '19/04/2024' },
      ];

    const headers = ['Invoice No.', 'Description', 'Amount To Pay'];
    const headerKeyMap = {
      'Invoice No.': 'invoice_no',
      'Description': 'description',
      'Amount To Pay': 'amount_to_pay',
    };
    
    const data = [
      { id: 1, invoice_no: 'SCH3262-1', description: 'Daily Payments', amount_to_pay: 'GHC 68.0'},
     ];
    
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar payment={true} />
      <div className="flex flex-col mt-10 px-5 items-center justify-center">
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

                <Table headers={headers} data={data} headerKeyMap={headerKeyMap} />
              
             
                <div
                  className={"bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 w-[200px] h-[46px] rounded-[10px] flex items-center justify-center "}
                  onClick={() => setPromptActive(!promptActive) }
                >
                  <p className="font-Bold text-[#FFFFFF] text-[16px]">Pay (GHC 68.0)</p>
                </div>
             
          </div>
      </div>

      {promptActive && <CashPrompt />}

      {paymentConfirmed && <PaymentConfirmation onCancel={() => setPaymentConfirmed(!paymentConfirmed)} />}
    </div>
  )
}

export default Invoice