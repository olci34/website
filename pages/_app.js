import { AnimatePresence } from 'framer-motion'
import { Chakra } from '../components/chakra'
import Layout from '../components/layouts/mainLayout'

export default function App({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}
