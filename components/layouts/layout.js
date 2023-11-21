import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({children, title}) => {
    const t = `${title} - Murat Ogulcan Sahin`
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{t}</title>
                        <meta name="og:title" content={t} />
                    </Head>
                )}
                {children}
            </>
        </motion.article>
    )
}

export default Layout