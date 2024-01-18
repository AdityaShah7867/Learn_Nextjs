import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          LETS START NEXT JS AND LEARN SOMETHING NEW EACH DAY , U MAY VISIT
          DIFFERNT BRANCHES FOR PROGRESS&nbsp;
        </p>
      </div>
      <div>
        <center>
          <p className="mt-12">LETS LEARN NEXT JS WITH TYPECRIPT</p>
          <p className="mt-16">
            FIST COMMIT CONSISTS OF LEARNING HOW THE NEXT JS ROUTER WORKS AND
            ITS SIMPLE YET SO CONVINIENT
          </p>
        </center>
      </div>
    </main>
  );
}
