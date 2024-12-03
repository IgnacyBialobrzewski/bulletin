import { useState } from 'react';
import menu from "../assets/menu.svg";
import Info from './Info';
import Help from './Help';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <img className="text-white h-[40px] mb-1 cursor-pointer" src={menu} alt="Menu" onClick={toggleMenu}/>
            </div>
            <ul className={`text-white text-lg gap-1 mt-2 ${isOpen ? 'block' : 'hidden'}`}>
                <li><Info></Info></li>
                <li><Help></Help></li>
            </ul>
        </nav>
    );
}
