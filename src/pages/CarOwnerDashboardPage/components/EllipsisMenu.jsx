import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/Components/ui/menubar"
  import { IoEllipsisVertical } from "react-icons/io5";



const EllipsisMenu = () => {
  return (
   <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
            <IoEllipsisVertical />
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem disabled>Unassign</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Change business model</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Ride-hailing  for business (R4HB)</MenubarItem>
              <MenubarItem>Rental  for business (RT4B)</MenubarItem>
              <MenubarItem>Hire-purchase for business (HB4B)</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
      
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default EllipsisMenu