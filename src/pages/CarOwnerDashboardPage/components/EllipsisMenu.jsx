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
  import PropTypes from "prop-types";


const EllipsisMenu = ({ data, onUnassignClick }) => {
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
              href={`https://engines.fleetopsgh.com/uploads/handover/${data?.driver?.VCC}`}
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

EllipsisMenu.propTypes = {
  data: PropTypes.object,
  onUnassignClick: PropTypes.func
};