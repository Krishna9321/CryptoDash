import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import {IoMdMail} from "react-icons/io";


function SupportCard({ leftComponent, icon, title, text }) {
    return (
        <Flex
            justify={"space-between"}
            flexDir={{
                base: "column",
                lg: "row",
            }}
        >
            <Stack maxW={"24rem"}>
                <Icon as={icon} boxSize={6} color={"#0b0883"} />

                <Text fontWeight="600" as="h1" textStyle="h1" fontSize="3xl">
                    {title}
                </Text>

                <Text fontSize="sm" color="#606060" fontWeight="600">
                    {text}
                </Text>
            </Stack>


            <Box maxW="550px" w="full">
                {leftComponent}
            </Box>
        </Flex>
    );
}

export default SupportCard;