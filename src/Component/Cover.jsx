export default function Cover() {
    return (
        <>
            <div className="w-10/12 mx-auto">

                <section>
                    <div class="py-5">
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src="group-shaidminar.jpg" class="w-full rounded-2xl" />
                                <div class="absolute inset-0 bg-gray-800/40"></div>
                                <p class="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                                    আপনার লেখা এখানে
                                </p>

                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>

                            <div id="slide2" class="carousel-item relative w-full">
                                <img src="st-1.jpg" class="w-full rounded-2xl" />
                                <div class="absolute inset-0 bg-gray-800/40"></div>
                                <p class="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                                    আপনার লেখা এখানে
                                </p>

                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src="ifter.jpg" class="w-full  rounded-2xl" />
                                <div class="absolute inset-0 bg-gray-800/40"></div>
                                <p class="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                                    আপনার লেখা এখানে
                                </p>

                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide4" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full">
                                <img src="madical camp.jpg" class="w-full  rounded-2xl md:h-[550px]" />
                                <div class="absolute inset-0 bg-gray-800/40"></div>
                                <p class="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                                    আপনার লেখা এখানে
                                </p>

                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide3" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

        </>
    )
} 