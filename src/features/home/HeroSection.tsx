const HeroSection = () => {
    return (
        <section className="hero-section text-center mt-32 flex flex-col">
            <h1 className="text-4xl font-extrabold leading-[1.15 text-black] sm:text-6xl">Launch Your Sales Success
                <br />

                <span className="bg-gradient-to-r from-[#7D50E1] via-pink-500 to-[#7D50E1] bg-clip-text text-transparent" >In Minutes Not Days</span>

            </h1>
            <h2 className="mt-5 text-gray-600 sm:text-xl">Empower your sales team with our CRM to streamline operations,<br /> close deals faster, and drive growth effortlessly.</h2>
            <div className="mx-auto mt-5 flex max-w-fit space-x-4">
                <a href="" className="rounded-full mx-auto min-w-fit border px-5 py-2
                text-sm font-medium shadow-sm border-black bg-black text-white
                hover:ring-gray-400 hover:ring-2">Get Started</a>
                <a href="" className="rounded-full mx-auto min-w-fit border px-5 py-2
                text-sm font-medium shadow-sm border-gray-200 bg-white text-black
                hover:ring-gray-300 hover:ring-2">Learn More</a>
            </div>
            <div className=" mt-5 items-center justify-center">
                <img className="mx-auto h-[300px] sm:h-[500px]" src="src/assets/demo.png" alt="demo-Image" />
            </div>

        </section>
    )
}

export default HeroSection 