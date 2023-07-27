import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../Components/CustomCard";


const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
    return (
        <CustomCard
            bgColor={inverted ? "#0058AC" : "white"}
            bgImage={imgUrl}
            bgSize="cover"
            bgRepeat="no-repeat"
        >
            <Tag
                color={inverted ? "#0058AC" : "white"}
                bg={inverted ? "white" : "#0058AC"}
                borderRadius="full"
                fontWeight={600}
            >
                {tagText}
            </Tag>

            <Text
                mt="4"
                textStyle="h5"
                color={inverted ? "white" : "black.80"}
                fontWeight={600}
            >
                {text}
            </Text>
        </CustomCard>
    )
}

export default InfoCard;