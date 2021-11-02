import React from 'react'
function Education() {
    const educationArr = [
       {
           "title": "Full Stack Developer",
           "institution": "at Henry Bootcamp",
           "date": "Jul. 2021 - Nov. 2021"
       },
       {
           "title": "Bachelor's Degree in Administration",
           "institution": "at Buenos Aires university (UBA)",
           "date": "Aug. 2019 - Jun. 2021"
       },
       {
           "title": "Bachelor's in Comunication",
           "institution": "at San Ladislao College",
           "date": "Mar. 2005 - Dic. 2018"
       },
    ]
    return (
        <div className="mb-4">
            <h3 className='title-font lg:text-4xl sm:text-2xl text-3xl mb-4 font-semibold text-myDarkGray relative'>
                Education
            </h3>
            <div className='flex gap-5 mx-2 '>
            {educationArr.map((education, index) => {
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

export default Education
