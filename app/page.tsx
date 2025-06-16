import App from "@/app/components/App";
import Navbar from "@/app/components/Navbar/navbar";
import "./globals.css";
import tempMovieData from "@/app/components/tempMovieData";
import tempWatchedData from "@/app/components/tempWatchedData";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <App tempMovieData={tempMovieData} tempWatchedData={tempWatchedData} />
    </div>
  );
}
