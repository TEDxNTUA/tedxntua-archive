//ADVICES TO FUTURE AND EXISTING DEVELOPERS !
// RULE 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Existing categories (update this list if new ones are added):
// education, life, science, technology, design, global issues, culture, history, business
// (Also supports arrays, e.g. ["technology", "business"])
// If you add a new category, please update this comment.
//
// RULE 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
//Speaker info advice for popups:
// Preferred: speaker_speakers: [{ name, social }]
// Example (multiple speakers):
// speaker_speakers: [
//   { name: "Alice Example", social: "https://instagram.com/alice" },
//   { name: "Bob Example", social: "https://linkedin.com/in/bob" }
// ]
// Legacy: speaker_name: "Name1 & Name2", speaker_info: [url1, url2]
// Single: speaker_name: "Name", speaker_info: "url"
// Each speaker should have a name and a social/profile URL for best results.

export const PREVIOUS_EVENTS = [
  {
    name: "Synelixis",
    date: "May 10, 2025",
    link: "https://2025.tedxntua.com",
    source: "synelixis.jpg",
    logo: "synelixis-logo.png",
    paragraph:
      "SYNELIXIS What happens when two worlds come into contact? Synelixis, in its mathematical sense, describes the transformation one function causes in another as it passes through it — and the result that emerges as a combination of both. In our lives, in our everyday reality, a 'function' can be seen as any idea, any interaction, any moment — a brief (or perhaps not so brief) exchange. A dialogue between the old and the new, the familiar and the unknown, the fleeting and the eternal — not simply the merging of opposites, but the birth of something new and unique.",
    talks: [
      {
        id: "watchtalk101",
        title: "When Science Becomes The Soundtrack of Your Life",
        yt_link: "https://www.youtube.com/watch?v=p6_OPJxk8oc&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=1",
        thumbnail_yt: "https://i.ytimg.com/vi/p6_OPJxk8oc/hqdefault.jpg",
        speaker_name: "Ioannis Pantazopoulos",
        speaker_info: "https://www.instagram.com/johnpantazopoulos/",
        category: "education"
      },
      {
        id: "watchtalk102",
        title: "The Multiplicity of The Self",
        yt_link: "https://www.youtube.com/watch?v=3sOBkLntUpk&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=2",
        thumbnail_yt: "https://i.ytimg.com/vi/3sOBkLntUpk/hqdefault.jpg",
        speaker_name: "Eva Kotta",
        speaker_info: "https://www.instagram.com/the.abstract.girl/",
        category: "life"
      },
      {
        id: "watchtalk103",
        title: "Disability As a Result of Human Behaviors",
        yt_link: "https://www.youtube.com/watch?v=K7ULboaVvqE&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=3",
        thumbnail_yt: "https://i.ytimg.com/vi/K7ULboaVvqE/hqdefault.jpg",
        speaker_name: "George Gougoulakis",
        speaker_info: "https://www.instagram.com/giorgio_el_greco",
        category: "life"
      },
      {
        id: "watchtalk104",
        title: "Know Thyself 2.0: When Technology Rewrites Life",
        yt_link: "https://www.youtube.com/watch?v=3MFj7pCZXVw&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=4",
        thumbnail_yt: "https://i.ytimg.com/vi/3MFj7pCZXVw/hqdefault.jpg",
        speaker_name: "Aristides G. Eliopoulos",
        speaker_info: "https://www.facebook.com/eliopag",
        category: "science"
      },
      {
        id: "watchtalk105",
        title: "Roots",
        yt_link: "https://www.youtube.com/watch?v=qt0aGGZwVIU&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=5",
        thumbnail_yt: "https://i.ytimg.com/vi/qt0aGGZwVIU/hqdefault.jpg",
        speaker_name: "Zografos V",
        speaker_info: "https://www.instagram.com/zografos_vita/",
        category: "life"
      },
      {
        id: "watchtalk106",
        title: "Navigating our future with AI ethics",
        yt_link: "youtube.com/watch?v=2T8aoCWZ4CE&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=6",
        thumbnail_yt: "https://i.ytimg.com/vi/2T8aoCWZ4CE/hqdefault.jpg",
        speaker_name: "Rosario Moscato",
        speaker_info: "https://www.linkedin.com/in/rosariomoscato/",
        category: "technology"
      },
      {
        id: "watchtalk107",
        title: "How Places Are Born: The Convolution of Humans and Environment",
        yt_link: "https://www.youtube.com/watch?v=yAJiwxP57dw&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=7",
        thumbnail_yt: "https://i.ytimg.com/vi/yAJiwxP57dw/hqdefault.jpg",
        speaker_name: "Xenia Mastoraki",
        speaker_info: "https://www.instagram.com/xeniamastoraki/",
        category: "design",
      },
      {
        id: "watchtalk108",
        title: "Reimagining medicine with AI",
        yt_link: "https://www.youtube.com/watch?v=TsJCyzGVgDY&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=8",
        thumbnail_yt: "https://i.ytimg.com/vi/TsJCyzGVgDY/hqdefault.jpg",
        speaker_speakers: [
          { name: "Kimon Vogt", social: "" },
          { name: "Antonia Vogt", social: "" }
        ],
        category: "technology"
      },
      {
        id: "watchtalk109",
        title: "Cooking My Way Through Change",
        yt_link: "https://www.youtube.com/watch?v=TwKoGF4D4hQ&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=9",
        thumbnail_yt: "https://i.ytimg.com/vi/TwKoGF4D4hQ/hqdefault.jpg",
        speaker_name: "Gogo Delogianni",
        speaker_info: "https://www.instagram.com/gogodelogianni/?hl=en",
        category: "life"
      },
      {
        id: "watchtalk100",
        title: "A Journey of Solidarity",
        yt_link: "https://www.youtube.com/watch?v=tz-jJ4z8edk&list=PLd7-PjFC85gwyYgELrfHGvr-sT2vsbJql&index=10",
        thumbnail_yt: "https://i.ytimg.com/vi/tz-jJ4z8edk/hqdefault.jpg",
        speaker_name: "Vangelis Simakis - Backpack Brothers",
        speaker_info: "https://www.instagram.com/backpackbrothers.gr/",
        category: "global issues"
      }
    ]
  },
  {
    name: "Ephemeral",
    date: "May 25, 2024",
    link: "https://2024.tedxntua.com",
    source: "ephemeral.png",
    logo: "ephemeral-logo.png",
    paragraph:
      "This date, the organizing team of TEDxNTUA is preparing 'EPHEMERAL'. Ephemeral originates from the greek word ἐφήμερος, meaning 'the one that lasts only one day' We will be exploring ephemerality and aiming to spread ideas around the concept of transience, how everything begins, ends and consequently  evolves, in all aspects of our lives. In the context of human experience, transience highlights the uniqueness and value of each moment and experience. At our event, we will point out how reconciliation with the ephemeral nature of things turns into a motivating force and a source of inspiration.",
    talks: [
      {
        id: "watchtalk67",
        title: "Can Art Conquer Death?",
        yt_link:
          "https://www.youtube.com/watch?v=KadsZRnGnN4&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=2",
        thumbnail_yt: "https://i.ytimg.com/vi/KadsZRnGnN4/hqdefault.jpg",
        speaker_name: "Fotis Floros",
        speaker_info: "https://www.instagram.com/_the_dandy_/?igsh=YWZyeWVkcnBjdThi",
        category: "culture"
      },
      {
        id: "watchtalk68",
        title: "The Epistemology of the Ephemeral and the Media",
        yt_link:
          "https://www.youtube.com/watch?v=8UO4XyevOj8&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=3",
        thumbnail_yt: "https://i.ytimg.com/vi/8UO4XyevOj8/hqdefault.jpg",
        speaker_name: "George Pleios",
        speaker_info: "https://pleios.gr",
        category: "history"
      },
      {
        id: "watchtalk69",
        title: "Language: a Living Organism",
        yt_link:
          "https://www.youtube.com/watch?v=zmfBAMh09H8&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=3",
        thumbnail_yt: "https://i.ytimg.com/vi/zmfBAMh09H8/hqdefault.jpg",
        speaker_name: "Spyridoula Varlokosta",
        speaker_info: "https://www.researchgate.net/profile/Spyridoula-Varlokosta",
        category: "science"
      },
      {
        id: "watchtalk70",
        title: "How to Live our Life in the Era of the Ephemeral",
        yt_link:
          "https://www.youtube.com/watch?v=Mk38We3F8Xs&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=4",
        thumbnail_yt: "https://i.ytimg.com/vi/Mk38We3F8Xs/hqdefault.jpg",
        speaker_name: "Georgios Lyrakos",
        speaker_info: "https://www.researchgate.net/profile/Georgios-Lyrakos",
        category: "life"
      },
      {
        id: "watchtalk71",
        title: "How the Mediterranean became the most Dangerous Sea for Refugees",
        yt_link:
          "https://www.youtube.com/watch?v=NKEo0MgsJ_g&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=5",
        thumbnail_yt: "https://i.ytimg.com/vi/NKEo0MgsJ_g/hqdefault.jpg",
        speaker_name: "Iasonas Apostolopoulos",
        speaker_info: "https://en.wikipedia.org/wiki/Iasonas_Apostolopoulos",
        category: "life"
      },
      {
        id: "watchtalk72",
        title: "Is Dressing Sustainably Impossible in an Ephemeral World?",
        yt_link:
          "https://www.youtube.com/watch?v=ckg_u74z57A&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=7",
        thumbnail_yt: "https://i.ytimg.com/vi/ckg_u74z57A/hqdefault.jpg",
        speaker_name: "Nassia Philippidi",
        speaker_info: "https://www.linkedin.com/in/nasiafilippidi/",
        category: "business"
      },
      {
        id: "watchtalk73",
        title: "TIK TAK",
        yt_link:
          "https://www.youtube.com/watch?v=FE9qnMT4zfw&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=8",
        thumbnail_yt: "https://i.ytimg.com/vi/FE9qnMT4zfw/hqdefault.jpg",
        speaker_name: "Rapsodos Filologos (Alexandros Ptinis)",
        speaker_info: "https://el.wikipedia.org/wiki/Ραψωδός_Φιλόλογος",
        category: "culture"
      },
      {
        id: "watchtalk74",
        title: "Time, Disorder and the Physics of the Ephemeral",
        yt_link:
          "https://www.youtube.com/watch?v=j0BMHluWx0c&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=9",
        thumbnail_yt: "https://i.ytimg.com/vi/j0BMHluWx0c/hqdefault.jpg",
        speaker_name: "George Panagiotakopoulos",
        speaker_info: "https://physiart.com/μικρό-βιογραφικό/",
        category: "science"
      },
      {
        id: "watchtalk75",
        title: "3 Facts about Career Guidance",
        yt_link:
          "https://www.youtube.com/watch?v=PhJ_LhBnVYc&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=10",
        thumbnail_yt: "https://i.ytimg.com/vi/PhJ_LhBnVYc/hqdefault.jpg",
        speaker_name: "Konstantinos Kotios",
        speaker_info: "https://axia.edu.gr/wp-content/uploads/2022/06/κοτιος-cv-.pdf",
        category: ["life", "business"]
      },
      {
        id: "watchtalk76",
        title: "The Ephemeral Universe. The Hubble-Lemaitre Constant.",
        yt_link:
          "https://www.youtube.com/watch?v=9oU2CRW4QXg&list=PLd7-PjFC85gwK5fK7nwmt6PeJWPBabUAY&index=11",
        thumbnail_yt: "https://i.ytimg.com/vi/9oU2CRW4QXg/hqdefault.jpg",
        speaker_name: "Jason Spyromilio",
        speaker_info: "https://www.eso.org/~jspyromi/bourdes/Welcome.html",
        category: "science"
      }
    ]
  },
  {
    name: "Mneme",
    date: "May 13, 2023",
    link: "https://2023.tedxntua.com",
    source: "mneme.jpeg",
    logo: "Mneme-logo.png",
    paragraph:
      "Memory is what allows us to discuss, compare, decide, justify, foresee, anticipate, and most importantly: it is the very baseline of our evolution and the fundamental pillar of our culture. As we see it, remembrance and recollection are inextricably connected with our identity. They define the past’s relevance in time and our existence’s significance in the world's timeline. Therefore, Mneme becomes our temporal and existential consciousness. In Greek mythology, Mnemosyne was the Goddess of Memory and mother of the nine Muses who were originally patron goddesses of poets of the oral tradition. Therefore, we aspire to enhance the concept of “Ideas Change Everything” by bringing the importance of passing down knowledge, into the spotlight.",
    talks: [
      {
        id: "watchtalk60",
        title: "Leaving our Legacy in the Cosmos",
        yt_link:
          "https://www.youtube.com/watch?v=R9RgEicCzMI&list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA&index=1&pp=iAQB",
        thumbnail_yt: "https://i.ytimg.com/vi/R9RgEicCzMI/hqdefault.jpg",
        speaker_name: "Stamatis Krimigis",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%A3%CF%84%CE%B1%CE%BC%CE%AC%CF%84%CE%B7%CF%82_%CE%9A%CF%81%CE%B9%CE%BC%CE%B9%CE%B6%CE%AE%CF%82",
        category: "science"
      },
      {
        id: "watchtalk61",
        title: "Navigating Forgetfulness and Intelligence in AI",
        yt_link: "https://youtu.be/iniU9cUOW5A?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/iniU9cUOW5A/hqdefault.jpg",
        speaker_name: "Xenia Miscouridou",
        speaker_info: "https://www.ucy.ac.cy/directory/en/profile/xmisco01",
        category: "technology"
      },
      {
        id: "watchtalk62",
        title: "Memory, Intelligence, Autonomy, Truth and Machines",
        yt_link: "https://youtu.be/E4UqnoUavwE?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/E4UqnoUavwE/hqdefault.jpg",
        speaker_name: "Konstantinos Karachalios",
        speaker_info: "https://manageroftheyear.gr/person/dr-ing-konstantinos-karachalios/",
        category: "technology"
      },
      {
        id: "watchtalk63",
        title: "An Actor's Duality: The Reality Between Memory and Imagination",
        yt_link: "https://youtu.be/_HrdqNALlkg?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/_HrdqNALlkg/hqdefault.jpg",
        speaker_name: "Myrto Alikaki",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%9C%CF%85%CF%81%CF%84%CF%8E_%CE%91%CE%BB%CE%B9%CE%BA%CE%AC%CE%BA%CE%B7",
        category: "culture"
      },
      {
        id: "watchtalk64",
        title: "Memory Unveiled",
        yt_link: "https://youtu.be/4wZSOHNjMJs?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/4wZSOHNjMJs/hqdefault.jpg",
        speaker_name: "Nektarios Tavernarakis",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%9D%CE%B5%CE%BA%CF%84%CE%AC%CF%81%CE%B9%CE%BF%CF%82_%CE%A4%CE%B1%CE%B2%CE%B5%CF%81%CE%BD%CE%B1%CF%81%CE%AC%CE%BA%CE%B7%CF%82",
        category: "science"
      },
      {
        id: "watchtalk65",
        title: "The rebirth of a village: Vamvakou Revival",
        yt_link: "https://youtu.be/XDnQ2A7JqoI?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/XDnQ2A7JqoI/hqdefault.jpg",
        speaker_name: "Eleni Mami & Haris Vasilakos",
        speaker_info: "https://www.vamvakourevival.org/",
        category: "life"
      },
      {
        id: "watchtalk66",
        title: "Expressing Identity Through Photography",
        yt_link: "https://youtu.be/AJndmyk15Fk?list=PLd7-PjFC85gz9zLjNuf0zD9bXV9D1N_iA",
        thumbnail_yt: "https://i.ytimg.com/vi/AJndmyk15Fk/hqdefault.jpg",
        speaker_name: "Sever Zolak",
        speaker_info: "https://severzolak.com/",
        category: "life"
      }
    ]
  },
  {
    name: "Play",
    date: "May 21, 2022",
    link: "",
    source: "play.jpeg",
    logo: "Play-logo.png",
    paragraph:
      "From a young age, Play is a notion that represents a powerful, motivational force, coming from within ourselves. A force that as we grow older, accompanies us through the journey that we call life. It’s in our dreams, our jobs, our activities, basically every aspect of it and it’s giving us purpose and the necessary motivation to keep going! At the first listen to PLAY we are automatically transported to our childhood and we nostalgically reminisce about those moments. \n PLAY is present in every aspect of life, it follows us silently, it evolves as we grow older and change, always remaining a means of escape, a reminder that everyday life is not as strict and monotonous as it sometimes seems. It accompanies us in almost all areas, from everyday life to dreams, from work to entertainment, from stop to play! ",
    talks: [
      {
        id: "watchtalk54",
        title: "Life: A series of games",
        yt_link: "https://youtu.be/K-25ugdT8Cc?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/K-25ugdT8Cc/hqdefault.jpg",
        speaker_name: "Apostolos Apostolakis",
        speaker_info: "https://www.linkedin.com/in/apostolosapostolakis/?originalSubdomain=gr",
        category: ["technology", "business"]
      },
      {
        id: "watchtalk55",
        title: "Worldplay: Opening a path to a new Renaissance",
        yt_link: "https://youtu.be/hMkZcI0_JEk?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/hMkZcI0_JEk/hqdefault.jpg",
        speaker_name: "Eugene Trivizas",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%95%CF%85%CE%B3%CE%AD%CE%BD%CE%B9%CE%BF%CF%82_%CE%A4%CF%81%CE%B9%CE%B2%CE%B9%CE%B6%CE%AC%CF%82",
        category: ["life", "culture"]
      },
      {
        id: "watchtalk56",
        title: "Double Play: Between two worlds",
        yt_link: "https://youtu.be/N1Fs8eJH810?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/N1Fs8eJH810/hqdefault.jpg",
        speaker_name: "Mirela Pachou",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%9C%CE%B9%CF%81%CE%AD%CE%BB%CE%B1_%CE%A0%CE%AC%CF%87%CE%BF%CF%85",
        category: "life"
      },
      {
        id: "watchtalk57",
        title: "A Journey to Fearless Play",
        yt_link: "https://youtu.be/6GsC2G9GA6k?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/6GsC2G9GA6k/hqdefault.jpg",
        speaker_name: "Lena Divani",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%9B%CE%AD%CE%BD%CE%B1_%CE%94%CE%B9%CE%B2%CE%AC%CE%BD%CE%B7",
        category: ["life", "culture"]
      },
      {
        id: "watchtalk58",
        title: "Playing with the invisible: Combining Art & Science",
        yt_link: "https://youtu.be/9MMwi5jFM2c?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/9MMwi5jFM2c/hqdefault.jpg",
        speaker_name: "Konstantinos Gardikis",
        speaker_info:
          "https://www.linkedin.com/in/konstantinos-gardikis-89940343/?originalSubdomain=gr",
        category: ["culture", "science"]
      },
      {
        id: "watchtalk59",
        title: "Championship Game: An ever lasting, arduous journey",
        yt_link: "https://youtu.be/TSReWjsjkMM?list=PLd7-PjFC85gx7MT7vSWdXobgpEleqIlYk",
        thumbnail_yt: "https://i.ytimg.com/vi/TSReWjsjkMM/hqdefault.jpg",
        speaker_name: "Anna Ntountounaki",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%86%CE%BD%CE%BD%CE%B1_%CE%9D%CF%84%CE%BF%CF%85%CE%BD%CF%84%CE%BF%CF%85%CE%BD%CE%AC%CE%BA%CE%B7",
        category: "life"
      }
    ]
  },
  {
    name: "Ubuntu",
    date: "May 29, 2021",
    link: "",
    source: "ubuntu.jpeg",
    logo: "Ubuntu-logo.png",
    paragraph:
      "How does every little act affect our fellow men? How do we all connect with each other? Does that mean we are all equal? Ubuntu is a word with a double meaning. On the one hand it is widely known for its open source software name and on the other it is an African proverb that comes from the Zulu tribe. Specifically it means «I am because you are». It has its roots in African humanitarian philosophy, where the idea of ​​community is one of the building blocks of society. Ubuntu is this cloudy concept of unity, humanity, completeness, solidarity and faith in a global bond that unites all of humanity. What does ubuntu really mean and how many things can it connect to?",
    talks: [
      {
        id: "watchtalk44",
        title: "How the public forms the artist and vice versa",
        yt_link: "https://youtu.be/2cSH182xhLg?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/2cSH182xhLg/hqdefault.jpg",
        speaker_name: "Υannis Zambelis",
        speaker_info: "https://www.zabelis.gr/",
        category: "culture"
      },
      {
        id: "watchtalk45",
        title: "Look Lola an apple",
        yt_link: "https://youtu.be/2sy0bTBvDWA?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/2sy0bTBvDWA/hqdefault.jpg",
        speaker_name: "Erofili Kokkali",
        speaker_info: "https://www.lifo.gr/authors/erofili-kokkali",
        category: "culture"
      },
      {
        id: "watchtalk46",
        title: 'Ubuntu: How "we are", because everyone around us "is',
        yt_link: "https://youtu.be/2l6HXVj-c4g?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/2l6HXVj-c4g/hqdefault.jpg",
        speaker_name: "Dimitra Korokida",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%94%CE%AE%CE%BC%CE%B7%CF%84%CF%81%CE%B1_%CE%9A%CE%BF%CF%81%CE%BF%CE%BA%CE%AF%CE%B4%CE%B1",
        category: "life"
      },
      {
        id: "watchtalk47",
        title: "A brief look at the history of Computer Architecture",
        yt_link: "https://youtu.be/boB9v4hkbVU?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/boB9v4hkbVU/hqdefault.jpg",
        speaker_name: "Dionisios Pnevmatikatos",
        speaker_info: "https://www.ece.ntua.gr/gr/staff/474",
        category: ["technology", "history"]
      },
      {
        id: "watchtalk48",
        title: "The power of team in an ever-changing enviroment",
        yt_link: "https://youtu.be/B8DAcVMWW4g?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/B8DAcVMWW4g/hqdefault.jpg",
        speaker_name: "Vasileios Chatzikos",
        speaker_info:
          "https://www.linkedin.com/in/vasileios-chatzikos-87123245/?originalSubdomain=gr",
        category: "business"
      },
      {
        id: "watchtalk49",
        title: "Cultivating respect and peaceful coexistence through education",
        yt_link: "https://youtu.be/avEbqbXOC2s?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/avEbqbXOC2s/hqdefault.jpg",
        speaker_name: "Sandra Mavroidi",
        speaker_info: "https://trianemi.edu.gr/",
        category: "life"
      },
      {
        id: "watchtalk50",
        title: "How and why we exist through others?",
        yt_link: "https://youtu.be/LcqMGip5iK0?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/LcqMGip5iK0/hqdefault.jpg",
        speaker_name: "Marios Aristotelis Koulouris",
        speaker_info:
          "https://mad.tv/soc-science-tube-tora-mathainei-koinoniologia-amp-psychologia-kai-sto-tedxntua/",
        category: ["science", "life"]
      },
      {
        id: "watchtalk51",
        title: "The quantum existence of the unique planet, earth and human species",
        yt_link: "https://youtu.be/MbdZWRVhwt0?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/MbdZWRVhwt0/hqdefault.jpg",
        speaker_name: "Evangelos Gazis",
        speaker_info: "http://www.physics.ntua.gr/~egazis/",
        category: "science"
      },
      {
        id: "watchtalk52",
        title: "Ubuntu and opensourse software",
        yt_link: "https://youtu.be/wOovC6JMBWk?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/wOovC6JMBWk/hqdefault.jpg",
        speaker_name: "Marios Fragkoulis",
        speaker_info:
          "https://www.linkedin.com/in/marios-fragkoulis-80141a53/?originalSubdomain=gr",
        category: "technology"
      },
      {
        id: "watchtalk53",
        title: "The necessity of fighting human trafficking",
        yt_link: "https://youtu.be/TPiZhu0zN9s?list=PLd7-PjFC85gwOVYVXIPNOOonl4EL9nLTq",
        thumbnail_yt: "https://i.ytimg.com/vi/TPiZhu0zN9s/hqdefault.jpg",
        speaker_name: "Fiori Zafeiopoulou",
        speaker_info: "https://www.epixeiro.gr/authors/633",
        category: "life"
      }
    ]
  },
  {
    name: "Dualism",
    date: "March 28, 2020",
    link: "",
    source: "dualism.jpeg",
    logo: "Dualism-logo.png",
    paragraph:
      "We approach subjects that touch upon current social, humanitarian, artistic and scientific issues, which consist of two principles. The two principles seem to be unrelated and opposite to one another, but in reality they complement each other and act jointly to achieve a harmonious unity. What are humans made of? Mind and body or just matter? How does the wave-particle duality lead to the cutting-edge technology of quantum computing? How do the parallel existence of electricity and magnetism and their relationship as identified by Maxwell, lead to our modern economy and society? How does digital dualism define our daily life? How does the contrast between white and black compose the essence of a picture? How do emptiness and fullness compose landscapes in architecture? In all of the above, the dependence relationship between the two principles is clear. Without the existence of the first, the meaning of the other is negated.",
    par_short:
      "DUALISM is the interpretation of the world based on two principles that act jointly and collaborate with each other. It is proposed to be the basis of connection and creation, rather than the foundation of opposition."
  },
  {
    name: "Enigma",
    date: "April 6, 2019",
    link: "",
    source: "enigma.jpeg",
    logo: "Enigma-logo.png",
    paragraph:
      " Enigma: that which is difficult to interpret, that which remains a mystery, something uncertain or inexplicable, a riddle not yet solved. \n The uncertain, the paradox, the unsolved. \n It’s everywhere. From the grandest existential question, to the tiniest everyday query, enigma is the source of knowledge. \nA man-made invention, a problem man places upon himself. An innate need for answers, which builds superstructures: physics, biology, computer science, chemistry, astronomy, arts, philosophy, history, psychology, sociology, religion, politics. \n Every answer creates a new question, and leads the way to a new explanation, more updated, more satisfactory, more complete. The enigma is in search of a solution to what troubles the human mind, and the enigma is everything that troubles the human mind, at the same time.",
    talks: [
      {
        id: "watchtalk32",
        title: "A child's drawing in the convention of the universe",
        yt_link: "https://youtu.be/RiR2OiUHGhg?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/RiR2OiUHGhg/hqdefault.jpg",
        speaker_name: "Michael Spengos",
        speaker_info: "https://www.linkedin.com/in/michael-spengos-36440625/?originalSubdomain=gr",
        category: "science"
      },
      {
        id: "watchtalk33",
        title: "A dive in the enigma of advanced materials",
        yt_link: "https://youtu.be/SaDSwHN7pPg?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/SaDSwHN7pPg/hqdefault.jpg",
        speaker_name: "Marianna Diamantopoulou",
        speaker_info:
          "https://www.linkedin.com/in/marianna-diamantopoulou-a078149b/?originalSubdomain=ch",
        category: "science"
      },
      {
        id: "watchtalk34",
        title: "Sending secret messages in a quantum world",
        yt_link: "https://youtu.be/9j1MOKodBdM?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/9j1MOKodBdM/hqdefault.jpg",
        speaker_name: "Eleni Diamanti",
        speaker_info: "https://en.wikipedia.org/wiki/Eleni_Diamanti",
        category: "science"
      },
      {
        id: "watchtalk35",
        title: "Unresolved architectural problems",
        yt_link: "https://youtu.be/X8zXH7uzXDI?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/X8zXH7uzXDI/hqdefault.jpg",
        speaker_name: "Manolis Korres",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%9C%CE%B1%CE%BD%CF%8C%CE%BB%CE%B7%CF%82_%CE%9A%CE%BF%CF%81%CF%81%CE%AD%CF%82",
        category: ["science", "life"]
      },
      {
        id: "watchtalk36",
        title: "Hyperloop: challenging the future of transportation",
        yt_link: "https://youtu.be/DPaNcktCAMw?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/DPaNcktCAMw/hqdefault.jpg",
        speaker_name: "Delft Hyperloop",
        speaker_info: "https://www.delfthyperloop.nl/",
        category: ["technology", "life", "business"]
      },
      {
        id: "watchtalk37",
        title: "Drawing on what's there",
        yt_link: "https://youtu.be/oOfw-rNJY2s?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/oOfw-rNJY2s/hqdefault.jpg",
        speaker_name: "Kastler Skjeseth Architects",
        speaker_info: "https://www.kastlerskjeseth.no/",
        category: "science"
      },
      {
        id: "watchtalk38",
        title: "Bio-inspired collective behavior of autonomous drone swarms",
        yt_link: "https://youtu.be/OLM5Us5UYCM?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/OLM5Us5UYCM/hqdefault.jpg",
        speaker_name: "Gábor Vásárhelyi",
        speaker_info:
          "https://www.linkedin.com/in/g%C3%A1bor-v%C3%A1s%C3%A1rhelyi-764432135/?originalSubdomain=hu",
        category: "science"
      },
      {
        id: "watchtalk39",
        title: "The power of constraints",
        yt_link: "https://youtu.be/eJu2vb3uU30?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/eJu2vb3uU30/hqdefault.jpg",
        speaker_name: "En Route Architects",
        speaker_info: "https://www.e-r-a.net/",
        category: ["science", "business"]
      },
      {
        id: "watchtalk40",
        title: "Brain Computer Interfaces and VR: the future of interfaces?",
        yt_link: "https://youtu.be/X-hkS82IFT0?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/X-hkS82IFT0/hqdefault.jpg",
        speaker_name: "Fotis Liarokapis",
        speaker_info: "https://www.linkedin.com/in/fotis-liarokapis-a569053/?originalSubdomain=cy",
        category: "technology"
      },
      {
        id: "watchtalk41",
        title: "Poetic machines: enigma of language",
        yt_link: "https://youtu.be/d9o_bwo0jJA?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/d9o_bwo0jJA/hqdefault.jpg",
        speaker_name: "Ivan Yamshchikov",
        speaker_info: "https://www.yamshchikov.info/",
        category: ["science", "life"]
      },
      {
        id: "watchtalk42",
        title: "The endless cosmic quest",
        yt_link: "https://youtu.be/HshUrGTu27I?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/HshUrGTu27I/hqdefault.jpg",
        speaker_name: "Evanthia Hatziminaoglou",
        speaker_info:
          "https://www.iac.es/en/mobility/dr-evanthia-hatziminaoglou-european-southern-observatory-eso-germany",
        category: ["science", "life"]
      },
      {
        id: "watchtalk43",
        title: "The enigmatic certainty regarding the others and the role of Law",
        yt_link: "https://youtu.be/b043-eDz3FQ?list=PLsRNoUx8w3rOypGod6FxNmceFuwNMHYfX",
        thumbnail_yt: "https://i.ytimg.com/vi/b043-eDz3FQ/hqdefault.jpg",
        speaker_name: "Ioannis Tassopoulos",
        speaker_info:
          "http://dddp.pspa.uoa.gr/an8rwpino-dynamiko/didaskontes/iwannhs-tasopoylos.html",
        category: ["life", "culture"]
      }
    ]
  },
  {
    name: "Chaos",
    date: "March 24, 2018",
    link: "",
    source: "chaos.jpeg",
    logo: "Chaos-logo.png",
    paragraph:
      "The notion of Chaos today is synonym to confusion and disorder. In the past though, ancient Greek Philosophers, thought highly of Chaos and considered it fundamental to the creation of Cosmos, that is, the Universe. Chaos was the original matter that transformed the abnormal uniformity of nature into normal diversity. \n We witness Chaos in its scientific meaning in numerous situations in everyday life: smoke rising up smoothly into the air and suddenly vanishing, unexpected traffic in a Highway road, irregular leaking of a tap, inexplicable fluctuations of the Stock Market Index and many more instances explained mostly by this Theory of Chaos.\n Chaos resides in our daily routine. No matter how hard we fight for harmony and well-being in our life, we frequently face hardships and difficulties that break the order",
    talks: [
      {
        id: "watchtalk21",
        title: "Talking over Chaos with an Αrtist",
        yt_link: "https://youtu.be/Pehdm-dMSCI?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/Pehdm-dMSCI/hqdefault.jpg",
        speaker_name: "Dimitra Galani",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%94%CE%AE%CE%BC%CE%B7%CF%84%CF%81%CE%B1_%CE%93%CE%B1%CE%BB%CE%AC%CE%BD%CE%B7",
        category: ["life", "culture"]
      },
      {
        id: "watchtalk22",
        title: "Athens, Metropolis by Accident",
        yt_link: "https://youtu.be/kthpTbI0xR4?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/kthpTbI0xR4/hqdefault.jpg",
        speaker_name: "Vassilis Charalabidis",
        speaker_info: "https://www.linkedin.com/in/vcharalampidis/?originalSubdomain=gr",
        category: ["life", "history"]
      },
      {
        id: "watchtalk23",
        title: "Future-proofing the City in the Age of Data Technology",
        yt_link: "https://youtu.be/Vd-N7fbU_qk?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/Vd-N7fbU_qk/hqdefault.jpg",
        speaker_name: "Caroline Bos",
        speaker_info: "https://en.wikipedia.org/wiki/Caroline_Bos",
        category: "technology"
      },
      {
        id: "watchtalk24",
        title: "Understanding Chaos from Poseidon to Zeus to Hades",
        yt_link: "https://youtu.be/izREPCXCdKQ?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/izREPCXCdKQ/hqdefault.jpg",
        speaker_name: "Michael Styllas",
        speaker_info: "https://www.researchgate.net/profile/Michael-Styllas",
        category: ["life", "history"]
      },
      {
        id: "watchtalk25",
        title: "Architecture inthe Age of Inteligence",
        yt_link: "https://youtu.be/NZ_aw7NFfg8?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/NZ_aw7NFfg8/hqdefault.jpg",
        speaker_name: "Natassa Lianou & Ermis Chalvatzis (LC Architects)",
        speaker_info: "https://www.lc-a.uk/",
        category: "science"
      },
      {
        id: "watchtalk26",
        title: "What is a startupper doing in the refugee crisis?",
        yt_link: "https://youtu.be/HzKPmMHURXg?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/HzKPmMHURXg/hqdefault.jpg",
        speaker_name: "Ioanna Theodorou",
        speaker_info: "https://www.linkedin.com/in/ioannatheodorou/?originalSubdomain=nl",
        category: ["business", "life"]
      },
      {
        id: "watchtalk27",
        title: "Understanding the human mind without a human mind : The AI neuroscientist",
        yt_link: "https://youtu.be/CVBIwQ0gzYU?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/CVBIwQ0gzYU/hqdefault.jpg",
        speaker_name: "Romy Lorenz",
        speaker_info: "https://www.romylorenz.com/",
        category: ["technology", "science"]
      },
      {
        id: "watchtalk28",
        title: "Chaos: The favorable source of uncertainty",
        yt_link: "https://youtu.be/UzHAkWhHEEQ?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/UzHAkWhHEEQ/hqdefault.jpg",
        speaker_name: "Themis Sapsis",
        speaker_info: "https://meche.mit.edu/people/faculty/sapsis@MIT.EDU",
        category: "science"
      },
      {
        id: "watchtalk29",
        title: "Start up in Chaos",
        yt_link: "https://youtu.be/ErmnsIo_oYY?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/ErmnsIo_oYY/hqdefault.jpg",
        speaker_name: "Aimilios Chalamandaris",
        speaker_info: "https://www.endeavor.org.gr/mentors/aimilios-chalamandaris",
        category: "business"
      },
      {
        id: "watchtalk30",
        title: "Open Innovation",
        yt_link: "https://youtu.be/jM7Qtj_JCRQ?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/jM7Qtj_JCRQ/hqdefault.jpg",
        speaker_name: "Vassilios Makios",
        speaker_info:
          "https://www.ece.upatras.gr/index.php/en/meriti-professors/makios-vasilios.html",
        category: "business"
      },
      {
        id: "watchtalk31",
        title: "Autonomous Decentralized Chaos",
        yt_link: "https://youtu.be/c3XQt0-HzRQ?list=PLsRNoUx8w3rPyxuGEigwn6VPqi5gJMN-y",
        thumbnail_yt: "https://i.ytimg.com/vi/c3XQt0-HzRQ/hqdefault.jpg",
        speaker_name: "Dionysis Zindros",
        speaker_info: "https://dionyziz.com/w/",
        category: "technology"
      }
    ]
  },
  {
    name: "Heuristics",
    date: "January 21, 2017",
    link: "",
    source: "heuristics.jpeg",
    logo: "Heuristics-logo.png",
    paragraph:
      "We've been navigating with maps that precede our geography. \n We are following the long way back in search of the short way forth. \n Admittedly, we have drifted away from what is ahead. \n Hopefully, we're not too late to realize we won't make it on time. \n Hopefully, we won't be too proud to take a shortcut.",
    talks: [
      {
        id: "watchtalk15",
        title: "LuckVsPassion:An Empirical Approach to Career Planning and Development",
        yt_link: "https://youtu.be/D_rGV423ths?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/D_rGV423ths/hqdefault.jpg",
        speaker_name: "John Kalogerakis",
        speaker_info: "https://jmk.gr/index.php/who-is-john-kalogerakis/",
        category: "business"
      },
      {
        id: "watchtalk16",
        title: "Simulated Reality",
        yt_link: "https://youtu.be/Cexed6rvY3Y?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/Cexed6rvY3Y/hqdefault.jpg",
        speaker_name: "Sotiris Kokkinos",
        speaker_info: "https://www.linkedin.com/in/sotiris-kokkinos-55957a49/?originalSubdomain=gr",
        category: ["technology", "science"]
      },
      {
        id: "watchtalk17",
        title: "Heuristic Approach to Engineering Decisions",
        yt_link: "https://youtu.be/xTToXqYeUMU?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/xTToXqYeUMU/hqdefault.jpg",
        speaker_name: "Sissy Nikolaou",
        speaker_info: "https://www.nist.gov/people/aspasia-nikolaou",
        category: "science"
      },
      {
        id: "watchtalk18",
        title: "Our Future with CRISPR: Building Consensus on Genome Editing",
        yt_link: "https://youtu.be/KrB9Ntwkn9c?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/KrB9Ntwkn9c/hqdefault.jpg",
        speaker_name: "Edward Perello",
        speaker_info: "https://www.linkedin.com/in/edwardperello/?originalSubdomain=uk",
        category: "science"
      },
      {
        id: "watchtalk19",
        title: "Α Future Hidden in Indoor Farming",
        yt_link: "https://youtu.be/_L2REhDa9gs?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/_L2REhDa9gs/hqdefault.jpg",
        speaker_name: "Christos Raftogiannis",
        speaker_info: "https://www.linkedin.com/in/chrisraftogiannis/?originalSubdomain=gr",
        category: ["business", "life"]
      },
      {
        id: "watchtalk20",
        title: "Habitable Worlds:From Earth to the IcyMoons of the OuterSolarSystem",
        yt_link: "https://youtu.be/NIiBXYC4j-s?list=PLsRNoUx8w3rMnXdlOcr2jwD7HM6jIZSed",
        thumbnail_yt: "https://i.ytimg.com/vi/NIiBXYC4j-s/hqdefault.jpg",
        speaker_name: "Anezina Solomonidou",
        speaker_info: "https://science.jpl.nasa.gov/people/anezina-solomonidou/",
        category: ["science", "technology"]
      }
    ]
  },
  {
    name: "Chain Reactions",
    date: "January 17, 2015",
    link: "",
    source: "chain-reactions.jpeg",
    logo: "Chain-reactions-logo.png",
    paragraph:
      " A butterfly flaps its wings in China and a tornado rises in midwestern America. Highly unlikely, although one can't underestimate the sensitive dependency between the smallest of our actions and their impact on the bigger picture. Introducing TEDx NTUA, we want to look deep into the ways our individual creativity changes the world around us. Experiment with different reagents and ignite the proliferation we want to see in society. Push the first domino and admire the intricate way the rest fall into. Our theme this date is Chain Reactions. Empowered by the cohesion that binds the disciplines of engineering we hope to plant a seed of hope and harvest a forest of endless possibilities.",
    talks: [
      {
        id: "watchtalk1",
        title: "NEWSLEXIA: News Reading Disorder",
        yt_link: "https://youtu.be/6yvIpW1zFDc?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/6yvIpW1zFDc/hqdefault.jpg",
        speaker_name: "Yiannis Ampelas",
        speaker_info: "https://www.befoolish.co/work/newslexia/",
        category: ["business", "technology"]
      },
      {
        id: "watchtalk2",
        title: "Why Twitter Can Spark A Revolution But Not Build A Country",
        yt_link: "https://youtu.be/IPWjla9rC9A?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/IPWjla9rC9A/hqdefault.jpg",
        speaker_name: "Jon Mark Walls",
        speaker_info: "https://www.linkedin.com/in/jon-mark-walls/?originalSubdomain=ch",
        category: "business"
      },
      {
        id: "watchtalk3",
        title: "Different cities, different citizens",
        yt_link: "https://youtu.be/jaD0EQIxDIA?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/jaD0EQIxDIA/hqdefault.jpg",
        speaker_name: "Thanos Vlastos",
        speaker_info: "http://regplanunit.survey.ntua.gr/st_Vlastos.html",
        category: "life"
      },
      {
        id: "watchtalk4",
        title: "Living in a space mission analogue",
        yt_link: "https://youtu.be/5naGC1QKgkc?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/5naGC1QKgkc/hqdefault.jpg",
        speaker_name: "Andrianos Golemis",
        speaker_info:
          "https://www.lifo.gr/now/greece/adrianos-golemis-o-giatros-ton-astronayton-poy-oneireyetai-na-paei-sto-diastima",
        category: "life"
      },
      {
        id: "watchtalk5",
        title: "Quantifying Uncertainty",
        yt_link: "https://youtu.be/TkDpO7r-iB4?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/TkDpO7r-iB4/hqdefault.jpg",
        speaker_name: "Dimitris Fouskakis",
        speaker_info:
          "https://www.linkedin.com/in/dimitris-fouskakis-6090962/?originalSubdomain=gr",
        category: "science"
      },
      {
        id: "watchtalk6",
        title: "Our Choices",
        yt_link: "https://youtu.be/SiVKfjVNTCA?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/SiVKfjVNTCA/hqdefault.jpg",
        speaker_name: "Daphne Becket",
        speaker_info: "https://www.linkedin.com/in/daphne-becket-a3b9154/?originalSubdomain=uk",
        category: ["life", "culture"]
      },
      {
        id: "watchtalk7",
        title: "Should we go to Mars?",
        yt_link: "https://youtu.be/fXJJpYVIU94?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/fXJJpYVIU94/hqdefault.jpg",
        speaker_name: "Ashley Dove-Jay",
        speaker_info: "https://www.linkedin.com/in/ashdj/?originalSubdomain=uk",
        category: "science"
      },
      {
        id: "watchtalk8",
        title: "The Fascination of Creating Value",
        yt_link: "https://youtu.be/nBjSe03ldXA?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/nBjSe03ldXA/hqdefault.jpg",
        speaker_name: "Yorgos Koutsoyannopoulos",
        speaker_info: "https://www.linkedin.com/in/yorgoskoutsoyannopoulos/",
        category: ["business", "technology"]
      },
      {
        id: "watchtalk9",
        title: "We Never Use the Same Brain Twice",
        yt_link: "https://youtu.be/9fhipNo4_d4?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/9fhipNo4_d4/hqdefault.jpg",
        speaker_name: "Elias D. Kouvelas",
        speaker_info: "https://www.cozzika.org/gr/to-idryma/2012-12-11-00-41-02/item/134",
        category: "science"
      },
      {
        id: "watchtalk10",
        title: "Technology, Science and Modern Greece's Reaction",
        yt_link: "https://youtu.be/lYVgJhKrqlA?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/lYVgJhKrqlA/hqdefault.jpg",
        speaker_name: "Theodosis Tassios",
        speaker_info:
          "https://el.wikipedia.org/wiki/%CE%98%CE%B5%CE%BF%CE%B4%CF%8C%CF%83%CE%B7%CF%82_%CE%A4%CE%AC%CF%83%CE%B9%CE%BF%CF%82",
        category: ["science", "technology"]
      },
      {
        id: "watchtalk11",
        title: "Look on the Creative Side of Life",
        yt_link: "https://youtu.be/l87KYZIGVmc?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/l87KYZIGVmc/hqdefault.jpg",
        speaker_name: "Ignatios Fotiou",
        speaker_info: "https://www.linkedin.com/in/ignatios-fotiou-a2107445/?originalSubdomain=gr",
        category: ["business", "life"]
      },
      {
        id: "watchtalk12",
        title: "Startupping: Taking Responsibility, Changing Society",
        yt_link: "https://youtu.be/9p4KUsEBzJg?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/9p4KUsEBzJg/hqdefault.jpg",
        speaker_name: "Athina Pitta",
        speaker_info: "https://www.linkedin.com/in/athinapitta/?originalSubdomain=gr",
        category: "business"
      },
      {
        id: "watchtalk13",
        title: "The Earth is Our Neighbourhood",
        yt_link: "https://youtu.be/GtNo_zj0jFQ?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/GtNo_zj0jFQ/hqdefault.jpg",
        speaker_name: "Engineers of the Earth",
        speaker_info:
          "https://www.engoe.gr/?fbclid=IwAR3og3-oisA_RbOgO0cT4V6Gl82RxaggBU7A6gGbuiyXC6B1JiWura9j-gk",
        category: "life"
      },
      {
        id: "watchtalk14",
        title: "Megabiskate in Ethiopia",
        yt_link: "https://youtu.be/_YJEP-Hi6O0?list=PLsRNoUx8w3rN4ZXc6mtn5c2O0bG-4Kieh",
        thumbnail_yt: "https://i.ytimg.com/vi/_YJEP-Hi6O0/hqdefault.jpg",
        speaker_name: "Israel Dejene",
        speaker_info: "https://www.globalcitizen.org/fr/content/israel-dejenes-story/",
        category: ["life", "culture"]
      }
    ]
  }
];

export const LEAN_EVENTS = PREVIOUS_EVENTS.filter(tedEvent => tedEvent.talks).map(tedEvent => {
  return {
    name: tedEvent.name,
    year: tedEvent.date.split(",")[1]
  };
});
