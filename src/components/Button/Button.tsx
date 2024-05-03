interface ButtonProps {
    estilo: "principal" | "secundario";
}

export default function Button( {estilo}:ButtonProps ){
    return (
        <a 
            href="https://typebot.co/transtriangulo"
            target="_blank"
            className={
                `${estilo === "principal" ? 
                "bg-[#f97316] " : 
                "bg-[#074d2c]"} 
                mt-10 mx-auto py-4 px-7 w-fit text-2xl text-white font-bold rounded-md animate-bounce`
            }
        >
            Entre em contato
        </a>
    )
}