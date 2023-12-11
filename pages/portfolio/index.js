import Layout from '@/components/layouts/layout'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import atarcabosPhoto from '../../public/atar-cabos.png'
import routingPostThumbnail from '../../public/react-routing.png'
import GridItem from '@/components/gridItem'

const Portfolio = () => {
  return (
    <Layout title="Posts">
      <Container mt={4} maxW="container.md">
        <Box my={4}>
          <Heading as="h3" variant="section-title">
            Portfolio
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.atarcabos.com"
              title="Atar Cabos"
              thumbnail={atarcabosPhoto}
            >
              Sailing school, based in Valencia, Spain.
            </GridItem>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Portfolio
