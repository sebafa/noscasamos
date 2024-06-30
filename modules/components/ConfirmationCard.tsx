import Link from 'next/link';
import Image from 'next/image'; // Importa Image de 'next/image'

export const ConfirmationCard = (): JSX.Element => {
  return (
      <section className='flex flex-col mt-[-1px] px-6 py-10 bg-white-with-opacity items-center w-full bg-white'>
          <p className='text-xl'>¿Venis? Te pedimos que confirmes asistencia en el siguiente link:</p>
          <Link href='/confirmation'
             className='p-4 mt-6 font-bold tracking-widest leading-6 bg-primary-brown text-white'>
              CONFIRMAR ASISTENCIA
          </Link>
          <p className='text-xl mt-11'></p>
          <div className="flex justify-center mt-4">
              <Image src={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}dress-code.png`}
                     height={185}
                     width={185}
                     alt="Código de vestimenta"/>
          </div>
          <p className='text-xl font-bold mt-[-25px]'>Elegante / Formal</p>
          <p className='text-lg italic mt-[-2px]'>Recomendamos calzado cómodo apto para el aire libre</p>
      </section>
  )
}