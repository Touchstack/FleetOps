import * as React from "react"
import { CiSearch, CiCircleQuestion } from "react-icons/ci";
import { Tooltip } from '@mui/material';
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})

Input.displayName = "Input"

const SearchInput = React.forwardRef(({ className, type, value, ...props }, ref) => {
  return (
    <div className="relative w-full rounded-md border  bg-background px-5">
     <CiSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <input
      type={type}
      value={value}
      className={cn(
        "ml-5 flex h-10 w-full focus:border-[#FFFFFF] rounded-md border border-input border-hidden bg-background text-sm  placeholder:text-[#ABB3BF] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
</div>
  )
})

SearchInput.displayName = "SearchInput"

const InputToolTip = React.forwardRef(({ className, type, value, ...props }, ref) => {
  const toolInfo = 'Cash collection is done through mobile money on all networks. A collection note will be sent to the phone number you inputted. Please be sure it is the number you want to use then press continue!';
  
  return (
    <div className="relative w-full rounded-md border bg-background">
      <input
        type={type}
        value={value}
        className={cn(
          "flex h-10 w-full focus:border-[#FFFFFF] rounded-md border border-input border-hidden bg-background text-sm placeholder:text-[#ABB3BF] px-2 placeholder:px-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <Tooltip title={toolInfo} arrow placement="bottom">
        <span className="absolute hover:cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
          <CiCircleQuestion size={20} className="text-gray-400" />
        </span>
      </Tooltip>
    </div>
  );
});

InputToolTip.displayName = "InputToolTip";

export { Input, SearchInput, InputToolTip }
