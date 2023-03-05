import React from 'react'

const About: React.FC = (): JSX.Element => {
  return (
    <div className = "ABOUT_WRAPPER">
        <div className="IMAGE bg-about-hero bg-cover w-full h-52 flex justify-center items-center"></div>
        <div className="Text bg-orange-100 h-80 w-full flex justify-center items-center">
            <div className="FLEX_TEXT_WRAPPER flex flex-col w-10/12 h-full justify-center">
                <h1 className = "text-xl font-bold">Don't squeeze in a sedan when you could relax in a van</h1>
                <br/><p className = "text-md">
                    Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p><br/>
                <p className = "text-md">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
        </div>
        <div className="Text bg-orange-100 h-52 w-full flex justify-center items-center">
            <div className="FLEX_TEXT_WRAPPER flex flex-col w-10/12 h-full justify-center">
                <div className="FLEX-DESTINATION bg-orange-300 w-full h-40 rounded-md flex flex-col gap-5 justify-center pl-6">
                    <h1 className = "font-bold text-xl">Your destination is waiting. Your van is ready.</h1>
                    <button className = "rounded bg-black text-white text-md p-2 w-40">Explore our vans</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About