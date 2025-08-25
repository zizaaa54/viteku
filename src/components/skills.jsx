import { FaNodeJs, FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiExpress, SiTypescript, SiTailwindcss, SiVite, SiPhp, SiJson, SiDart, SiFlutter, SiPrisma, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <div className="skills flex flex-wrap gap-4 mt-6">
      <FaNodeJs className="bg-black text-green-500 p-2 rounded-xl text-4xl" />
      <SiExpress className="bg-black text-white p-2 rounded-xl text-4xl" />
      <FaLaravel className="bg-black text-red-500 p-2 rounded-xl text-4xl" />
      <FaHtml5 className="bg-black text-orange-500 p-2 rounded-xl text-4xl" />
      <FaCss3Alt className="bg-black text-blue-500 p-2 rounded-xl text-4xl" />
      <FaJs className="bg-black text-yellow-400 p-2 rounded-xl text-4xl" />
      <SiTypescript className="bg-black text-blue-400 p-2 rounded-xl text-4xl" />
      <SiTailwindcss className="bg-black text-cyan-400 p-2 rounded-xl text-4xl" />
      <FaGithub className="bg-black text-white p-2 rounded-xl text-4xl" />
      <SiVite className="bg-black text-purple-400 p-2 rounded-xl text-4xl" />
      <SiPhp className="bg-black text-indigo-500 p-2 rounded-xl text-4xl" />
      <SiJson className="bg-black text-gray-300 p-2 rounded-xl text-4xl" />
      <SiDart className="bg-black text-blue-500 p-2 rounded-xl text-4xl" />
      <SiFlutter className="bg-black text-sky-400 p-2 rounded-xl text-4xl" />
      <SiPrisma className="bg-black text-white p-2 rounded-xl text-4xl" />
      <SiMongodb className="bg-black text-green-400 p-2 rounded-xl text-4xl" />
    </div>
  )
}

export default Skills