import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <main className="flex flex-col flex-grow p-24">
        <nav className="flex justify-between items-center pb-24 align-middle">
          <div className="flex items-center">
            <img src="/initials.svg" alt="Logo" className="h-8 ml-8 hover:cursor-pointer" />
          </div>
          <ul className="flex">
            <li className="mr-4"><Button variant="link" className="hover:text-blue-600 text-md">Projects</Button></li>
            <li className="mr-4"><Button variant="link" className="hover:text-blue-600 text-md">Case Studies</Button></li>
            <li><Button variant="link" className="hover:text-blue-600 text-md">Resume</Button></li>
          </ul>
        </nav>
        <div className="w-full max-w-4xl pl-8">
          <h1 className="text-6xl font-denton tracking-normal text-zinc-900">
            Building with <span className="text-blue-600">passion</span> <br />
            and <span className="text-blue-600">purpose.</span>
          </h1>
          <p className="text-zinc-900 pt-12 text-md">
            Hi, I'm Aditya! I'm a second-year Computer Science and Engineering undergraduate based in Bangalore.<br /> 
            I'm super passionate about creating things on the web. I have a solid grasp of frontend development<br />
            and am actively expanding my backend skills. UX design is close to my heart because I believe that<br />
            great user experiences can make a significant difference.<br />
            <br />
            I'm always on the lookout for exciting projects and collaborations that can help me grow as a developer.<br />
            Currently, I'm working on an exciting open-source project, Lamp, which aims to<br />
            simplify the process of creating and managing web applications.<br />
            <br />
            Feel free to reach out—my DMs are always open to discuss code, cricket, Formula 1, and Harry Potter!
          </p>
        </div>
        <div className="mt-12 flex-col">
          <Button variant="link" className="hover:text-blue-600 ml-4 text-md">Know More</Button>
        </div>
        <div className="flex-col">
          <Button variant="link" className="hover:text-blue-600 ml-4 text-md">View Projects</Button>
        </div>
      </main>
      <div className="mt-auto">
      <Footer/>
      </div>
    </div>
  );
}
