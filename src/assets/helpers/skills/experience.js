
import React from 'react'
function Experience() {
  
    
    const experienceArr = [
        {
            "title": "Full Stack Teacher Assistant",
            "institution": "at Henry Bootcamp",
            "date": "Aug. 2021 - Nov. 2021"
        },
        {
            "title": "Ecommerce Administration",
            "institution": "at Jet Cases",
            "date": "May. 2019 - Jul. 2021"
        },
        {
            "title": "Product Supervisor",
            "institution": "at Klalutex",
            "date": "Aug. 2019 - May. 2020"
        },
    ]

    return (
        <div className="mb-4">
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-myDarkGray relative'>
                Experience
            </h3>
            <div className='flex gap-5 mx-2 '>
            {experienceArr.map((education, index) => {
                return (
                    <div key={index} className="mt-2 flex flex-col margin-auto bg-white p-3 rounded-xl w-2/3 h-64 relative shadow-lg">
                        <h2 className='text-myDarkGray font-bold text-2xl '>{education.title}</h2>
                        <p className='text-myYellow border-b-2 mb-2 border-myGray text-lg'>{education.institution}</p>
                        <p className='text-myDarkGray font-normal text-lg'>{education.date}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Experience
