import { FaLayerGroup } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { PiChatsCircle } from "react-icons/pi";
import { BsLink45Deg } from "react-icons/bs";
import { LiaCalendarSolid } from "react-icons/lia";
import { useEffect, useState } from "react";


const Card = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data.user))
    }, [])

    const { client, user1, img1, img2, img3, img4, description, value, number, message, links, date } = data;


    return (
        <div>
            <div className="card card-compact w-96 md:w-[420px]  bg-base-100 shadow-xl mb-6">
                <figure>
                    <div className='flex gap-10 '>
                        <div className='flex gap-3 items-center'>
                            <img src={img1} className='rounded-xl h-8 w-8' alt="Shoes" />
                            <p>{client}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={img2} className='rounded-xl h-8 w-8' alt="Shoes" />
                            <p>{user1}</p>
                        </div>
                    </div>
                </figure>

                <div className="card-body">
                    {/* <h2 className="card-title">Shoes!</h2> */}

                    <div className='flex gap-3'>
                        <div className="flex gap-1 items-center text-xs">
                            <FaLayerGroup />
                            <p>{description}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MdShoppingBag />
                            <p>{value}</p>
                        </div>

                    </div>

                    <div className="card-actions justify-start items-center gap-3">
                        <img src={img3} className='rounded-xl h-8 w-8' alt="" />
                        <img src={img4} className='rounded-xl h-8 w-8' alt="" />
                        <span className="bg-base-200 rounded-full ">{number}</span>
                        <div className="flex items-center">
                            <PiChatsCircle />
                            <span>{message}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsLink45Deg />
                            <span>{links}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <LiaCalendarSolid />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Card;