import Image from 'next/image'

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col w-full bg-black text-white">
            <div className="p-8">
                <p className="flex flex-row justify-center tracking-widest  leading-6">
                    <span className="pr-2">Vir</span>
                    <Image
                           src="/icons/rings-white.svg" 
                           height={24}
                           width={50}
                           alt="Anillos entrelazados"/>
                    <span className="pl-2">Seba</span>
                </p>
                <p className="flex flex-row justify-center tracking-widest  leading-6">
                    02 de Marzo 2025
                </p>
            </div>
        </footer>
    )
}
