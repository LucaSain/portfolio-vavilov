import Image from "next/image";

export default function TeamSection() {
  return (
    <>
      <div className="h-full w-full p-6 py-10 pb-0  bg-gradient-to-b from-base-100 to-accent via-base-100">
        <h1 className="text-5xl font-bold py-2">
          The magic, it&apos;s all from over here.
        </h1>
        <p className="text-xl mt-2">Meet the authors behind Alacrity:</p>

        <div className="p-4 py-10 rounded-xl grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {Array.from(Array(6).keys()).map((teamMember) => (
            <TeamMemberCard key={teamMember} teamMember={teamMembers[0]} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center pb-10">
          <div className="btn btn-neutral">Meet all of us</div>
        </div>
      </div>
    </>
  );
}

interface TeamMember {
  name: string;
  roles: Array<JSX.Element>;
  symbol: { viewBox: string; paths: Array<string> };
  image: string;
}

const teamMembers: Array<TeamMember> = [
  {
    name: "Vavilov Iris",
    roles: [
      <div key="vavilov1" className="badge badge-primary">
        Founder
      </div>,
      <div key="vavilov2" className="badge badge-accent">
        CEO
      </div>,
    ],
    symbol: {
      viewBox: "0 0 400 400",
      paths: [
        "m217.79 169.05q25.199 0 38.169-8.5231 13.155-8.5231 17.416-20.752 4.4448-12.229 5.7425-40.763 1.2972-31.684 14.082-47.062 12.97-15.564 42.43-15.564v7.0409q-10.561 0.74103-14.452 8.3378-3.705 7.4114-3.705 31.684 0 35.575-7.5966 55.03-7.4111 19.27-30.016 31.313-22.605 12.043-62.071 12.97v58.735q0 21.678 2.4074 28.163 2.5953 6.2997 10.561 10.191 8.1528 3.8911 25.014 3.8911v6.8556h-111.54v-6.8556q16.49-0.18797 24.458-3.5206 8.1526-3.5206 10.747-10.006 2.7772-6.6702 2.7772-28.719v-58.735q-39.836-0.9259-61.885-12.785-22.049-11.858-30.016-30.943-7.7816-19.27-7.7816-55.771 0-23.346-3.5229-30.943-3.5229-7.7821-14.637-8.8938v-7.0408q18.714 0.36974 30.201 5.9292 11.488 5.5585 18.343 19.64 7.0408 14.082 7.9673 37.057 1.2972 28.349 5.3724 40.577 4.2629 12.229 17.602 20.937 13.341 8.5231 38.354 8.5231v-80.784q0-21.678-2.5953-27.978-2.4074-6.485-10.376-10.191-7.9671-3.7055-25.014-3.891v-6.8556h111.54v6.8556q-17.046 0.18798-25.014 3.891-7.9671 3.5208-10.561 10.006-2.4074 6.4851-2.4074 28.163z",
      ],
    },
    image: "/iris.png",
  },
];

const TeamMemberCard = (props: { teamMember: TeamMember }) => {
  return (
    <div className="h-full w-full rounded-md max-w-full max-h-full overflow-hidden bg-base-300 relative min-h-64 shadow-xl border-primary border-opacity-30 hover:-translate-y-1 transition-all duration-300 border">
      <div className="absolute max-w-[100%] max-h-[100%] h-full w-full overflow-hidden flex justify-center">
        <svg
          viewBox={props.teamMember.symbol.viewBox}
          className="h-full scale-[2] absolute -bottom-24 opacity-30 "
        >
          <g
            className="h-full w-full"
            style={{
              fill: "none",
              stroke: "#ffffff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 20,
              strokeWidth: 4,
            }}
          >
            {props.teamMember.symbol.paths.map((path, i) => (
              <path key={i} d={path} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex p-8 items-center  h-full w-full max-h-full max-w-full overflow-hidden ">
        <div>
          <div className="text-3xl font-semibold">{props.teamMember.name}</div>
          <div className="flex flex-row gap-3">
            {props.teamMember.roles.map((role, i) => (
              <div key={props.teamMember.name + i}>{role}</div>
            ))}
          </div>
        </div>
        <Image
          src={props.teamMember.image}
          alt={props.teamMember.name}
          height={500}
          width={500}
          className="absolute h-52 w-52 scale-125 rounded-full bg-opacity-80 bg-primary -right-0 -bottom-0 object-contain"
        />
      </div>
    </div>
  );
};
