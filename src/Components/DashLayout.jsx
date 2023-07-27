import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import SideDraw from "./SideDraw";


function DashLayout({ title, children }) {

    const { isOpen, onClose, onOpen } = useDisclosure();


    return (
        <Flex>
            <Box
                display={{
                    base: "none",
                    lg: "flex",
                }}
            >
                <Sidenav />
            </Box>


            <SideDraw isOpen={isOpen} onClose={onClose} />


            <Box flexGrow={1}>
                <Topnav title={title} OnOpen={onOpen} />

                <Container
                    overflowX="hidden"
                    overflowY="auto"
                    h="calc(100vh - 88px)"
                    mt="6"
                    maxW="62rem"
                >
                    {children}
                </Container>
            </Box>
        </Flex>
    )
}

export default DashLayout;
