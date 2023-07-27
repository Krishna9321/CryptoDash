import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from '../../Components/CustomCard';
import { Fragment } from "react";
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa';



function Recents() {

    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC  Sell",
            amount: "- 0.1248513 BTC",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
    ];


    return (
        <CustomCard h={"full"}>
            <Text mb="6" fontSize="sm" color="black.80">
                Recent Transactions
            </Text>

            <Stack>
                {
                    transactions.map((transaction, i) => (
                        <Fragment key={transaction.id}>
                            {i !== 0 && <Divider />}
                            <Flex gap={"4"}>
                                <Grid placeItems={"center"} bg={"#f3f3f7"} boxSize={10} borderRadius={"full"}>
                                    <Icon as={transaction.icon} />
                                </ Grid>

                                <Flex justify={"space-between"} w={"full"}>
                                    <Stack spacing={0}>
                                        <Text textStyle="h6">{transaction.text}</Text>
                                        <Text fontSize="sm" color="#707070">
                                            {transaction.timestamp}
                                        </Text>
                                    </Stack>

                                    <Text textStyle="h6">{transaction.amount}</Text>
                                </Flex>
                            </Flex>
                        </Fragment>
                    ))
                }
            </Stack>

            <Button w="full" mt="8" colorScheme="gray">
                View All
            </Button>
        </CustomCard>
    );
}

export default Recents;