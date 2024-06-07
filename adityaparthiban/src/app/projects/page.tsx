import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <main className="flex flex-col flex-grow p-24 bg-slate-100">
      <nav className="flex justify-between items-center pb-24 align-middle">
          <div className="flex items-center">
            <a href="/">
            <img src="/initials.svg" alt="Logo" className="h-8 ml-8 hover:cursor-pointer" />
            </a>
          </div>
          <ul className="flex">
            <li className="mr-4">
              <a href="/projects">
                <Button variant="link" className="hover:text-zinc-900 text-blue-600 text-md">Projects</Button>
              </a>
            </li>
            <li className="mr-4">
              <a href="/case">
                <Button variant="link" className="hover:text-blue-600 text-md">Case Studies</Button>
              </a>
            </li>
            <li>
              <a href="/resume">
                <Button variant="link" className="hover:text-blue-600 text-md">Resume</Button>
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="text-4xl font-denton tracking-wide ml-8">Projects</h1>
        <p className="text-lg text-gray-600 ml-8 mt-12  ">Check in later!</p>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
