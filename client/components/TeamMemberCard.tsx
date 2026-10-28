import { TeamMember } from "../data/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type CardSize = "lg" | "md-lg" | "md" | "sm";

const sizeStyles: Record<
  CardSize,
  { card: string; avatar: string; initials: string; name: string; role: string }
> = {
  lg: {
    card: "p-5",
    avatar: "w-28 h-28 md:w-32 md:h-32",
    initials: "text-3xl md:text-4xl",
    name: "text-lg md:text-xl mt-4",
    role: "text-sm mt-1",
  },
  // md text with a larger avatar, so it fits the same card width as md.
  "md-lg": {
    card: "p-4",
    avatar: "w-24 h-24 md:w-28 md:h-28",
    initials: "text-2xl md:text-3xl",
    name: "text-base md:text-lg mt-4",
    role: "text-sm mt-1",
  },
  md: {
    card: "p-4",
    avatar: "w-20 h-20 md:w-24 md:h-24",
    initials: "text-2xl md:text-3xl",
    name: "text-base md:text-lg mt-4",
    role: "text-sm mt-1",
  },
  sm: {
    card: "p-3",
    avatar: "w-[4.5rem] h-[4.5rem] md:w-20 md:h-20",
    initials: "text-lg md:text-xl",
    name: "text-sm md:text-base mt-3",
    role: "text-xs md:text-sm mt-1",
  },
};

export default function TeamMemberCard({
  member,
  size = "lg",
  roleOnHover = false,
}: {
  member: TeamMember;
  size?: CardSize;
  roleOnHover?: boolean;
}) {
  const s = sizeStyles[size];
  return (
    <article
      className={`group relative h-full text-center flex flex-col items-center ${s.card}`}
    >
      <div
        className={`shrink-0 rounded-full bg-[#F8755B]/20 border-2 border-[#EF4036]/30 overflow-hidden flex items-center justify-center ${s.avatar}`}
      >
        {member.imageSrc ? (
          <img
            src={member.imageSrc}
            alt={`${member.name} headshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`font-bold text-[#EF4036] ${s.initials}`}>
            {getInitials(member.name)}
          </span>
        )}
      </div>
      <div className="relative">
        <h3 className={`font-bold ${s.name}`}>{member.name}</h3>
        {roleOnHover ? (
          // Overlays the space under the name on hover, so showing it never
          // resizes the card or squashes the avatar.
          <p
            className={`absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap font-inter text-black/60 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none ${s.role}`}
          >
            {member.role}
          </p>
        ) : (
          <p className={`font-inter text-black/60 ${s.role}`}>{member.role}</p>
        )}
      </div>
    </article>
  );
}
