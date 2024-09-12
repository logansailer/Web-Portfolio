import { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/footer";
import Step from "./components/Step";

function App() {
  let y;
  const [offset, setOffset] = useState(0);

  const onScroll = () => setOffset(window.scrollY);
  window.addEventListener("scroll", onScroll);

  console.log(offset);

  function goTop() {
    document.body.scrollIntoView();
  }

  return (
    <div className="relative flex flex-col max-w-[1400] mx-auto w-full text-sm sm:text-base min-h-screen">
      <div
        className={
          "fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
          (y > 0
            ? "opacity-full pointer-events-auto"
            : "pointer-events-none opacity-0")
        }
      >
        <button
          onClick={goTop}
          className="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <Header y={offset} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
