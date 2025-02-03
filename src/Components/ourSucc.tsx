
interface SuccessData {
    id: number;
    nums: string;
    title: string
}



 const OurSucc: React.FC = () => {

    const currentData: SuccessData[] = [
        {
            id: 1,
            nums: "15K+",
            title: "Students"
        },
        {
            id: 2,
            nums: "75%",
            title: "Total Success"
        }, 
        {
            id: 3, 
            nums: "35",
            title: "Main Questions"
        }, 
        {
            id: 4,
            nums: "26",
            title: "Chief"
        },
        {
            id: 5,
            nums: "16",
            title: "Years of experience"
        }
    ]
    return(
        <div className="py-16">
            <h3 className="text-black text-center text-3xl font-semibold mb-2">Our Success</h3>
            <p className="text-center leading-6 w-full m-auto lg-w-[70%] md:w-[80%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!</p>
            <div className="mt-11 grid gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {currentData.map((curr) => (
                        <div key={curr.id} className="text-center p-2">
                            <span className="text-5xl mb-2  block bg-gradient-to-r from-[#1a5d56] to-[#00cdb8] bg-clip-text text-transparent">{curr.nums}</span>
                            <span className="font-semibold">{curr.title}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}
export default OurSucc;