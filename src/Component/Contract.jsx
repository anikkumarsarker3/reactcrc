export default function Contract() {
    return (<>
        <div className="bg-gray-200 p-32">

            <h3 className="text-center text-4xl font-semibold mb-4">Contract</h3>
            <section className="flex flex-col md:flex-row justify-around items-center mt-3">
                {/* Left: Contact form */}
                <div>

                    <div className="mt-3.5 w-3/4 md:w-full mx-auto">
                        <form action="">
                            {/* Name & Email */}
                            <div className="flex flex-col md:flex-row gap-2.5 w-full">
                                <input
                                    className="border p-1 border-gray-400 focus:outline-none focus:border-red-300"
                                    type="text"
                                    placeholder="Name"
                                />
                                <input
                                    className="border p-1 border-gray-400 focus:outline-none focus:border-red-300"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Subject */}
                            <input
                                className="border p-1 border-gray-400 focus:outline-none  w-full my-3 focus:border-red-300"
                                type="text"
                                placeholder="Subject"
                            />
                            <br />

                            {/* Message */}
                            <textarea
                                className="border p-1 border-gray-400 focus:outline-none w-full mb-3 focus:border-red-300"
                                cols="30"
                                rows="10"
                                placeholder="Your message"
                            ></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="btn bg-blue-400 px-3 border text-white"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right: Contact info */}
                <div>
                    <div className="border border-gray-400 p-14 mt-3.5 md:mt-0">
                        <div className="mt-3.5">
                            <div className="flex gap-2 items-center">
                                <span className="bg-purple-400 rounded-full p-2">
                                    <i className="fa-solid fa-location-dot"></i>
                                </span>
                                <p className="text-gray-600">Gopalganj Science and Technology University Campus</p>
                            </div>

                            <div className="flex gap-2 items-center my-3">
                                <span className="bg-purple-400 rounded-full p-2">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <p className="text-gray-600"><a href="mailto:crcgstu@gmail.com">crcgstu@gmail.com</a></p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <span className="bg-purple-400 rounded-full p-2">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <p className="text-gray-600">+8801710198405</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>);
}