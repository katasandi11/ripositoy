import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Partnership from "./pages/Partnership";
import Service from "./pages/Service";
import Product from "./pages/Product";
import FgNet from "./pages/products/FgNet";
import NavigationBar from "./layout/NavigationBar";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";
import OurProject from "./pages/OurProject";
import ListCertificate from "./pages/ListCertificate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path="our-project" element={<OurProject />} />
          <Route path="case-study" element={<CaseStudy />} />
        </Route>
        <Route path="/partnership">
          <Route index element={<Partnership />} />
          <Route path="list-certificate" element={<ListCertificate />} />
        </Route>
        <Route path="/service">
          <Route index element={<Service />} />
          <Route path="water-leak-detection-any-product">
            <Route index element={<Product />} />
            <Route path="fg-net" element={<FgNet />} />
          </Route>
          <Route
            path="water-leak-detection-solutions"
            element={<Solutions />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
