import { useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/footer";
import Step from "./components/Step";

function App() {
  const [count, setCount] = useState(0);

  function goTop() {
    document.body.scrollIntoView();
  }
  let y;
  let innerWidth = 0;
  let innerHeight = 0;

  return (
    <div className="relative flex flex-col max-w-[1400] mx-auto w-full text-sm sm:text-base min-h-screen">
      <div
        class={
          "fixed bottom-0 w-full duration-200 flex p-10 z-[10]" + y > 0
            ? "opacity-full pointer-events-auto"
            : "pointer-events-none opacity-0"
        }
      >
        <button>
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <Header />
      <Step />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
