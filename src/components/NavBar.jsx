import React from 'react'

function NavBar() {
    return (
        <div className="flex flex-col w-64 min-h-screen bg-green-medium">
            <div className="flex flex-col items-center justify-center h-64">
                <img src="https://i1.sndcdn.com/avatars-1izkebM3cqeF0hcO-uo8bjQ-t500x500.jpg" alt="giga-chad" className="rounded-full w-20 h-20" />
                <p className="text-white font-Outfit-Medium tracking-needed mt-4">GIGA CHAD</p>
            </div>
            <div className="flex flex-col items-start justify-start h-full py-5">
                <a href="/" className="font-Outfit-Medium tracking-needed text-white hover:bg-green-light  py-2 px-6 w-full">
                    Home
                </a>
                <a href="/" className="font-Outfit-Medium tracking-needed text-white hover:bg-green-light py-2 px-6 w-full">
                    Manage Rooms
                </a>
                <a href="/" className="font-Outfit-Medium tracking-needed text-white hover:bg-green-light py-2 px-6 w-full">
                    University Exams
                </a>
                <a href="/" className="font-Outfit-Medium tracking-needed text-white hover:bg-green-light py-2 px-6 w-full">
                    Seat Arrangement
                </a>
                <div className="flex-grow"></div> {/*adds a spacer to push logout to the bottom*/}
                <a href="/" className="font-Outfit-Medium tracking-needed text-white hover:bg-green-light py-2 px-6 w-full">
                    Log Out
                </a>
            </div>
        </div>
    );
}

export default NavBar;