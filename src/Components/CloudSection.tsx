import { MdDateRange, MdGroups, MdBookOnline} from "react-icons/md";


interface CloudData{
    icon: JSX.Element;
    title: string;
    description: string;
    chech: string;
}

const currentData: CloudData[] = [
    {
        icon: <MdBookOnline />,
        title: "Online Billing Invoicing & Contracts",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!",
        chech: "one"
    },
    {
        icon: <MdDateRange />,
        title: "Easy Scheduling & Attendance Tracking",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!",
        chech: "two"
    },
    {
        icon: < MdGroups />,
        title: "Customer Tracking",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!",
        chech: "three"
    }
] 


export default function CloudSection() {
    return(
        <div className="py-16 px-5">
             <h3 className="text-center text-3xl font-semibold mb-2 text-[#402259]">ALL-In-One <span className="text-[#00cdb8]">Cloud Software</span></h3>
             <p className="text-center leading-6 w-full m-auto lg-w-[70%] md:w-[80%] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae soluta delectus esse fuga, omnis magni aspernatur, labore excepturi, facilis hic reiciendis debitis atque perspiciatis voluptatibus adipisci obcaecati cumque amet sequi!</p>
             <div className="mt-11 grid gap-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {currentData.map((curr, index) => (
                        <div key={index} className="text-center p-2 custome-shadow rounded-xl pt-3 px-5 pb-5">
                            <div className={`w-11 h-11 text-white rounded-full flex justify-center items-center text-3xl m-auto mb-4 custome-mt  ${curr.chech === `one` ? `bg-purple-800` : curr.chech === `two` ? `bg-[#00cdb8]` : `bg-cyan-500` } `}>{curr.icon}</div>
                            <h3 className="text-2xl mb-3 pt-5 text-[#35164e] font-semibold lg:w-50 m-auto w-full">{curr.title}</h3>
                            <span className="text-sm">{curr.description}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}

