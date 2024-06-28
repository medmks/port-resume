import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar.component";
import {
  Profile,
  Aboutme,
  Experience,
  Skills,
  Footer,
  Work,
} from "~/components";

Navbar;
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="bg-customColor relative z-0  h-full">
      <div className="relative z-0">
        <div className=" sm:pt-36 pt-16 ">
          <Profile />
        </div>
        <Aboutme />
        <Experience />
        <Skills />
        <Work />
        <div className=" sm:pb-36 pb-16 ">
          <Footer />
        </div>
      </div>
    </main>
  );
}
