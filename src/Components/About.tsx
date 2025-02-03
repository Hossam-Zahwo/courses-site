import Image from "next/image";
interface AboutData{
    id: number;
    image: string;
    title: string;
    btnText: string
}


const currentData: AboutData[] = [
    {
        id: 1,
        image: "/about-img-1.png",
        title: "For Instructors",
        btnText: "Start a class today"
    },
    {
        id: 2,
        image: "/about-img-2.png",
        title: "For Students",
        btnText: "Enter access code"
    }
]



const About: React.FC = () => {
    return (
        <div className="py-16 px-5">
        <h3 className="text-center text-3xl font-semibold mb-2 text-[#402259]">What is <span className="text-[#00cdb8] uppercase">Totc</span></h3>
        <p className="text-center leading-7 w-full m-auto lg-w-[70%] md:w-[80%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!</p>
        <div className="mt-11 grid lg:gap-14 md:gap-14 gap-8 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-10 md:px-5 px-4 ">
            {currentData.map((ele) => (
            <div key={ele.id} className="relative overflow-hidden rounded-xl">
                <Image
                  src={ele.image}
                  alt="landing image"
                  width={300}
                  height={500}
                  loading="lazy"
                  className="w-full max-w-full"
                />
                <div className="w-full h-full bg-[#0000001f] absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-2/4 flex flex-col justify-center items-center">
                   <h4 className="uppercase font-semibold text-xl text-white mb-3">{ele.title}</h4>
                   <button className="w-3/4 lg:w-3/6 md:w-3/6 py-2 px-3 rounded-3xl border-2 text-lg border-[#eee] transition cursor-pointer hover:bg-blue-400 hover:border-blue-400 text-white ">{ele.btnText}</button>
                </div>
            </div>
            ))}
        </div>
   </div>
    )
}
export default About;