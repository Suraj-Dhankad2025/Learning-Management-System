'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
interface props{

}

const Page:FC<props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    return (
        <div>
           <Heading
           title="TechSpot"
            description="TechSpot is a video learning platform"
            keywords="TechSpot, Tech, Spot, TechSpot.com Coding, Programming, Learning, MERN"
           />
           <Header
           open={open}
           setOpen={setOpen}
           activeItem={activeItem}
           ></Header>
        </div>
    )
}
export default Page;