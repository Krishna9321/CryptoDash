import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DashLayout from "../../Components/DashLayout";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import TTable from "./TTable";



const Transaction = () => {

    const tabs = [
        {
            name: "All",
            count: 200,
        },
        {
            name: "Deposit",
            count: 100,
        },
        {
            name: "Widthdraw",
            count: 50,
        },
        {
            name: "Trade",
            count: 50,
        },
    ];


    return (
        <DashLayout title={"Transactions"}>
            <Flex justify="end" mt="6" mb="3">
                <Button leftIcon={<Icon as={HiOutlineDownload} />} background={"#0B0883"}
                    textColor={"white"} _hover={{ textColor: "#0B0883", background: "white" }}
                >Export CSV</Button>
            </Flex>

            <Card borderRadius="1rem">
                <Tabs>
                    <TabList
                        pt="4"
                        display="flex"
                        w="full"
                        justifyContent="space-between"
                        p={4}
                    >

                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab key={tab.name} display={"flex"} gap={"2"} fontWeight={"600"}>
                                        {tab.name} <Tag background={"#c0c0c0"} fontSize={"0.8rem"} borderRadius={"full"}>{tab.count}</Tag>
                                    </Tab>
                                ))
                            }
                        </HStack>

                        <InputGroup maxW="200px" pr="6">
                            <InputLeftElement pointerEvents="none">
                                <Icon as={AiOutlineSearch} />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TTable />
                        </TabPanel>
                        <TabPanel>
                            <TTable />
                        </TabPanel>
                        <TabPanel>
                            <TTable />
                        </TabPanel>
                        <TabPanel>
                            <p>Yeah, The tabpanels are working!!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </DashLayout>
    );
}

export default Transaction;