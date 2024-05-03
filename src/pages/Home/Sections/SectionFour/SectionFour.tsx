import agilidade from '../../../../assets/images/SectionFour/icon-agilidade.webp'
import monitoramento from '../../../../assets/images/SectionFour/icon-satelite.webp'
import frotas from '../../../../assets/images/SectionFour/icon-truck.webp'
import facilidade from '../../../../assets/images/SectionFour/icon-mao.webp'
import capacitados from '../../../../assets/images/SectionFour/icon-medalha.webp'
import compromisso from '../../../../assets/images/SectionFour/icon-aperto.webp'
import Button from '../../../../components/Button/Button'

export default function SectionFour() {

    const cards =[ 
        {
            icon: agilidade,
            title: 'AGILIDADE',
            delay: '100'
        },
        {
            icon: monitoramento,
            title: 'MONITORAMENTO 24H',
            delay: '250'
        },
        {
            icon: frotas,
            title: 'frotas novas',
            delay: '350'
        },
        {
            icon: facilidade,
            title: 'facilidade',
            delay: '450'
        },
        {
            icon: capacitados,
            title: 'profissionais capacitados',
            delay: '550'
        },
        {
            icon: compromisso,
            title: 'compromisso',
            delay: '650'
        },
    ]

    return (
        <section className="flex flex-col pb-1.5 bg-orange-500">
            <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[881px] max-md:px-5 max-md:max-w-full">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dfc5e7aeb409bfd0c3747e9d76488fe1b09116e346fd3184d390de58c1a22bc?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                className="object-cover absolute inset-0 size-full"
                />

                <div className="relative z-10 container mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7">
                    {
                        cards.map((card, index) => 
                            <div 
                                className='px-5 w-full max-w-[345px] h-[280px] lg:h-[300px] flex flex-col items-center justify-center gap-5 bg-[#ee9e3e] rounded-lg'
                                data-aos="flip-left"
                                data-aos-duration='1500'
                                data-aos-delay={card.delay}
                                key={index}
                            >
                                <img src={card.icon} alt="" />
                                <h2 className='text-3xl text-center uppercase italic text-white'>
                                    {card.title}
                                </h2>
                            </div>
                        )
                    }
                </div>

                <Button estilo='secundario' />
            </div>
        </section>
    )
}