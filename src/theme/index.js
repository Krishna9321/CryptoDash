import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: "Ubuntu",
        body: "Ubuntu",
    },
    textstyles: {
        h1: {
            fontSize: {
                base: "30px",
                md: "32px"
            },
            lineHieght: {
                base: "34px",
            }
        }
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: '#f3f3f7',
            },
        },
    },
    
});