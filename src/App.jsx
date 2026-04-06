import { Route, Routes } from "react-router";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import InformationDesk from "./pages/InformationDesk";
import MajorActivities from "./pages/MajorActivities";
import OurInitiatives from "./pages/OurInitiatives";
import { CommunityRadioInternship, ESHG, OurPartners, RuralMuseum } from "./pages/Otherpages";
import Gallery from "./pages/Gallery";
import NewsAndStories from "./pages/NewsAndStories";
import Members from "./pages/Members";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/information-desk" element={<InformationDesk />} />
        <Route path="/major-activities" element={<MajorActivities />} />
        <Route path="/initiatives" element={<OurInitiatives />} />
        <Route path="/news-and-stories" element={<NewsAndStories />} />
        <Route path="/partners" element={<OurPartners />} />
        <Route path="/radio-internship" element={<CommunityRadioInternship />} />
        <Route path="/e-shg" element={<ESHG />} />
        <Route path="/rural-museum" element={<RuralMuseum />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
