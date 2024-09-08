import Introduce from "./introduce";
import History from "./history";
import Hyhi from "./hyhi";
import Hymipo from "./hymipo";
import SmartFactory from "./smartFactory";
import Clovine from "./clovine";
import Iuniverse from "./iuniverse";
import Cartax from "./cartax";
import dev from "./developer.module.scss";
export default function Home() {
  return (
    <div>
      <div id={dev.smallStars}></div>
                <div id={dev.middleStars}></div>
                <div id={dev.bigStars}></div>
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Introduce />
        <History />
        <Hyhi/>
        <Hymipo/>
        <SmartFactory />
        <Clovine />
        <Iuniverse />
        <Cartax />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          🏃🏻‍♂️‍➡️
          익숙함에 안주하지 말자
        </span>
      </footer>
    </div>
    </div>
    
  );
}
