import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

function Topnav({ title = "", OnOpen = false }) {
    return (
        <Box px={"4"} boxShadow={"2xl"} bg={"#001529"}>
            <HStack
                maxW={"62rem"}
                mx={"auto"}
                h={"16"}
                justify={"space-between"}
                textColor={"white"}
            >
                <Icon as={MdOutlineMenu}
                    onClick={OnOpen}
                    cursor={"pointer"}
                    fontSize={"24px"}
                    display={{
                        base: "block",
                        lg: "none",
                    }}
                />

                <Heading fontSize={"28px"}>
                    {title}
                </Heading>

                <Menu>
                    <MenuButton>
                        <Icon as={FaUserCircle} fontSize={"28px"} justifyContent={"center"} />
                    </MenuButton>
                    <MenuList textColor={"black"}>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    );
}

export default Topnav;
