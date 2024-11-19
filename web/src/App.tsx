import "./App.css"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"

export default function App() {
    return (
        <main>
            <Navbar></Navbar>
            <div className="p-4">
                <h1 className="text-4xl font-bold">Announcements</h1>
                <h2 className="text-gray-300 font-thin">Listings near you</h2>
                <hr className="mt-2 select-none"></hr>
            </div>
            <div className="pl-4 pr-4 pb-4 flex">
                <Searchbar></Searchbar>
            </div>
            <main className="pl-4 pr-4 flex flex-col gap-3">
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbyasa hsd sgidsaiduwsahgi sagidsg iysagdi sagdysag sagidsgiudge"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
                <Announcement title="Niggers for sale" date={new Date().toLocaleDateString()} author="John Johnson" text="I have a bunch of niggers for sale and if you want to buy a nigger DM ok kthxbye sdhasdjhgsaujsd"></Announcement>
            </main>
        </main>
    )
}
