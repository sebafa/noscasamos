import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';

export const WelcomeTextCard = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState(false);
    const hasArrivedToMaxWith = useMediaQuery('(max-width: 1023px)');

    useEffect(() => {
        setIsMobile(hasArrivedToMaxWith);
    }, [hasArrivedToMaxWith])

    return (
        <div className="flex flex-col items-center px-4 pt-10 lg:py-12 bg-white">
            {isMobile ? (
                <h3 className="tracking-widest leading-6 text-xl font-bold">
                    ¡Bienvenidos a nuestro casamiento! </h3>
            ) : (
                <h3 className="tracking-widest leading-6 lg:text-2xl">
                    BIENVENIDOS A NUESTRO CASAMIENTO</h3>
            )}
            <p className="tracking-widest  leading-6 pt-4 lg:text-xl lg:pt-8">
                
            </p>
            <p className="tracking-widest  leading-6 pt-4 text-center lg:text-xl lg:pt-8 lg:tracking-wider">
            Estamos muy emocionados de invitarlos a compartir con nosotros este día tan especial. Acá podrán encontrar todos los detalles de nuestra boda. Gracias por estar con nosotros y celebrar nuestro amor
            </p>
        </div>
    )
}
