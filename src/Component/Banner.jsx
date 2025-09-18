export default function Banner() {

    return (
        <section
            className="relative bg-center bg-cover h-72 md:h-[750px] p-4 z-0"
            style={{ backgroundImage: "url('Mainbanner.jpg')" }} // place Mainbanner.jpg in /public
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-4xl mx-auto h-full flex items-center justify-center px-4">
                <div className="text-center mt-4">
                    <h1 className="text-gray-300 text-2xl md:text-5xl font-bold shadows-into-light-regular opacity-0 translate-y-6 animate-fade-up-slow">
                        Welcome To
                    </h1>

                    <h1 className="text-gray-300 font-bold shadows-into-light-regular opacity-0 translate-y-6 animate-fade-up-slow source-sans-3-normal text-4xl md:text-7xl mt-1 md:mt-5">
                        Come for RoadChild
                    </h1>

                    <p className="text-white/90 md:mt-4 text-lg md:text-[38px] shadows-into-light-regular md:leading-[3rem] opacity-0 translate-y-6 animate-fade-up-slow [animation-delay:.6s] font-semibold">
                        Gopalganj Science and Technology University
                    </p>

                    <a
                        href="#"
                        className="inline-block mt-5 px-5 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-blue-400 hover:text-white source-sans-3-normal opacity-0 translate-y-6 animate-fade-up-slow [animation-delay:1.2s] text-[10px] md:text-sm"
                    >
                        MORE
                    </a>
                </div>
            </div>
        </section>
    );


}