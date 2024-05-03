

export default function SectionFive() {
    return (
        <section className="flex flex-col justify-center  bg-green-900">
            <div 
                className="px-5 md:px-16 py-20 w-full min-h-[400px] md:min-h-[500px] flex overflow-hidden relative flex-col justify-center items-center "
            >
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2764048d4b5446b303c9dfe1ab4c3b320f90d0bfb17a1de8f516523449a35782?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                    className="object-cover absolute inset-0 size-full"
                />
                <div 
                    data-aos="zoom-in"
                    data-aos-duration='1500'
                    className="relative mb-3 w-full flex flex-col  "
                >
                    <h1 className="mt-2 font-bold italic text-4xl md:text-7xl lg:text-8xl text-white text-center uppercase">
                        O compromisso é nosso melhor caminho.
                    </h1>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <a
                            href="https://typebot.co/transtriangulo"
                            className="mb-[-115px] p-6  md:p-10 max-h-[80px] md:max-h-none w-fit rounded-full bg-[#f97316] shadow-black shadow-2xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 md:w-12 h-8 md:h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}