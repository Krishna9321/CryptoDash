import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";


const Sidenav = () => {

    const navLinks = [
        {
            icon: MdDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: AiOutlineTransaction,
            text: "Transactions",
            link: "/transactions",
        },
    ];


    return (
        <div>
            <Stack
                boxShadow={"lg"}
                w={{
                    base: "18rem",
                    lg: "16rem",
                }}
                textAlign={"center"}
                justify={"space-between"}
                className="Navbar"

            >
                <Box>
                    <div className="Head">
                        <img src="cryptocurrency.png" alt="" className="Logo" />

                        <Heading as={"h1"} fontSize={"24px"} fontWeight={600} className="Crypto">
                            CRYPTOVERSE
                        </Heading>
                    </div>

                    <Box mt={"5"} mx={"3"}>
                        {
                            navLinks.map((nav) => (
                                <Link to={nav.link} key={nav.text} >
                                    <HStack
                                        py={"3"} px={"4"}
                                        borderRadius={"10px"}
                                        _hover={{
                                            bg: "#4361ee",
                                            color: "#ffffff",
                                        }}
                                        color={"#797e82"}
                                    >
                                        <Icon as={nav.icon} />
                                        <Text fontSize={"14px"} fontWeight={700}>
                                            {nav.text}
                                        </Text>
                                    </HStack>
                                </Link>
                            ))
                        }
                    </Box>
                </Box>

                <Box mt={"5"} mx={"3"} mb={"6"}>
                    <Link to={"/support"} >
                        <HStack
                            py={"3"} px={"4"}
                            borderRadius={"10px"}
                            _hover={{
                                bg: "#4361ee",
                                color: "#ffffff",
                            }}
                            color={"#797e82"}
                        >
                            <Icon as={BiSupport} />
                            <Text fontSize={"14px"} fontWeight={700}>
                                Support
                            </Text>
                        </HStack>
                    </Link>
                </Box>
            </Stack>
        </div>
    );
}

export default Sidenav;