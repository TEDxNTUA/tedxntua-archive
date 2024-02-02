import React from "react";

const text = {
  q1: "What is TEDxNTUA?",
  ans1: `TEDxNTUA is a conference that features talks on the topics of popular science, art, and social issues, stories that can inspire, as well as intriguing workshops and performances. It runs under the auspices of the National Technical University of Athens, Greece (NTUA) and is primarily aimed at the university community, but also at the wider student and local communities of Athens.
Our organizing team consists of volunteer students, mainly of NTUA, who embrace the notion of spreading worthy ideas, as conceived by the TED organization. Our aspiration as a team is to build this event into a platform where people who can make a difference will have their voices heard; where community members can engage with one another and spark fruitful discussion about our common concerns, like engineering and its role in building a better and more inclusive society.
Since the project’s inception in 2015, the members of the student community have consistently shown their support with their participation as attendees or volunteers. They have thus helped establish it as an institution and imbued us with a sense of duty towards them. A crucial part in achieving this, is our constant effort to make the event open for everyone, by charging no attendance fee, with the help of our partners.
TEDxNTUA has a non-profit motive and is solely funded by sponsor companies, organizations and patrons. It is supervised by NTUA professors and formally belongs to the Institute of Communication and Computer Systems (ICCS) of NTUA.`,
  q2: "What is TED?",
  ans2: `TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com.
TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self-organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.`,
  q3: "What is TEDx?",
  ans3: `In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.

The TED Conference provides general guidance for the TEDx program, but individual TEDx event are self-organized. (Subject to certain rules and regulations.)`,
};

const AboutTed = () => {
  return (
    <div class="flex-column mx-40 ">
      <div class="flex flex-row items-center mt-20">
        <div class="text-3xl text-[#eb0028] text-center italic font-bold pr-40">
          {text.q1}
        </div>
        <div class="text-sm text-[#FFFFFF] text-justify italic font-bold px-10 py-10 rounded-xl border-2 border-[#eb0028]">
          {text.ans1}
        </div>
      </div>
      <div class="flex flex-row items-center mt-20">
        <div class="text-sm text-[#FFFFFF] text-justify italic font-bold px-10 py-10 rounded-xl border-2 border-[#eb0028]">
          {text.ans2}
        </div>
        <div class="text-3xl text-[#eb0028] text-center italic font-bold pl-40">
          {text.q2}
        </div>
      </div>
      <div class="flex flex-row items-center my-20">
        <div class="text-3xl text-[#eb0028] text-center italic font-bold pr-40">
          {text.q3}
        </div>
        <div class="text-sm text-[#FFFFFF] text-justify italic font-bold px-10 py-10 rounded-xl border-2 border-[#eb0028]">
          {text.ans3}
        </div>
      </div>
    </div>
  );
};

export default AboutTed;
