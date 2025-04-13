import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
    return (
        <>
            <Head>
                <title>famigb</title>
                <meta name='description' content='famigb' />
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/images/favicon.ico' />
            </Head>
            <div>
                <Hero />
                <About />
            </div>
        </>
    );
};

export default Home;
