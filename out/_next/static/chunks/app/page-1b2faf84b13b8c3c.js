(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{16:function(e,t,i){Promise.resolve().then(i.bind(i,5408))},5408:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var o=i(3827);i(703);var a=function(){return(0,o.jsx)("section",{className:"bg-black h-[calc(100vh-5rem)]",children:(0,o.jsxs)("div",{className:"w-[100%] h-auto relative flex flex-col-reverse items-end md:flex-none",children:[(0,o.jsx)("img",{className:"w-auto lg:h-[95vh]",src:"./homepage/starting-page.png",width:800,height:800,alt:"archive",priority:"true"}),(0,o.jsxs)("div",{className:"flex flex-col px-8 md:w-[30%] md:absolute md:top-[25%] md:left-[10%] md:justify-start md:bg-none my-16 md:my-0 mx-auto",children:[(0,o.jsxs)("h1",{className:"text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight text-center md:text-left px-16 md:px-0",children:[(0,o.jsx)("span",{className:"text-our-red",children:"WELCOME"})," TO THE TED",(0,o.jsx)("span",{className:"text-our-red",children:"x"}),"NTUA"]}),(0,o.jsx)("img",{className:"pt-4 object-left w-[30%] mx-auto md:mx-0 md:w-[60%] lg:w-[80%]",src:"./homepage/archive.png",width:300,height:300,alt:"archive",priority:"true"})]})]})})},n=function(){return(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 justify-items-center bg-black mb-2",children:[(0,o.jsxs)("div",{className:"flex flex-col items-center md:items-left justify-center w-8/12 lg:w-5/12 my-4 md:my-8",children:[(0,o.jsx)("h1",{className:"hidden mb:block text-2xl hover:text-our-red text-left font-extrabold text-white leading-tight",children:"About the"}),(0,o.jsx)("img",{className:"pt-4 object-left",src:"./homepage/archive.png",width:300,height:300,alt:"archive"}),(0,o.jsx)("p",{className:"text-white text-justify font-light text-sm mt-4",children:"The TEDxNTUA Archive is a collection of all material produced by TEDxNTUA since its 2015 inception. Scroll down to see..."})]}),(0,o.jsx)("img",{className:"w-[70%] md:w-[100%] -pb-10",src:"./homepage/video-recap.png",width:800,height:800,alt:"archive",priority:"true"})]})},s=i(4090),r=e=>{let{endValue:t,duration:i}=e,[a,n]=(0,s.useState)(0),r=(0,s.useRef)(null);(0,s.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&l()},{threshold:0});return r.current&&e.observe(r.current),()=>{r.current&&e.unobserve(r.current)}},[]);let l=()=>{let e;let o=a=>{e||(e=a);let s=Math.min((a-e)/i,1);n(Math.floor(s*t)),s<1&&requestAnimationFrame(o)};requestAnimationFrame(o)};return(0,o.jsx)("span",{ref:r,children:a})},l=function(e){let{endValue:t,suffix:i,stat:a,color:n="red"}=e,s={red:"text-our-red",black:"text-black",white:"text-white"};return(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsxs)("div",{className:"flex flex-row ".concat(s[n]," text-lg md:text-2xl lg:text-3xl font-bold mx-auto"),children:[(0,o.jsx)(r,{endValue:t,duration:800}),i]}),(0,o.jsx)("span",{className:"flex flex-row ".concat(s[n]," text-xs md:text-md lg:text-lg font-thin lg:font-normal mx-auto"),children:a})]})};let c=[{stat:"Attendes",endValue:"4000",suffix:"+"},{stat:"Speakers",endValue:"80",suffix:"+"},{stat:"Volunteers",endValue:"460",suffix:"+"},{stat:"Workshops",endValue:"35",suffix:""}];var d=e=>{let{color:t="red",md_size_cols:i=4}=e;return(0,o.jsx)("div",{className:"grid list-none grid-cols-2  ".concat({1:"md:grid-cols-1",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-4"}[i]," gap-6 w-8/12 mx-auto p-4 ").concat({red:"border-our-red",black:"border-black",white:"border-white"}[t]," border-[0.5px] rounded-md"),children:c.map((e,i)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(l,{color:t,endValue:e.endValue,suffix:e.suffix,stat:e.stat}),(0,o.jsx)("p",{className:"text-[#ADB7BE] text-base",children:e.metric})]},i))})};i(2164);var h=i(8993),m=i(5578);function u(e){let{TedEvent:t}=e,i=(0,s.useRef)(null),{scrollYProgress:a}=(0,h.v)({target:i});return(0,m.H)(a,[0,1],[-300,300]),(0,o.jsx)("div",{className:"snap-start",children:(0,o.jsxs)("div",{className:"timeline-grid grid grid-cols-1 xl:grid-cols-3 text-center justify-between xl:justify-center xl:items-center h-[calc(100vh-5rem)] w-[100%] md:w-[80%] mx-auto xl:border-l-8 xl:border-our-red",children:[(0,o.jsxs)("div",{className:"flex flex-row justify-center content-center place-items-center text-white lg:bg-transparent self-center",children:[(0,o.jsx)("div",{className:"hidden xl:flex self-align-center left-0 relative",children:(0,o.jsx)("div",{className:"line block left-20 h-3 w-28 bg-our-red opacity-100 col-span-1 rounded-r-md"})}),(0,o.jsx)("h2",{className:"text-white font-bold text-6xl italic tracking-tighter leading-4 lg:leading-none mx-auto",children:t.year}),(0,o.jsx)("img",{width:300,height:300,src:"./eventLogos/".concat(t.logo),className:"mx-auto w-[10rem] h-[10vh] hidden"})]}),(0,o.jsx)("div",{className:"xl:mr-[5vw] self-start xl:self-center",children:(0,o.jsx)("img",{width:300,height:300,ref:i,className:"border-[2px] border-[#eb002733] rounded-md mx-auto w-[60%] xl:w-full object-fill",src:"./previousEvents/".concat(t.source),alt:"Previous ted event"})}),(0,o.jsx)("div",{className:"hidden xl:block",children:(0,o.jsx)("p",{className:"text-white font-semibold text-md 4xl:text-md 2xl:text-md leading-6 text-justify tracking-wide w-[95%] mx-auto",children:t.paragraph})})]})})}let p=[{id:"mneme",year:"2023",link:"https://www.linkedin.com",source:"mneme.jpeg",logo:"Mneme-logo.png",paragraph:"Memory is what allows us to discuss, compare, decide, justify, foresee, anticipate, and most importantly: it is the very baseline of our evolution and the fundamental pillar of our culture. As we see it, remembrance and recollection are inextricably connected with our identity. They define the past’s relevance in time and our existence’s significance in the world's timeline. Therefore, Mneme becomes our temporal and existential consciousness. In Greek mythology, Mnemosyne was the Goddess of Memory and mother of the nine Muses who were originally patron goddesses of poets of the oral tradition. Therefore, we aspire to enhance the concept of “Ideas Worth Spreading” by bringing the importance of passing down knowledge, into the spotlight."},{id:"play",year:"2022",link:"https://www.linkedin.com",source:"play.jpeg",logo:"Play-logo.png",paragraph:"From a young age, Play is a notion that represents a powerful, motivational force, coming from within ourselves. A force that as we grow older, accompanies us through the journey that we call life. It’s in our dreams, our jobs, our activities, basically every aspect of it and it’s giving us purpose and the necessary motivation to keep going! At the first listen to PLAY we are automatically transported to our childhood and we nostalgically reminisce about those moments, but TEDx NTUA 2022 sets it as a goal - and a challenge - to overturn this spontaneous thought.  \n PLAYis present in every aspect of life, it follows us silently, it evolves as we grow older and change, always remaining a means of escape, a reminder that everyday life is not as strict and monotonous as it sometimes seems. It accompanies us in almost all areas, from everyday life to dreams, from work to entertainment, from stop to play! "},{id:"ubuntu",year:"2021",link:"https://www.linkedin.com",source:"ubuntu.jpeg",logo:"Ubuntu-logo.png",paragraph:"How does every little act affect our fellow men? How do we all connect with each other? Does that mean we are all equal? Ubuntu is a word with a double meaning. On the one hand it is widely known for its open source software name and on the other it is an African proverb that comes from the Zulu tribe. Specifically it means \xabI am because you are\xbb. It has its roots in African humanitarian philosophy, where the idea of ​​community is one of the building blocks of society. Ubuntu is this cloudy concept of unity, humanity, completeness, solidarity and faith in a global bond that unites all of humanity. What does ubuntu really mean and how many things can it connect to? The TEDxNTUA 2021 team will give its own interpretation on 29th of May."},{id:"dualism",year:"2020",link:"https://www.linkedin.com",source:"dualism.jpeg",logo:"Dualism-logo.png",paragraph:"We approach subjects that touch upon current social, humanitarian, artistic and scientific issues, which consist of two principles. The two principles seem to be unrelated and opposite to one another, but in reality they complement each other and act jointly to achieve a harmonious unity. What are humans made of? Mind and body or just matter? How does the wave-particle duality lead to the cutting-edge technology of quantum computing? How do the parallel existence of electricity and magnetism and their relationship as identified by Maxwell, lead to our modern economy and society? How does digital dualism define our daily life? How does the contrast between white and black compose the essence of a picture? How do emptiness and fullness compose landscapes in architecture? In all of the above, the dependence relationship between the two principles is clear. Without the existence of the first, the meaning of the other is negated.",par_short:"DUALISM is the interpretation of the world based on two principles that act jointly and collaborate with each other. It is proposed to be the basis of connection and creation, rather than the foundation of opposition."},{id:"enigma",year:"2019",link:"https://www.linkedin.com",source:"enigma.jpeg",logo:"Enigma-logo.png",paragraph:" Enigma: that which is difficult to interpret, that which remains a mystery, something uncertain or inexplicable, a riddle not yet solved. \n The uncertain, the paradox, the unsolved. \n It’s everywhere. From the grandest existential question, to the tiniest everyday query, enigma is the source of knowledge. \nA man-made invention, a problem man places upon himself. An innate need for answers, which builds superstructures: physics, biology, computer science, chemistry, astronomy, arts, philosophy, history, psychology, sociology, religion, politics. \n Every answer creates a new question, and leads the way to a new explanation, more updated, more satisfactory, more complete. The enigma is in search of a solution to what troubles the human mind, and the enigma is everything that troubles the human mind, at the same time. It’s the way of facing the world without the possibility of being wrong. It’s a positive perspective of an uncertain reality. The admiration of the enormous progress of humanity. \n An attempt of self-awareness. \n  We can climb the mount of knowledge, one enigma at a time."},{id:"chaos",year:"2018",link:"https://www.linkedin.com",source:"chaos.jpeg",logo:"Chaos-logo.png",paragraph:"The notion of Chaos today is synonym to confusion and disorder. In the past though, ancient Greek Philosophers, thought highly of Chaos and considered it fundamental to the creation of Cosmos, that is, the Universe. Chaos was the original matter that transformed the abnormal uniformity of nature into normal diversity. \n We witness Chaos in its scientific meaning in numerous situations in everyday life: smoke rising up smoothly into the air and suddenly vanishing, unexpected traffic in a Highway road, irregular leaking of a tap, inexplicable fluctuations of the Stock Market Index and many more instances explained mostly by this Theory of Chaos.\n Chaos resides in our daily routine. No matter how hard we fight for harmony and well-being in our life, we frequently face hardships and difficulties that break the order"},{id:"heuristics",year:"2017",link:"https://www.linkedin.com",source:"heuristics.jpeg",logo:"Heuristics-logo.png",paragraph:"We've been navigating with maps that precede our geography. \n We are following the long way back in search of the short way forth. \n Admittedly, we have drifted away from what is ahead. \n Hopefully, we're not too late to realize we won't make it on time. \n Hopefully, we won't be too proud to take a shortcut."},{id:"chain reactions",year:"2015",link:"https://www.linkedin.com",source:"chain-reactions.jpeg",logo:"Chain-reactions-logo.png",paragraph:" A butterfly flaps its wings in China and a tornado rises in midwestern America. Highly unlikely, although one can't underestimate the sensitive dependency between the smallest of our actions and their impact on the bigger picture. Introducing TEDx NTUA, we want to look deep into the ways our individual creativity changes the world around us. Experiment with different reagents and ignite the proliferation we want to see in society. Push the first domino and admire the intricate way the rest fall into. Our theme this year is Chain Reactions. Empowered by the cohesion that binds the disciplines of engineering we hope to plant a seed of hope and harvest a forest of endless possibilities."}];function x(){return(0,o.jsx)("section",{children:p.map(e=>(0,o.jsx)(u,{TedEvent:e},e.id))})}var f=i(680),g=i(4345),w=function(){return(0,o.jsxs)("main",{children:[(0,o.jsxs)("div",{id:"main-scroll-container",className:"overflow overflow-y-scroll snap-y snap-mandatory h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem)]",children:[(0,o.jsx)("div",{className:"snap-start",children:(0,o.jsx)(a,{})}),(0,o.jsxs)("div",{className:"snap-start h-[calc(100vh-4.1rem)] md:h-[calc(100vh-5rem)]",children:[(0,o.jsx)(n,{}),(0,o.jsx)("div",{className:"bg-black pt-6",children:(0,o.jsx)(d,{})})]}),(0,o.jsx)(x,{}),(0,o.jsx)("div",{className:"snap-start",children:(0,o.jsx)(f.default,{})})]}),(0,o.jsx)(g.default,{isHomePage:!0})]})}},680:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var o=i(3827),a=i(8792),n=i(5387),s=function(){return(0,o.jsxs)("div",{className:"grid grid-cols-6 gap-3 justify-items-center",children:[(0,o.jsx)(n.Z,{link:"https://instagram.com/tedxntua/?hl=en",iconName:"instagram",color:"black",hoverColor:"white"}),(0,o.jsx)(n.Z,{link:"https://facebook.com/tedxntua",iconName:"facebook-f",color:"black",hoverColor:"white"}),(0,o.jsx)(n.Z,{link:"https://www.tiktok.com/@tedxntua",iconName:"tiktok",color:"black",hoverColor:"white"}),(0,o.jsx)(n.Z,{link:"https://linkedin.com/company/tedxntua",iconName:"linkedin",color:"black",hoverColor:"white"}),(0,o.jsx)(n.Z,{link:"https://open.spotify.com/user/31jmzq7bew5xcd2cypvo4xuua6ay?si=Qt_NzTPGRFyETbZ4XgKoxw&utm_source=copy-link&nd=1&dlsi=ca94005974b04c42",iconName:"spotify",color:"black",hoverColor:"white"}),(0,o.jsx)(n.Z,{link:"https://twitter.com/tedxntua?lang=en",iconName:"twitter",color:"black",hoverColor:"white"})]})},r=i(8411),l=i(4090),c=function(){let[e,t]=(0,l.useState)(!1);return(0,o.jsxs)("footer",{className:"c-footer relative overflow-hidden pt-[2rem] sm:pt-[1rem] md:pt-[10rem] z-0",children:[(0,o.jsx)("div",{className:"c-footer-animation w-embed h-[100vh] object-cover md:object-none md:height-[50rem] absolute top-0 right-0 left-0 bottom-0",children:(0,o.jsx)("svg",{className:"overflow-hidden z-0",width:"100%",viewBox:"0 0 1577 4307",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{fill:"#E24943",children:(0,o.jsx)("animate",{attributeName:"d",dur:"30s",repeatCount:"indefinite",values:"M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z; M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z; M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z; M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"})})})}),(0,o.jsxs)("div",{className:"c-container px-[1.25rem] md:w-[100%] md:max-w-[79rem] md:mx-auto md:px-[2rem] pt-[1rem]",children:[(0,o.jsxs)("div",{className:"grid grid-col-1 md:grid-row-2 gap-4 py-4",children:[(0,o.jsxs)("div",{className:"grid justify-items-center md:row-span-1 md:grid-cols-4 pb-4 md:pb-12 justify-center items-center gap-4 md:gap-8",children:[(0,o.jsx)("div",{className:"col-span-3 z-10",children:(0,o.jsx)("p",{className:"text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10",children:"Sign up to our Newsletter to and we'll keep you posted on all things TEDxNTUA"})}),(0,o.jsx)("div",{className:"col-span-3 md:col-span-1 z-10",children:(0,o.jsx)("button",{className:"bg-our-black hover:bg-our-black/90 px-5 py-3 rounded-sm mx-auto text-white font-semibold z-10",onClick:()=>t(!0),children:"Sign up"})})]}),(0,o.jsxs)("div",{className:"md:row-span-1 md:grid-cols-2 border-our-black border-t-[0.5px] z-10 pt-2 md:pt-4 hidden md:grid",children:[(0,o.jsxs)("div",{className:"col-span-1 grid md:grid-rows-3 gap-4",children:[(0,o.jsxs)("p",{className:"row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10",children:[(0,o.jsx)("span",{className:"text-our-black",children:"TEDx"}),"NTUA"]}),(0,o.jsx)("p",{className:"row-span-1 text-our-black text-sm lg:text-base font-thin z-10 w-[60%] text-justify",children:"This independent TEDx event is operated under license from TED"}),(0,o.jsx)("div",{className:"row-span-1 w-[60%]",children:(0,o.jsx)(s,{})})]}),(0,o.jsxs)("ul",{className:"col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 lg:text-2xl justify-center justify-items-center",children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/about",className:"text-our-black text-md font-bold",children:"About"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/",className:"text-our-black text-md font-bold",children:"Archive"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/newsletter",className:"text-our-black text-md font-bold",children:"Newsletter"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/watch",className:"text-our-black text-md font-bold",children:"Watch"})})]})]}),(0,o.jsxs)("div",{className:"row-span-1 grid grid-cols-2 gap-8 border-our-black border-t-[0.5px] z-10 pt-2 md:pt-4 md:hidden",children:[(0,o.jsxs)("div",{className:"col-span-1 grid grid-rows-2",children:[(0,o.jsxs)("p",{className:"row-span-1 text-white text-[1.5rem] leading-9 md:text-[2rem] lg:text-[2.5rem] md:leading-10 lg:leading-[3rem] font-bold text-justify z-10",children:[(0,o.jsx)("span",{className:"text-our-black",children:"TEDx"}),"NTUA"]}),(0,o.jsx)("p",{className:"row-span-1 :text-our-black text-sm font-thin z-10 text-justify",children:"This independent TEDx event is operated under license from TED"})]}),(0,o.jsxs)("ul",{className:"col-span-1 grid grid-cols-2 grid-rows-2 z-10 mt-4 justify-center justify-items-center",children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/about",className:"text-our-black text-md font-bold",children:"About"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/",className:"text-our-black text-md font-bold",children:"Archive"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/newsletter",className:"text-our-black text-md font-bold",children:"Newsletter"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.default,{href:"/watch",className:"text-our-black text-md font-bold",children:"Watch"})})]})]}),(0,o.jsx)("div",{className:"row-span-1 w-[80%] mx-auto z-10 md:hidden",children:(0,o.jsx)(s,{})})]}),e&&console.log(typeof t),e&&(0,o.jsx)(r.default,{isModalOpenFlag:e,setIsModalOpenFlag:t})]})]})}},4345:function(e,t,i){"use strict";i.r(t);var o=i(3827),a=i(4090);t.default=e=>{let{isHomePage:t=!1}=e,[i,n]=(0,a.useState)(t),s=()=>{let e=window.scrollY||document.documentElement.scrollTop;e>400&&n(!0),0===e&&n(!1)};return(0,a.useEffect)(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]),(0,a.useEffect)(()=>{},[i]),(0,o.jsx)("button",{className:"scroll-top-button ".concat(i?"visible":"hidden"," \n      ").concat(t?"lg:mr-6 mr-4":"mr-4"," z-10 bg-our-red text-white font-bold py-2 px-2 rounded-full fixed bottom-0 right-0 mb-4 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105"),onClick:()=>{t?document.getElementById("main-scroll-container").scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})},children:(0,o.jsx)("img",{src:"./arrow_up.png",alt:"arrow_up",className:"w-5 h-5"})})}},2164:function(){}},function(e){e.O(0,[607,75,718,971,69,744],function(){return e(e.s=16)}),_N_E=e.O()}]);