import { TeamMember } from "../data/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="bg-white rounded-lg shadow p-6 text-center flex flex-col items-center">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#F8755B]/20 border-2 border-[#EF4036]/30 overflow-hidden flex items-center justify-center">
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={`${member.name} headshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl md:text-4xl font-bold text-[#EF4036]">
            {getInitials(member.name)}
          </span>
        )}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mt-5">{member.name}</h3>
      <p className="font-inter text-sm md:text-base text-black/60 mt-2">
        {member.role}
      </p>
    </article>
  );
}
