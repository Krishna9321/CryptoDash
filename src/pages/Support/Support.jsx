import DashLayout from "../../Components/DashLayout";
import Contact from "./Contact";
import SupportCard from "./SupportCard";
import { IoMdMail } from "react-icons/io";
import { BsFillChatTextFill } from "react-icons/bs";
import InfoCard from "../Dashboard/InfoCard";
import { Stack } from "@chakra-ui/react";


const Support = () => {
    return (
        <DashLayout title={"Support"}>
            <Stack spacing={"3rem"}>
                <SupportCard
                    icon={IoMdMail}
                    leftComponent={<Contact />}
                    title="Contact Us"
                    text=" Have a question or just want to know more? Feel free to reach out to
                      us."
                />


                <SupportCard
                    icon={BsFillChatTextFill}
                    leftComponent={
                        <InfoCard
                            imgUrl="Boxes.png"
                            inverted={true}
                            tagText="ChatBot"
                            text="Chat with a AI personal assistant right now.."
                        />
                    }
                    title="Live Chat"
                    text=" Don’t have time to wait for the answer? Chat with us now."
                />
            </Stack>
        </DashLayout>
    );
}

export default Support;