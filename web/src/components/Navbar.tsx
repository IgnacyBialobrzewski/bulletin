import menu from "../assets/menu.svg"

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <img className="text-white h-[40px] mb-1" src={menu}></img>
            <ul className="text-white text-lg flex flex-col flex-wrap gap-1">
                <li><a href="" className="no-underline hover:underline ml-2">Contact</a></li>
                <li><a href="" className="no-underline hover:underline ml-2">Info</a></li>
                <li><a href="" className="no-underline hover:underline ml-2">Help</a></li>
            </ul>
        </nav>
    )
}