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
          <MenubarItem>
            <BiSolidFilePdf />
            Vehicle collection form
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default EllipsisMenu