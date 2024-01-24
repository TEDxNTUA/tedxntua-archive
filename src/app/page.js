import FirstScroll from "@/components/MainPage/1stScroll";
import SecondScroll from "@/components/MainPage/2ndScroll";

import TEDxInNumbers from "@/components/TEDInNumbers/TEDxInNumbers";

function HomePage() {
  return (
    <main>
      <FirstScroll />
      <SecondScroll />
      <div className="bg-black pt-6">
        <TEDxInNumbers />
      </div>
    </main>
  );
}

export default HomePage;
