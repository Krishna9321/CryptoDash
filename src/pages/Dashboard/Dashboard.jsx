import { Grid, GridItem } from "@chakra-ui/react";
import DashLayout from "../../Components/DashLayout";
import SideDraw from "../../Components/SideDraw";
import Chart from "./Chart";
import Portfolio from "./Portfolio";
import Recents from "./Recents";
import InfoCard from "./InfoCard";


const Dashboard = () => {

    return (
        <DashLayout title={"Dashboard"}>
            <Grid
                gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(2, 1fr)",
                }}
                gap={"6"}
            >
                <GridItem colSpan={{
                    base: 1,
                    xl: 2,
                }}>
                    <Portfolio />
                </GridItem>

                <GridItem colSpan={1}>
                    <Chart />
                </GridItem>

                <GridItem colSpan={1}>
                    <Recents />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard
                        imgUrl='/Dots.png'
                        text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
                              selling it"
                        tagText="Loan"
                        inverted={false}
                    />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard
                        imgUrl="Boxes.png"
                        inverted={true}
                        tagText="Contact"
                        text="Learn more about our real estate, mortgage, and  corporate account services"
                    />
                </GridItem>
            </Grid>
        </DashLayout>
    );
}

export default Dashboard;