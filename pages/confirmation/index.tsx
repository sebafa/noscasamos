import { addGuest, Guest } from '@/firebase/client';
import HeaderImage from '@/modules/components/HeaderImage';
import { NavigationHeader } from '@/modules/components/NavigationHeader';
import bg from '@/public/images/tile-background.png';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Index = (): JSX.Element => {
    const router = useRouter()
    const [isComing, setIsComing] = useState(false);
    const [hasSubmit, setHasSubmit] = useState(false);

    const namePlaceholder = 'Escribe tu nombre completo (apellidos incluidos)';

    const handleIsComingChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setIsComing(JSON.parse(event.currentTarget.value));
    }

    const handleOnSubmit = async (event: any) => {
        event.preventDefault()
        setHasSubmit(true)

        const data: Guest = {
            name: event.target.name.value,
            isComing: event.target.isComing.value,
            suggestions: event?.target?.suggestions?.value ?? null
        }

        await addGuest(data).
            then(() => {
                if (isComing) {
                    router.push('/attendance-confirmation')
                } else {
                    router.push('/attendance-rejection')
                }
            }).
            catch(e => {
                setHasSubmit(false)
                console.log(e)
            });
    }

    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'repeat'
        }}>
            <NavigationHeader/>
            <div className="min-h-[calc(100vh-112px)] max-w-5xl m-auto bg-white">
                <div className="lg:pt-14">
                    <HeaderImage imageSrc={`${process.env.NEXT_PUBLIC_IMAGES_ROUTE}/date-rings-large.svg`}
                                 imageAlt={'Anillos entrelazados'}
                                 text={'Nos encantaría que nos puedas acompañar en este día.'}
                                 textSize='2xl'
                                 height={108}
                                 width={150}/>
                    <p className="italic text-center mt-3" style={{ fontSize: '17px'}}> Debido a las características del lugar, queremos recordarles que esta es una celebración no adaptada para los más pequeños.</p>
                </div>
                <form className="flex bg-white flex-col m-auto pt-10 px-6 max-w-5xl lg:px-44"
                      method="post"
                      onSubmit={handleOnSubmit}>
                    <h2 className="tracking-widest leading-6">DEJÁNOS TUS DATOS</h2>
                    <label className=" text-primary-brown pt-4"
                           htmlFor="name">Nombre y apellidos
                    </label>
                    <input className="bg-light-grey border border-primary-grey  italic p-3 mt-2"
                           type="text"
                           id="name"
                           name="name"
                           required
                           placeholder={namePlaceholder}/>
                    <fieldset>
                        <legend className=" text-primary-brown pt-8">¿Vas a asistir a nuestro casamiento?</legend>
                        <div className="pt-4">
                            <input type="radio"
                                   id="isComing"
                                   name="isComing"
                                   value="true"
                                   required
                                   onClick={handleIsComingChange}/>
                            <label className=" pl-2"
                                   htmlFor="isComing">¡Por supuesto, no me lo pierdo por nada! 🤩
                            </label>
                        </div>
                        <div className="pt-4">
                            <input type="radio"
                                   id="isNotComing"
                                   name="isComing"
                                   value="false"
                                   required
                                   onClick={handleIsComingChange}/>
                            <label className=" pl-2"
                                   htmlFor="isNotComing">Lo siento, pero no puedo. 😢
                            </label>
                        </div>
                    </fieldset>
                    {isComing && (<>
                        <label className=" text-primary-black pt-8"
                               htmlFor="suggestions">¿TENÉS ALGUNA PETICIÓN ESPECIAL?
                        </label>
                        <label className=" text-dark-grey pt-4"
                               htmlFor="suggestions">¿Sos alergico a algun alimento? ¿Sos vegano?...
                            Escribínos aquí un comentario para tenerlo en cuenta
                        </label>
                        <textarea className="bg-light-grey border border-primary-grey  italic p-3 mt-2"
                                  id="suggestions"
                                  name="suggestions"
                                  rows={4}
                                  cols={50}
                                  placeholder="Escribe aquí lo que necesites..."/>
                    </>)}
                    <div className="flex justify-end">
                        <button className="py-3 px-10 mt-8 mb-12 font-bold tracking-widest  leading-6 bg-primary-brown text-white"
                                type="submit"
                                disabled={hasSubmit}>ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Index;