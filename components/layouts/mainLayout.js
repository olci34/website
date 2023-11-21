import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Footer from "../footer";
import Navbar from "../navbar";
import Head from "next/head";

const MainLayout = ({children, router}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Ogulcan's Website" />
                <meta name="og:title" content="Murat Ogulcan Sahin"/>
                <title>Ogulcan Portfolio</title>
            </Head>
            
            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14} >
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default MainLayout