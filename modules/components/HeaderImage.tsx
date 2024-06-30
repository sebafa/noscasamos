import Image from 'next/image';

interface Props {
    imageSrc: string;
    imageAlt: string;
    text: string;
    height: number;
    width: number;
    textSize: string;
}

const HeaderImage = ({ imageSrc, imageAlt, text, height, width, textSize = 'lg' }: Props) => {
    // Mapea el valor de textSize a la clase de texto correspondiente
    let textSizeClass;
    switch (textSize) {
        case 'sm':
            textSizeClass = 'text-sm';
            break;
        case 'md':
            textSizeClass = 'text-md';
            break;
        case 'lg':
            textSizeClass = 'text-lg';
            break;
        case 'xl':
            textSizeClass = 'text-xl';
            break;
        case '2xl':
            textSizeClass = 'text-2xl';
            break;
        case '3xl':
            textSizeClass = 'text-3xl';
            break;
        case '4xl':
            textSizeClass = 'text-4xl';
            break;
        default:
            textSizeClass = 'text-base';
    }

    return (
        <header className="flex bg-white flex-col m-auto items-center w-full max-w-5xl mt-14 pt-6">
            <Image
                   src={imageSrc}
                   height={height}
                   width={width}
                   alt={imageAlt}/>
            <p className={`tracking-widest leading-6 pt-6 ${textSizeClass}`}>
                {text}
            </p>
        </header>
    )
}

export default HeaderImage;