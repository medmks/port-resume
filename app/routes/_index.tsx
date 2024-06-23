import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/navbar.component";
import { Profile} from "~/components";

Navbar
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
            <main className="bg-customColor h-screen w-full">
                <Profile/>
            </main>
  );
}
