import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import Sidenav from "./Sidenav";


function SideDraw({ isOpen, onClose }) {


    return (
        <>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                className="Draw"
            >
                <DrawerOverlay />
                <DrawerContent bg={"#001529"}>
                    <DrawerCloseButton color={"white"} />

                    <DrawerBody>
                        <Sidenav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDraw;
