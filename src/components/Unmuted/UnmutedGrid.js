import UnmutedCard from "./UnmutedCard";

export default function UnmutedGrid({}) {
  const unmutedlist = [
    {
      link: "/unmuTED4",
      thumbnail: "./unmuted/fr.png",
      title: "unmuTED4",
      team: "Venue and Production",
    },
    {
      link: "/unmuTED3",
      thumbnail: "./unmuted/fr.png",
      title: "unmuTED3",
      team: "FR",
    },
    {
      link: "/unmuTED2",
      thumbnail: "./unmuted/experience.png",
      title: "unmuTED2",
      team: "Experience",
    },
    {
      link: "/unmuTED1",
      thumbnail: "./unmuted/media.png",
      title: "unmuTED1",
      team: "Media",
    },
  ];
  return (
    <ul className="flex flex-row flex-wrap mx-auto gap-10 w-[70%] pb-10 justify-center md:justify-normal">
      {unmutedlist.map((unmuteditem, index) => {
        return (
          <li key={index}>
            <UnmutedCard
              unmutedlink={unmuteditem.link}
              thumbnail={unmuteditem.thumbnail}
              title={unmuteditem.title}
              team={unmuteditem.team}
            />
          </li>
        );
      })}
    </ul>
  );
}
