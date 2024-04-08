import * as React from "react";
import { CiSearch } from "react-icons/ci";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, value, ...props }, ref) => {
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
  );
});

Input.displayName = "Input";

export { Input };
