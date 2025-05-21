


const Service = ({ Services }) => {

    return (
        <div className="grid grid-col-1 md:grid-cols-3 gap-3 p-4">
            {Services.map((each, index) => (
                <div key={index} className="p-4 flex flex-col text-center justify-center items-center bg-gray-50 rounded-xl shadow-md hover:shadow-lg">
                    <div className="p-2 text-4xl hover h-3/11 mb-1">{each.icon}</div>
                    <h1 className="text-xl font-extrabold text-blue-900 h-3/11 mb-1">{each.head}</h1>
                    <p className="text-md font-md h-5/11">{each.desc}</p>

                </div>

            ))
            }

        </div>
    )

}
export default Service;