//import App from "@/app/components/App";
import Navbar from "@/app/components/Navbar/navbar";
import "./globals.css";
import tempMovieData from "@/app/components/tempMovieData";
import tempWatchedData from "@/app/components/tempWatchedData";
import Box1 from "@/app/components/Box-1/box1";
import Box2 from "@/app/components/Box-2/box2";
import Logo from "@/app/components/Navbar/logo";
import Search from "@/app/components/Navbar/search";
import NumResults from "@/app/components/Navbar/numResults";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar movies={tempWatchedData}>
        <Logo />
        <Search />
        <NumResults movies={tempWatchedData} />
      </Navbar>
      <main className="main">
        <Box1 tempMovieData={tempMovieData} />
        <Box2 tempWatchedData={tempWatchedData} />
      </main>
    </div>
  );
}
