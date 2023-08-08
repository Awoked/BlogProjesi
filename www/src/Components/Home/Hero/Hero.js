import React from "react";
import RoundedButton from "../../Buttons/RoundedButton";

const Hero = () => {
    return (
        <section className="py-24 bg-yellow-500 border-b border-black">
            <div className="container mx-auto h-full">
                <div className="wrapper flex items-center h-full">
                    <div className="inner flex flex-col gap-12 h-2/4">
                        <div className="title flex flex-col gap-8">
                            <h1 className="text-6xl font-bold">
                                Lorem ipsum.
                            </h1>
                            <h4 className="text-2xl font-semibold w-2/4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit corporis expedita alias, excepturi incidunt?
                            </h4>
                        </div>
                        <div className="flex">
                            <RoundedButton
                                To={"/"}
                                Text={"Start Reading"}
                                ClassProp={"font-bold py-3 px-10 text-xl"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;