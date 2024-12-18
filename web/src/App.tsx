import { useEffect, useState } from "react"
import "./App.css"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import { Listing } from "../../api/src/listing/entities/listing.entity"
import PostAnnouncement from "./components/PostAnn"

export default function App() {
    const [listings, setListings] = useState<Listing[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/listing")
            .then((res) => res.json())
            .then((listings) => setListings(listings))
    }, [])

    return (
        <main>
            <Navbar></Navbar>
            <div className="p-4">
                <h1 className="text-4xl font-bold">Announcements</h1>
                <h2 className="text-gray-300 font-thin">Listings near you</h2>
                <hr className="mt-2 select-none"></hr>
            </div>
            <div className="pl-4 pr-4 pb-4 gap-1 flex">
                <Searchbar></Searchbar>
                <PostAnnouncement></PostAnnouncement>
            </div>
            <main className="pl-4 pr-4 flex flex-col gap-3">
                {listings.map((v, i) => (
                    <Announcement
                        title={v.title}
                        date={v.date}
                        author={v.author.name}
                        text={v.content}
                        key={i}
                    ></Announcement>
                ))}
            </main>
        </main>
    )
}
