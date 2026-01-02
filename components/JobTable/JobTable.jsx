import Link from "next/link";

const JobTable = () => {

  const jobs = [
    {
      title: "Production Manager",
      description: "Oversee daily manufacturing operations and ensure production targets are met",
      position: 20,
      experience: "7–10 Years",
      qualification: "Diploma / B.Tech in Mechanical / Production / Electrical",
      location: "Pune / Nagpur / Chennai",
    },
    {
      title: "Quality Control Engineer",
      description: "Implement quality standards, conduct inspections, and improve product reliability",
      position: 30,
      experience: "4–6 Years",
      qualification: "Diploma / B.Tech in Mechanical / Production / Electrical",
      location: "Sambhajinagar / Nagpur / Coimbatore ",
    },
    {
      title: "Maintenance Supervisor",
      description: "Manage maintenance team, ensure machinery uptime, and optimize operations",
      position: 30,
      experience: "4–7 Years",
      qualification: "Diploma / B.Tech in Mechanical / Production / Electrical",
      location: "Nagpur / Pune / Indore ",
    },
    {
      title: "Industrial Automation Engineer",
      description: "Lead automation projects, PLC programming, and SCADA system implementation",
      position: 40,
      experience: "3–6 Years",
      qualification: "Diploma / B.Tech in Mechanical / Production / Electrical",
      location: "Pune / Mumbai / Amravati",
    },
    {
      title: "Supply Chain Manager",
      description: "Manage procurement, logistics, and material planning for manufacturing units",
      position: 30,
      experience: "5–8 Years",
      qualification: "Diploma / B.Tech in Mechanical / Electrical ",
      location: "Nagpur / Noida / kolkata",
    },
    {
      title: "Process Engineer",
      description: "Optimize manufacturing processes, reduce waste, and improve efficiency",
      position: 20,
      experience: "5–7 Years",
      qualification: "Diploma / B.Tech in Mechanical / Electrical ",
      location: "Nagpur / Pune / Hyderabad",
    },
    {
      title: "Production Supervisor",
      description: "Supervise production line, manage staff, and ensure target completion",
      position: 40,
      experience: "2–5 Years",
      qualification: "Diploma / B.Tech in Mechanical / Electrical ",
      location: "Nagpur / Sambhajinagar / Indore / Pune",
    },
    {
      title: "Maintenance Engineer",
      description: "Plan and execute preventive and breakdown maintenance for machinery",
      position: 70,
      experience: "2–8 Years",
      qualification: "Diploma / B.Tech in Mechanical / Electrical ",
      location: "Nagpur / Pune / Indore / Hyderabad /Chennai",
    }
  ];

  return (
    <section className="p-2">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border shadow-lg">
          <thead className="bg-blue-200">
            <tr className="border">
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
                <td className="border p-2">{job.title}</td>
                <td className="border p-2">{job.description}</td>
                <td className="border p-2">{job.position}</td>
                <td className="border p-2">{job.experience}</td>
                <td className="border p-2">{job.qualification}</td>
                <td className="border p-2">{job.location}</td>
                <td className="border p-2">
                  <Link href="/contact">
                    <button className="p-1 bg-blue-900 text-sm rounded-md text-white hover:cursor-pointer">
                      Apply Now
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default JobTable;

