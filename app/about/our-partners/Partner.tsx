import Image from "next/image";
const Partner = ({title,image}:{title:string,image:string})=>{
    return(
        <section className="flex flex-col md:flex-row items-center">
           <Image src ={image} alt={`${title} logo`} width="1000" height="1000" className="h-[10em] w-auto object-cover"/>
            <p className="vidaloka text-[1em] md:text-[1.5em]">{title}</p>
        </section>
    )
}
export default Partner;