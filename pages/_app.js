import { AnimatePresence } from 'framer-motion'
import { Chakra } from '../components/chakra'
import Layout from '../components/layouts/mainLayout'
import theme from '../lib/theme'
import { localStorageManager } from '@chakra-ui/react'

export default function App({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence 
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({top: 0})
            }
          }}
        >
          <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}
