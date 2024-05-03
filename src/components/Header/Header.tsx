import { useState } from 'react';

import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

import title from '../../assets/images/Header/titleB2B.webp'

export default function Header() {
    const [value, setValue] = useState<number>(1); // Estado para armazenar o valor selecionado
    const [video, setVideo] = useState<string>('https://www.youtube.com/embed/3ZU6mj6ezzg?si=h_Cz4WLNxVPXvqGI');

    const videoLinks = [
        { value: 1, url: 'https://www.youtube.com/embed/3ZU6mj6ezzg?si=h_Cz4WLNxVPXvqGI' },
        { value: 2, url: 'https://www.youtube.com/embed/1MBQEfMFAOM?si=nlrWI2A1do2hQc63' },
        { value: 3, url: 'https://www.youtube.com/embed/pb3IpGZAi04?si=uw1sFigxLKfeVxrQ' },
    ];

    const handleTabChange = (newValue: number) => {
        if ( newValue !== value ) {
          setValue(newValue);
        }

        const selectedLink = videoLinks.find(link => link.value === newValue);
        if (selectedLink) {
            setVideo(selectedLink.url);
        }
    };
    
    return (
        <header>
            <div >
                <div className="flex overflow-hidden relative flex-col items-center md:px-10 lg:px-16 pt-20 pb-7 w-full mix-blend-hard-light lg:min-h-[648px] max-md:px-5 max-md:max-w-full bg-[#df7f0d] ">
                    {/* BACKGORUND */}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebf6ba291a85b87db2aba856cd9c18d428eebf56c37dc81622f9c900b7026e6?apiKey=f3f6ab0d16cf4f10881b61c4cf8dd438&"
                        className="object-cover absolute inset-0 size-full"
                    />
                    
                    <div 
                        data-aos="fade-up" 
                        data-aos-duration='1500' 
                        className="flex relative flex-col  w-full max-w-[990px] max-md:max-w-full"
                    >
                        <img
                            loading="lazy"
                            src={title}
                            className="w-full aspect-[7.14] max-md:max-w-full"
                        />
                        <p className="mt-11 md:text-xl  text-center text-white  max-md:mt-10 max-md:max-w-full">
                        A Transtriângulo está aberta a novas parcerias com outras transportadoras que possam precisar usar a subcontratação de fretes.
                        </p>

                        <p className='md:text-xl  text-center text-white'>
                            Aqui, você conta com caminhões novos e com profissionais capacitados e preparados para atender suas necessidades com excelência.
                        </p>
                        
                        {/* MENU DESKTOP */}
                        <Tabs 
                            value={value}
                            className="relative flex flex-col justify-center p-3 md:p-8 mt-12 md:text-2xl leading-6 text-white bg-green-900 shadow-lg rounded-[75px] "
                        >
                            <TabsList className="flex justify-around gap-0 p-2 bg-green-600 rounded-[100px] max-md:flex-wrap">
                                <Tab >
                                    <div 
                                        onClick={() => handleTabChange(1)} 
                                        className={`
                                            ${(value === 1) ? 'bg-white text-black' : 'bg-transparent' }
                                            ' flex flex-1 gap-2 justify-center items-center py-3.5 px-2 md:px-8 whitespace-nowrap  rounded-[100px] max-md:px-5'
                                        `}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                        </svg>

                                        <p className={`
                                            ${(value === 1) ? 'block' : 'hidden lg:block' }
                                            italic
                                        `}
                                        >
                                            Frota
                                        </p>
                                    </div>
                                </Tab>

                                <Tab >
                                    <div 
                                        onClick={() => handleTabChange(2)}
                                        className={`
                                            ${(value === 2) ? 'bg-white text-black' : 'bg-transparent' }
                                            ' flex flex-1 gap-2 justify-center items-center py-3.5 px-2 md:px-8 whitespace-nowrap  rounded-[100px] max-md:px-5'
                                        `}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                        </svg>

                                        <p className={`
                                            ${(value === 2) ? 'block' : 'hidden lg:block' }
                                            italic
                                        `}
                                        >
                                            Monitoramento 
                                        </p>
                                    </div>
                                </Tab>

                                <Tab >
                                    <div 
                                        onClick={() => handleTabChange(3)}
                                        className={`
                                        ${(value === 3) ? 'bg-white text-black' : 'bg-transparent' }
                                            ' flex flex-1 gap-2 justify-center items-center py-3.5 px-2 md:px-8 whitespace-nowrap  rounded-[100px] max-md:px-5'
                                        `}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>

                                        <p className={`
                                            ${(value === 3) ? 'block' : 'hidden lg:block' }
                                            italic
                                        `}
                                        >
                                            Serviços
                                        </p>
                                    </div>
                                </Tab>

                                {/* <Tab >
                                    <div 
                                        onClick={() => handleTabChange(4)}
                                        className={`
                                            ${(value === 4) ? 'bg-white text-black' : 'bg-transparent' }
                                            ' flex flex-1 gap-2 justify-center items-center py-3.5 px-2 md:px-8 whitespace-nowrap  rounded-[100px] max-md:px-5'
                                        `}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                        <p className={`
                                            ${(value === 4) ? 'block' : 'hidden lg:block' }
                                            italic
                                        `}
                                        >
                                            Localização
                                        </p>
                                    </div>
                                </Tab> */}
                            </TabsList>

                            <div className='hidden'>
                                <TabPanel value={1} tabIndex={1}>first page</TabPanel>
                                <TabPanel value={2} tabIndex={2}>Second page</TabPanel>
                                <TabPanel value={3} tabIndex={3}>Third page</TabPanel>
                            </div>
                        </Tabs>
                    </div>

                    <div className='z-50 pb-20 pt-10 container  lg:px-10 flex justify-center '>
                        <iframe
                            className="w-full max-w-[1300px] h-[250px] md:h-[400px] xl:h-[620px] rounded-3xl"
                            src={video}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                    </div>
                </div>
                
                
            </div>
            
        </header>
    )
}

