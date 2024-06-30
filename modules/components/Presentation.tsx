import { useMediaQuery } from '@react-hook/media-query';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CountdownTimer = dynamic(() => import('@/modules/components/CountdownTimer'), { ssr: false });

export const Presentation = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState(false);
    const hasArrivedToMaxWith = useMediaQuery("(max-width: 1023px)");

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith])

    return (
        <section className="flex flex-col lg:items-center lg:flex-row w-full">
            <div className="relative w-full pb-[100%] mt-6 lg:flex-col lg:mt-12 lg:pb-[95%]">
            { isMobile ? (
                <div className="w-full h-full overflow-hidden">
                    <img src="/images/vivimosjuntos.jpg" alt={'Imagen de Vir y Seba en punta cana'} className="object-cover w-full h-full absolute top-0 left-0" />
                </div>
            ) : (
                <div className="w-full h-full overflow-hidden">
                    <img src="/images/vivimosjuntos.jpg" alt={'Imagen de Vir y Seba en punta cana'} className="object-cover w-full h-full absolute top-0 left-0" />
                </div>
            )}
            </div>
            <div className='w-full bg-white lg:py-[219px] lg:bg-white-with-opacity'>
                <div className="relative lg:static lg:flex-col">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[-90px]
                    lg:static lg:-translate-x-0 lg:flex lg:justify-center">
                        {isMobile ? (
                            <img src="/images/date-rings.svg" height={180} width={180} alt="Anillos entrelazados"/>
                        ) : (
                            <img src="/images/date-rings-large.svg" height={108} width={150} alt="Anillos entrelazados"/>
                        )}
                    </div>
                </div>
                <div className="relative lg:static lg:flex-col ">
                    <h1 className="flex flex-col items-center text-5xl font-fantasy pt-8 z-10 lg:pt-16 lg:text-6xl">
                        Vir y Seba
                    </h1>
                    <p className="flex flex-col items-center tracking-widest  leading-6 pt-8 lg:pt-24 lg:text-3xl">
                        ¡Nos casamos!
                    </p>
                    <div className="border-y-2 border-y-primary-brown mx-6 mt-4 lg:mt-6 lg:mx-16">
                        <CountdownTimer date={new Date('2025-03-02T17:00:00')}/>
                    </div>
                    <div className="flex flex-col items-center p-10 relative lg:pt-12">
                        <audio controls>
                            <source src="/noscasamos/Novemberrain.mp3" type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        {isMobile && (
                            <div className="flex flex-row justify-between items-center absolute w-full">
                                <div className="relative w-full h-full">
                                    <img src="/images/flowers-left.svg" alt="Flores de colores" className="object-cover w-full h-full" />
                                </div>
                                <div className="relative w-full h-full">
                                    <img src="/images/flowers-right.svg" alt="Flores de colores" className="object-cover w-full h-full" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}