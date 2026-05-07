import Image from "next/image";
import { Icon } from "@iconify/react";

const members = [
  {
    name: "Carlos",
    roles: ["Web Designer", "Mobile Developer"],
    image: "/carlos_img.jpg",
    github: "https://github.com/ChsSilva01",
    linkedin: "https://www.linkedin.com/in/carlos-silva-33155a324/",
  },
  {
    name: "Heloísa",
    roles: ["Backend", "Database"],
    image: "/heloisa_img.jpg",
    github: "https://github.com/helobizz",
    linkedin: "https://www.linkedin.com/in/heloisa-vale/",
  },
  {
    name: "Raissa",
    roles: ["Backend", "Database"],
    image: "/raissa_img.jpg",
    github: "https://github.com/RaissaSouza06",
    linkedin: "https://www.linkedin.com/in/raiosouza/",
  },
  {
    name: "Renan",
    roles: ["Mobile Designer", "Web Developer"],
    image: "/renan_img.jpg",
    github: "https://github.com/renanzanettio",
    linkedin: "https://www.linkedin.com/in/renan-zanetti/",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl p-8"
          style={{ background: "#0d0f24", border: "1px solid #1e2040" }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 gradient-text">
                NOSSA EQUIPE
              </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Conheça quem faz acontecer
            </h2>
          </div>
          <span className="text-xs text-slate-400 border border-slate-700 px-3 py-1 rounded-full">
            Membros
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="aspect-7/8 rounded-xl p-4 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105"
              style={{ background: "#111327", border: "1px solid #1e2040" }}
            >
              <div className="w-30 h-30 rounded-full overflow-hidden mb-3 border-2 border-blue-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{member.name}</h3>
              {member.roles.map((role) => (
                <p key={role} className="text-xs text-slate-400">
                  {role}
                </p>
              ))}
              <div className="flex gap-2 mt-3">
                <a
                  href={member.github}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:github" width={24} />
                </a>
                <a
                  href={member.linkedin}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:linkedin" width={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section >
  );
}
