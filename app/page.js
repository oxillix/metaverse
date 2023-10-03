import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <div className="flex flex-col gap-2 flex-1 text-white justify-center items-center text-center py-4 px-2 border-b-2 bg-black/40 border-[#787878]">
      <span className="text-xl">
        👨‍💻 Check out the source code{" "}
        <a
          href="https://github.com/oxillix/metaverse"
          className="underline text-blue-400 "
        >
          here
        </a>
      </span>
    </div>
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
