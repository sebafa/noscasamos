import { ConfirmationCard } from '@/modules/components/ConfirmationCard';
import { ImageCard } from '@/modules/components/ImageCard';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import { Presentation } from '@/modules/components/Presentation';
import { WelcomeTextCard } from '@/modules/components/WelcomeTextCard';
import bg from '@/public/images/tile-background.png';
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>¡Nos casamos!</title>
                <meta name="description"
                      content="Generated by create next app"/>
                <meta name="viewport"
                      content="width=device-width, height=device-height, initial-scale=1"/>
                <link rel="icon"
                      href="/favicon.ico"/>
            </Head>
            <div className='flex flex-col items-center bg-white'
                style={{
                backgroundImage: `url(${bg.src})`,
                backgroundRepeat: 'repeat',
            }}>
                <main className='flex flex-col'>
                    <div className="flex flex-col items-center font-sans max-w-5xl">
                        <NavigationHeader/>
                        <Presentation/>
                        <WelcomeTextCard/>
                        <div className='w-full flex flex-col lg:flex-row'>
                            <ImageCard
                                imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/castle.svg`}
                                srcUrl='https://goo.gl/maps/iYprQ1yiyiREbPYi9'
                                imageAlt='Imagen del castillo de bellver, donde nos casamos'
                                title='LA CEREMONIA'
                                subtitle='12:30 - Castillo de Bellver'/>
                            <ImageCard
                                imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/Lume.svg`}
                                srcUrl='https://goo.gl/maps/s7af1x5Bcmf6YjV88'
                                imageAlt='Imagen del Lume, donde celebramos el banquete'
                                title='LA FIESTA'
                                subtitle='14:00 - Lume & Co'/>
                        </div>
                        <ConfirmationCard/>
                    </div>
                </main>
            </div>
        </>
    )
}
