import Image from 'next/image';

const Gift = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center px-4 pt-10 text-center bg-white w-full">
            <h3 className="tracking-widest leading-6 text-xl font-bold">
                El mejor regalo es que nos acompañes en este día
            </h3>
            <p className="tracking-widest leading-6 pt-4 lg:pt-8">
                Pero si aun así queres tener otra atención, podes ayudarnos con nuestra luna de miel
            </p>
            <p className="tracking-widest  leading-6 pt-4 lg:pt-8 lg:tracking-wider">
                CBU XXXXXXXXXXXX
            </p>
            <Image
                className='pt-7 pb-10'
                src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}/envelope.svg`}
                height={92}
                width={76}
                alt="Anillos entrelazados"/>
        </div>
    );
}

export default Gift;
