'use client'
import { useState } from "react"
import Link from "next/link";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);

    const handleIconClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav className="z-10">
            <div className="logo text-white text-[20px]">Manhattan Barbershop</div>

            <ul className={!isVisible ? '' : 'visible'}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/service">Service</Link></li>
                <li><Link href="/team">Team</Link></li>
            </ul>

            <div className='iconDensity' onClick={handleIconClick}>
                {isVisible ? (<DensityMediumIcon />) : (<CloseIcon />)}
            </div>
        </nav>
    )
}