import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/Components/ui/menubar"
  import { IoEllipsisVertical } from "react-icons/io5";
  import { IoIosRemoveCircle } from "react-icons/io";
  import { BiSolidFilePdf } from "react-icons/bi";


  const data = JSON.parse(localStorage.getItem("dashBoardData"))

// eslint-disable-next-line react/prop-types
const EllipsisMenu = ({ onUnassignClick }) => {
  return (
   <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
            <IoEllipsisVertical />
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem onClick={onUnassignClick}>
            <IoIosRemoveCircle />
            Unassign
          </MenubarItem>
          <MenubarItem >
            <BiSolidFilePdf />
            <a 
              href={`https://engines.fleetopsgh.com/${data?.form}`}
              target="_blank"
              rel="noreferrer"
              className="font-SemiBold font-[16px] underline">
              Vehicle Collection Form
            </a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default EllipsisMenu