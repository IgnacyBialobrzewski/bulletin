"use client"
import { useState } from "react"
import menu from "../assets/menu.svg"
import Info from "./Info"
import Image from "next/image"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <Image
                    className="text-white mb-1 cursor-pointer"
                    src={menu}
                    alt="Menu"
                    width={40}
                    height={40}
                    onClick={toggleMenu}
                />
            </div>
            <ul className={`text-white text-lg gap-1 mt-2 ${isOpen ? "block" : "hidden"}`}>
                <li>
                    <Info></Info>
                </li>
                <li>Help</li>
            </ul>
        </nav>
    )
}
