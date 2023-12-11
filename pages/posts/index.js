import GridItem from '@/components/gridItem'
import Layout from '@/components/layouts/layout'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import jsPostThumbnail from '../../public/js-img.jpeg'
import routingPostThumbnail from '../../public/react-routing.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container mt={4} maxW="container.md">
        <Box my={4}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://medium.com/nerd-for-tech/execution-context-of-javascript-and-this-e080e22f2245"
              title="JavaScript Execution Context Explained"
              thumbnail={jsPostThumbnail}
            />
            <GridItem
              href="https://medium.com/@ogulcansah/client-side-routing-react-cc36a338027b"
              title="React Routing"
              thumbnail={routingPostThumbnail}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Posts
