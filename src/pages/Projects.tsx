// Import React Router Dom
import { Link } from "react-router-dom";
import imgProject1 from "../assets/images/projects/projects-01.jpg";
import imgProject2 from "../assets/images/projects/projects-02.jpg";
import imgProject3 from "../assets/images/projects/projects-03.png";
import imgProject4 from "../assets/images/projects/projects-04.png";
import imgProject5 from "../assets/images/projects/projects-05.png";
import imgProject6 from "../assets/images/projects/projects-06.png";

// Assets Import
import * as Image from "../assets/images/projects";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Layout Import
import Section from "../layout/Section";
import Footer from "../layout/Footer";

// Hooks Import
import { useEffect } from "react";

// Components Import
import {
  Card,
  CardTitle,
  CardDescription,
  CardButton,
} from "../components/ProjectCard";
import Banner from "../components/Banner";

export default function Projects() {
  return (
    <Section>
      <OurProjectSection />
      <CaseStudiesSection />
      <NeverUnderestimateSection />
      <ApplicationsSection />
      <WhyWeDoItSection />
      <ChildrenSection />
      <Footer />
    </Section>
  );
}

// Our Project Section
function OurProjectSection() {
  const OurProjectData = [
    {
      id: 1,
      link: "our-project",
      img: imgProject1,
      title: "Global Data Centers Indonesia (GDCI) – Jakarta 2",
      description:
        "Terletak di pusat kota Jakarta, Jakarta 2 Data Center mempunyai kapasitas yang terukur dengan 2.800 rak co-lokasi. Sistem jaringannya adalah salah satu dari sedikit data center yang bersifat carrier-netral di Jakarta, terhubung ke 49 carries. Terhubung adalah gedung perkantoran dimana 3 IXs ditempatkan pada terowongan tahan gempa. Pekerjaan meliputi engineering, design, instalasi and maintenance untuk: Water Leak Detection (WLD) system pada lantai 5, Water Leak Detection (WLD) system pada lantai 6, Water Leak Detection (WLD) system pada lantai 7, Water Leak Detection (WLD) system pada lantai 8, Pergantian Fuel Leak Detection (FLD) system pada lantai 2",
    },
    {
      id: 2,
      link: "our-project",
      img: imgProject2,
      title: "HyperScale Data Center (HDC) Telkom Indonesia",
      description:
        "Sebagai pendorong utama berbagai layanan dan solusi TIK di indonesia, PT. Telkom Indonesia memperbesar bisnis platform digitalnya dan merebut predikat telco digital dengan membangun Telkom HyperScale Data Center dengan sertifikasi tier 3 dan 4. Pekerjaan meliputi engineering, design, installation and service untuk: Water Leak Detection (WLD) system pada lantai 1, Fuel Leak Detection (FLD) system pada generator dan power house.",
    },
    {
      id: 3,
      link: "our-project",
      img: imgProject1,
      title: "PROJECT 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 4,
      link: "our-project",
      img: imgProject2,
      title: "PROJECT 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 5,
      link: "our-project",
      img: imgProject1,
      title: "PROJECT 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 6,
      link: "our-project",
      img: imgProject2,
      title: "PROJECT 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
  ];

  return (
    <>
      <Banner>OUR PROJECT</Banner>
      <Swiper
        className="m-8"
        spaceBetween={32}
        slidesPerView={2}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
      >
        {OurProjectData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={data.link}>
              <Card image={data.img}>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// Case Studies Section
function CaseStudiesSection() {
  const CaseStudyData = [
    {
      id: 1,
      link: "our-project",
      img: imgProject1,
      title: "PROJECT 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 2,
      link: "our-project",
      img: imgProject2,
      title: "PROJECT 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 3,
      link: "our-project",
      img: imgProject1,
      title: "PROJECT 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 4,
      link: "our-project",
      img: imgProject2,
      title: "PROJECT 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 5,
      link: "our-project",
      img: imgProject1,
      title: "PROJECT 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
    {
      id: 6,
      link: "our-project",
      img: imgProject2,
      title: "PROJECT 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Actortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    },
  ];

  // Navigating to a spesific section with Id
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1,
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="case-study" className="flex justify-center pt-32">
        <h1 className="flex items-center">
          <div className="absolute size-16 rounded-lg bg-blue-datatech"></div>
          <div className="z-10 ml-4 text-4xl font-semibold text-gray-datatech">
            CASE STUDIES
          </div>
        </h1>
      </div>
      <Swiper
        className="m-8"
        spaceBetween={32}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
      >
        {CaseStudyData.map((data) => (
          <SwiperSlide key={data.id}>
            <Card image={data.img}>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
              <CardButton to={data.link}>READ MORE</CardButton>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// Never Underestimate Section
function NeverUnderestimateSection() {
  return (
    <>
      <div className="_UP_SECTION mt-16 flex gap-32">
        <div className="_TEXT">
          <h1 className="_HEADLINE mb-8 text-4xl font-semibold text-blue-datatech">
            NEVER UNDERESTIMATE THE RISK OF WATER LEAKAGE IN A DATA CENTRE
          </h1>
          <p className="_DESCRIPTION rounded-xl bg-[#A5AEB3] p-8 font-semibold text-white">
            Water leak within a data centre is one of its{" "}
            <span className="text-blue-datatech">biggest underestimated</span>{" "}
            threats. It can rapidly lead to{" "}
            <span className="text-blue-datatech">
              equipment failure and downtime
            </span>
            . It could also potentially lead to destructive fire when water
            intrusion occurs in technical areas, such as inverter, UPS, or
            battery room and causing{" "}
            <span className="text-blue-datatech">
              {" "}
              potential catastrophic short circuits.
            </span>
          </p>
        </div>
        <img
          className="_IMAGE_DATA_CENTER h-[400px] w-auto"
          src={imgProject4}
        />
      </div>
      <div className="_DOWN_SECTION mt-16 flex gap-24">
        <img className="_IMAGE_PRODUCT h-[300px]" src={imgProject3} />
        <div className="_TEXT">
          <h1 className="_HEADLINE mb-4 text-4xl font-semibold text-[#FF0404]">
            Dangers of Fuel Oil Leaks
          </h1>
          <div className="_DESCRIPTION space-y-8 rounded-xl bg-[#A5AEB3] p-8 font-semibold text-white">
            <p>
              In the Oil and Gas industry, hydrocarbon leaks may cause
              <span className="text-blue-datatech">
                irreversible damage to personnel , business or the ecosystem.
              </span>{" "}
              The regulatory framework is also increasing in this sector.
            </p>
            <p>
              In building environments, non-detected diesel oil leakage on
              generators{" "}
              <span className="text-blue-datatech">
                can be extremely detrimental with potentially severe
                consequences, especially in data centres, healthcare sites,
                airports, or critical mission facilities.
              </span>
            </p>
            <p>
              Consequently, it is imperative to consider an efficient detection
              system to protect your production / distribution lines and diesel
              generators from hydrocarbon leaks
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Applications Section
function ApplicationsSection() {
  return (
    <>
      <div className="_LIST mt-16 grid grid-cols-2 gap-8">
        <img className="h-auto w-full" src={imgProject5} alt="" />
        <div className="space-y-4">
          <h1 className="text-3xl font-normal text-blue-datatech">
            Applications
          </h1>
          <p>
            TTK offers tailored solutions with innovative technologies to
            protect property from water and acid leakages. TTK systems are being
            uti- lized to protect Data Centers, critical IT infras- tructures,
            telecommunication facilities, as well as banks, military,
            government, museum and laboratories, to name but a few.
          </p>
        </div>
      </div>
      <div className="_LIST mt-16 grid grid-cols-2 gap-8">
        <img className="h-auto w-full" src={imgProject6} alt="" />
        <div className="space-y-4">
          <h1 className="text-3xl font-normal text-blue-datatech">
            Applications
          </h1>
          <p>
            TTK offers tailored solutions with innovative technologies to
            protect property from water and acid leakages. TTK systems are being
            uti- lized to protect Data Centers, critical IT infras- tructures,
            telecommunication facilities, as well as banks, military,
            government, museum and laboratories, to name but a few.
          </p>
        </div>
      </div>
    </>
  );
}

// Why We Do It Section
function WhyWeDoItSection() {
  return (
    <div className="relative mt-16">
      <img
        className="h-[400px] w-full bg-pink-100 object-cover"
        src={Image.WhyWeDoItBackground}
        alt=""
      />
      <div className="absolute top-32 flex w-full flex-col items-center justify-center gap-32 font-semibold text-white">
        <h1 className="text-8xl">WHY WE DO IT</h1>
        <p className="mx-64 text-center text-2xl">
          Good business is safe for the environment, company and society, doing
          what is good for society, the country, the climate and the company -
          only by fulfilling this can business be sustainable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-24 bg-blue-datatech p-16 font-semibold text-white">
        <div className="relative flex h-fit w-full items-center bg-pink-100">
          <img
            className="z-0 h-full w-full object-cover"
            src={Image.Firefighter}
            alt=""
          />
          <p className="absolute z-10 w-full bg-[#0A40FF]/30 py-8 text-center text-xl">
            fire caused by the company
          </p>
        </div>
        <div className="relative flex h-fit w-full items-center bg-pink-100">
          <img
            className="z-0 h-full w-full object-cover"
            src={Image.SafetyFirst}
            alt=""
          />
        </div>
        <div className="space-y-8">
          <div className="relative flex h-fit w-full items-center bg-pink-100">
            <img
              className="z-0 h-full w-full object-cover"
              src={Image.WhyWeDoIt01}
              alt=""
            />
            <p className="absolute z-10 w-full bg-[#0A40FF]/30 py-8 text-center text-xl">
              prevent flooding in the company
            </p>
          </div>
          <div className="relative flex h-fit w-full items-center bg-pink-100">
            <img
              className="z-0 h-full w-full object-cover"
              src={Image.WhyWeDoIt02}
              alt=""
            />
            <p className="absolute z-10 w-full bg-[#0A40FF]/30 py-8 text-center text-xl">
              poisoning with dangerous substances
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Children Section
function ChildrenSection() {
  return (
    <div className="relative flex h-[500px] items-center">
      <img
        className="absolute z-0 h-full w-full object-cover"
        src={Image.WhyWeDoIt03}
        alt=""
      />
      <p className="z-10 mx-16 text-center text-8xl font-semibold text-white">
        Love yourself, your work environment and the surrounding community
      </p>
    </div>
  );
}
