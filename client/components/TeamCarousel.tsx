import { useEffect, useRef, useState } from "react";
import { TeamMember } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

const AUTO_SPEED = 0.03; // px per ms
const FRICTION = 0.95; // per-frame velocity decay after an arrow click
const FADE =
  "linear-gradient(to right, transparent, black 25%, black 75%, transparent)";

const layouts = {
  sm: { spacing: 150, item: "w-32", height: "h-48" },
};

// An endless row of profiles that scrolls on its own, pauses on hover and
// can be stepped with arrow buttons. The row fades out toward both edges;
// titles show on hover.
export default function TeamCarousel({
  members,
  size = "sm",
}: {
  members: TeamMember[];
  size?: keyof typeof layouts;
}) {
  const { spacing, item, height } = layouts[size];
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (Math.abs(velocityRef.current) > 0.05) {
        offsetRef.current += velocityRef.current;
        velocityRef.current *= FRICTION;
      } else if (!reduceMotion && !hoverRef.current) {
        offsetRef.current -= AUTO_SPEED * dt;
      }
      setOffset(offsetRef.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Glides about one profile over, easing out.
  const scrollBy = (px: number) => {
    velocityRef.current = px * (1 - FRICTION);
  };

  const total = members.length * spacing;

  return (
    <div className="relative max-w-[1016px] mx-auto">
      <div
        className={`relative ${height} overflow-hidden`}
        style={{ maskImage: FADE, WebkitMaskImage: FADE }}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerLeave={() => (hoverRef.current = false)}
      >
        {members.map((member, i) => {
          // Wrap each profile into [-total/2, total/2) around the centre.
          const x =
            ((((i * spacing + offset) % total) + total * 1.5) % total) -
            total / 2;
          return (
            <div
              key={member.name}
              className={`absolute left-1/2 top-4 ${item}`}
              style={{ transform: `translateX(-50%) translateX(${x}px)` }}
              aria-hidden
            >
              <TeamMemberCard member={member} size={size} roleOnHover />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3 mt-2">
        <button
          type="button"
          onClick={() => scrollBy(spacing)}
          className="w-10 h-10 rounded-full border border-black/15 hover:border-[#EF4036] hover:text-[#EF4036] transition-colors"
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBy(-spacing)}
          className="w-10 h-10 rounded-full border border-black/15 hover:border-[#EF4036] hover:text-[#EF4036] transition-colors"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      {/* The row only shows some people at a time, so keep a full list for screen readers. */}
      <ul className="sr-only">
        {members.map((member) => (
          <li key={member.name}>
            {member.name}, {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
