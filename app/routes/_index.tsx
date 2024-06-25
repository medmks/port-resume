import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar.component";
import { Profile, Aboutme, Experience, Skills } from "~/components";

Navbar;
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="bg-customColor relative z-0  h-[440vh] ">
      <div className="relative z-0">
        <div className=" sm:pt-36 pt-16 ">
          <Profile />
        </div>
        <Aboutme />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
