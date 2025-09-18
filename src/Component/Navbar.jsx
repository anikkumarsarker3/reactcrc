const Navbar = () => {
    return (<div className="navbar shadow-sm flex justify-around z-10 bg-green-200 w-12/12 mx-auto">
        <div className="flex justify-center items-center">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                    <li><a>Home</a></li>
                    <li><a>CRC Schoool</a></li>
                    <li><a>Program</a></li>
                    <li><a>Members</a></li>
                    <li><a>Contract</a></li>
                    <li>
                        <a>About Us</a>
                        <ul className="p-2 z-10">
                            <li><a>Mission</a></li>
                            <li><a>History</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            <a className=" text-xl flex justify-center items-center gap-3 font-semibold"> <img className="w-12 rounded-full" src="../../public/logo.jpg" alt="" /> <span>Come for RoadChild, GSTU</span></a>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
                <li><a>Home</a></li>
                <li><a>CRC Schoool</a></li>
                <li><a>Program</a></li>
                <li><a>Members</a></li>
                <li><a>Contract</a></li>
                <li>
                    <details>
                        <summary>About Us</summary>
                        <ul className="p-2 z-10">
                            <li><a>Mission</a></li>
                            <li><a>History</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>)
}
export default Navbar