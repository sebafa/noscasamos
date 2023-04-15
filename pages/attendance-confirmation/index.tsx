import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import bg from '@/public/images/tile-background.png';
import { useMediaQuery } from '@react-hook/media-query';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Index = () => {
    const [isMobile, setIsMobile] = useState(false);
    const hasArrivedToMaxWith = useMediaQuery("(max-width: 1023px)");

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith])

    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat'
        }}>
            <NavigationHeader/>
            <div className="min-h-[83vh] max-w-5xl m-auto bg-white text-sm lg:text-base">
                <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/flower.svg`}
                             imageAlt={'Imagen de una flor'}
                             text={'¡Gracias por confirmar tu asistencia!'}
                             height={80}
                             width={220}/>
                <p className="text-center tracking-widest pt-6">
                    Nos alegra mucho que compartas este día con nosotros. Y como queremos que sea una fiesta para
                    recordar...
                </p>
                <p className="text-center tracking-widest pt-6">
                    ¿Qué te gustaría que sonara en la pista de baile?
                </p>
                <div className="flex flex-col items-center w-full bg-white max-w-5xl m-auto pt-10">
                    <Link href="/confirmation"
                          className="font-bold tracking-widest text-sm leading-6 bg-primary-brown text-white p-4"> SUGERIR
                        TEMAZOS </Link>
                </div>
                <div className="flex flex-col items-center w-full bg-white pt-4 pb-6 max-w-5xl m-auto">
                    <Image priority
                           src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}images/salsa-music.svg`}
                           height={isMobile ? 240 : 360}
                           width={isMobile ? 260: 390}
                           alt="Pareja bailando salsa"/>
                </div>
            </div>
        </div>
    )
}

export default Index;
