import menu from "../assets/menu.svg"

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <img className="text-white h-[40px]" src={menu}></img>
            <ul className="text-white text-lg">
                <li>Contact</li>
                <li>Info</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}
