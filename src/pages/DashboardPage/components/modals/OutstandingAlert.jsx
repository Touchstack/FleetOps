import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog"
import warning from "@/assets/images/warning.png"

const OutstandingAlert = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <div
        className="border-[1px] w-6/12 flex items-center justify-center p-3 rounded-[10px] text-[#FFFFFF] border-[#FFFFFF] font-SemiBold hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110"
      >
        <p>Return car</p>
      </div>
      </DialogTrigger>
      <DialogContent className="w-10/12 md:w-3/6 rounded-md flex items-center justify-center h-[112px]">
        <DialogHeader>
          <DialogDescription>
            <div className="flex flex-row gap-6 items-center">
             <img  src={warning}/>
                Please pay outstanding amount first.
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default OutstandingAlert;
