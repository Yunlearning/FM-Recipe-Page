// import Image from "next/image";

import Recipe from "./components/Recipe";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-recipe-rose">
      <main className="">
        <Recipe />
      </main>
    </div>
  );
}
