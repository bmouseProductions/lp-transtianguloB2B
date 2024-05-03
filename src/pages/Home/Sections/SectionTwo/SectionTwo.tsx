import colaborador from '../../../../assets/images/SectionTwo/colaborador.webp'
import Button from '../../../../components/Button/Button'

export default function SectionTwo() {
    return (
        <section className="flex flex-col justify-center bg-orange-500">
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[937px] max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c4ab66ecff6f9611d0400f2555cb28b46a6fa5a544cf66990f9bf089080ce2?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="relative mt-12 mb-2.5 w-full max-w-[1078px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex relative flex-col gap-3 self-stretch my-auto  text-white">
                                <h1 className='text-3xl  lg:text-5xl italic'>
                                    HÁ MAIS DE 19 ANOS
                                    NO MERCADO
                                </h1>

                                <p className="mt-10 md:mt-16 text-lg !font-normal">
                                    Transportamos óleos e gorduras animais e vegetais com agilidade e segurança. Fornecemos os melhores serviços de transporte disponíveis atualmente em todo o país, unindo nosso pessoal qualificado com anos de experiência.
                                </p>

                                <div 
                                    data-aos="flip-up"
                                    data-aos-duration='1500'
                                    className="flex justify-between items-center px-11 py-7 mt-20 md:gap-[15px] whitespace-nowrap bg-green-900 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-10"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 md:w-[100px] h-16 md:h-[100px]">
                                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                    </svg>


                                    <div className="shrink-0 self-start w-0.5 h-16 md:h-40 bg-zinc-300 bg-opacity-70 rounded-[33px]" />

                                    <div className="flex gap-4 lg:gap-10 items-center">
                                        <h2 className="my-auto text-xl lg:text-2xl font-semibold">
                                            Fornecimento
                                            <br />
                                            Responsável
                                        </h2>

                                        <div className="p-2 h-fit bg-[#ffffff56] rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                    <Button estilo='secundario' />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full justify-center">
                            <img
                                loading="lazy"
                                src={colaborador}
                                className="mx-auto "
                                data-aos="fade-down-left"
                                data-aos-duration='1500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}