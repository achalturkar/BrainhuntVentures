
import Link from "next/link";

const JobTable = () => {

  const jobs = [
    {
      title: "ITI Technician",
      description: "Responsible for operating and maintaining industrial machinery",
      position: 80,
      experience: "Fresher / 1 Year",
      qualification: "ITI – All Trades",
      location: "Nagpur",
    },
    {
      title: "Junior Engineer - Electrical",
      description: "Assist in electrical system installation, inspection, and troubleshooting",
      position: 25,
      experience: "0–2 Years",
      qualification: "Diploma / BE in Electrical Engineering",
      location: "Sambhajinagar",
    },
    {
      title: "Junior Engineer - Mechanical",
      description: "Support mechanical maintenance and production line tasks",
      position: 40,
      experience: "0–2 Years",
      qualification: "Diploma / BE in Mechanical Engineering",
      location: "Nagpur",
    },
    {
      title: "Senior Engineer - Automation",
      description: "Lead industrial automation projects and manage PLC/SCADA systems",
      position: 5,
      experience: "3–5 Years",
      qualification: "BE / BTech in EEE/ECE/Instrumentation/Automation",
      location: "Pune",
    },
    {
      title: "Automation Trainee",
      description: "Work on automation tools, PLC programming, and robotics",
      position: 10,
      experience: "Fresher",
      qualification: "Diploma / BE in Electronics / Electrical / Instrumentation",
      location: "Nagpur",
    }
  ]


  return (
    <section className="p-2">
      <div className="overflow-x-auto">

        <table className="w-full border-collapse border shadow-lg">

          <thead className="">
            <tr className="border  bg-blue-200">
              <th className="border p-2 md:p-4">Job Title </th>
              <th className="border p-2 md:p-4">Job Description </th>
              <th className="border p-2 md:p-4">No. Position </th>
              <th className="border p-2 md:p-4">Experience </th>
              <th className="border p-2 md:p-4">Qualification </th>
              <th className="border p-2 md:p-4">Location </th>
              <th className="border p-2 md:p-4">Apply </th>

            </tr>

          </thead>


          <tbody className="border">
            {jobs.map((job, idx) => (

              <tr key={idx} className="border p-2">

                <td className="border p-2 ">{job.title}</td>
                <td className="border p-2">{job.description}</td>
                <td className="border p-2">{job.position}</td>
                <td className="border p-2">{job.experience}</td>
                <td className="border p-2">{job.qualification}</td>
                <td className="border p-2">{job.location}</td>
                <td className="border p-2"><Link href="/contact"><button className="p-1 bg-blue-900 text-sm rounded-md  text-white hover:cursor-pointer">Apply Now</button></Link></td>


              </tr>
            ))}


          </tbody>



        </table>
      </div>



    </section>
  )
}

export default JobTable;