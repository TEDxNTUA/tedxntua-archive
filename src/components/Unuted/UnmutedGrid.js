import UnmutedCard from "./UnmutedCard";

export default function UnmutedGrid({}) {
  const unmutedlist = [
    {
      link: "/unmuTED4",
      thumbnail: "/api/proxy-image?id=10xNVBF2UymbY0vR20jKD1gU2ZJX5ZMLL",
      title: "unmuTED4",
      team: "Venue and Production",
    },
    {
      link: "/unmuTED3",
      thumbnail: "/api/proxy-image?id=10xNVBF2UymbY0vR20jKD1gU2ZJX5ZMLL",
      title: "unmuTED3",
      team: "FR",
    },
    {
      link: "/unmuTED2",
      thumbnail: "/api/proxy-image?id=1y6ImGAC_ZkqtckVlVuJswVaBVEAqPap9",
      title: "unmuTED2",
      team: "Experience",
    },
    {
      link: "/unmuTED1",
      thumbnail: "/api/proxy-image?id=1y7Yg8biXsO3u--fCBUe1nixRuXV4D0Tg",
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
