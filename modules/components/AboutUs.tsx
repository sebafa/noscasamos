import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center pt-10'>
            <h3 id='about-us' className='tracking-widest text-xl font-bold'> Un poco de nuestras aventuras</h3>
            <div className="relative">
                <div className="flex flex-col justify-center items-center w-full bg-white pt-4">
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}hearth-with-leafs.svg`}
                           height={55}
                           width={190}
                           alt=""/>
                </div>
                <div className="flex justify-center mt-4 align-items-center">
                    <div className="flex flex-col w-1/2 pr-2">
                        <div className="flex justify-end mb-4">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}meet.jpg`}
                                   height={500}
                                   width={500}
                                   alt="Nosotros de jovenes"/>
                        </div>
                        <div className="flex justify-end mb-4">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}lagodicomo.jpg`}
                                   height={500}
                                   width={500}
                                   alt="En roma"/>
                        </div>
                        <div className="flex justify-end mb-0">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}puntacana2.jpg`}
                                   height={500}
                                   width={500}
                                   alt="Neko acechando a su presa"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 pl-2">
                        <div className="flex justify-start mb-4">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}positano.jpg`}
                                   height={500}
                                   width={500}
                                   alt="Nosotros en positano"/>
                        </div>
                        <div className="flex justify-start mb-4">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}calafate2.jpg`}
                                   height={500}
                                   width={500}
                                   alt="Nosotros en nuestra primera casa"/>
                        </div>
                        <div className="flex justify-start mb-0">
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}nebula.jpg`}
                                   height={500}
                                   width={500}
                                   alt="Nosotros en nuestra casa actual"/>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center bg-white tracking-widest px-6 py-10 mt-[-10px] font-bold max-w-5xl text-2xl m-auto"> {/* agrega un margen negativo */}
                Información importante del evento
            </p>
        </div>
    );
};

export default AboutUs;