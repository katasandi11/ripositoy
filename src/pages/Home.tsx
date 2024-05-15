// Assets Import
import * as Image from "../assets/images/home";
import { SearchIcon } from "lucide-react";

// Layout Import
import Section from "../layout/Section";
import Footer from "../layout/Footer";

// Hooks Import
import { useTypingEffect } from "../hooks/typing-effect";

// Maps Leaflet Import
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <Section>
      <Hero />
      <Contact />
      <WeCareForYou />
      <GoodToKnow />
      <DrilledMen />
      <GlobalContact />
      <Footer />
    </Section>
  );
}

function Hero() {
  return (
    <section className="flex items-center justify-center pt-24">
      <div className="relative flex items-center">
        <h1 className="absolute top-0 z-10 font-semibold text-white lg:left-16 lg:text-3xl">
          <span className="rounded-lg bg-blue-datatech py-[12px] pl-[20px] pr-1">
            PT.
          </span>{" "}
          Infra Data Tech Indonesia
        </h1>
        <div className="absolute z-10 bg-gradient-to-b from-white to-white/30 lg:right-4 lg:w-2/5 lg:rounded-lg lg:px-4 lg:py-4">
          <h2 className="font-bold lg:mb-4 lg:text-sm">
            PT. Infra Datatech Indonesia
          </h2>
          <p className="lg:text-xs">
            merupakan perusahaan yang bergerak dibidang sensor air, gas, dan minyak yang bekerja sama dengan produk luar negeri yang bernama TTK
          </p>
        </div>
        <img
          src={Image.Hero1}
          alt=""
          className="z-[5] aspect-[8/3.5] rounded-xl object-cover lg:h-[400px]"
        />
      </div>
      <img
        className="absolute left-4 aspect-[8/3.5] object-cover lg:h-[350px] lg:rounded-xl"
        src={Image.Hero2}
        alt="Ban Mobil"
      />
      <img
        className="absolute right-4 aspect-[8/3.5] object-cover lg:h-[350px] lg:rounded-xl"
        src={Image.Hero3}
        alt="Rapat"
      />
    </section>
  );
}

function Contact() {
  return (
    <section className="relative my-[100px] flex h-[500px] items-center justify-center">
      <div className="absolute left-0 z-10 flex w-2/5 flex-col items-end gap-4 rounded-r-3xl bg-blue-datatech px-4 py-8">
        <h2 className="w-2/3 text-xl font-medium text-white">
          "The Leading Digital Infrastructure Data Center"
        </h2>
        <a
          href="#"
          className="flex w-2/3 items-center gap-2 text-xl font-medium"
        >
          <span className="h-[2px] w-full bg-black"></span>
          <span className="whitespace-nowrap">view more</span>
        </a>
      </div>
      <img
        className="absolute right-0 aspect-square h-auto w-1/2 rounded-2xl object-cover object-center lg:h-[400px]"
        src={Image.ContactBackground}
        alt="Orang ngeliatin laptop"
      />
      <div className="absolute bottom-0 flex w-fit items-center rounded-full bg-blue-datatech pl-8 pr-4">
        <h1 className="text-2xl font-medium text-white">CONTACT US:</h1>
        <div className="flex gap-4 p-4">
          <a href="">
            <img className="h-[64px]" src={Image.GMaps} alt="Google Maps" />
          </a>
          <a href="">
            <img className="h-[64px]" src={Image.Gmail} alt="Gmail" />
          </a>
          <a href="">
            <img className="h-[64px]" src={Image.WhatssApp} alt="WhatsApp" />
          </a>
          <a href="">
            <img className="h-[64px]" src={Image.Contact} alt="Contacts" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WeCareForYou() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-blue-datatech px-32 pb-24 pt-8 font-semibold text-white">
      <h1 className="text-4xl">We care for you 🤍</h1>
      <div className="flex gap-8">
        <div className="relative h-[200px] w-[1/3] rounded-xl bg-[#50B6BA] p-4">
          <h1>Identify and find leaks in your water piping system</h1>
          <img
            className="absolute bottom-4 right-4 h-[128px]"
            src={Image.WeCare1}
            alt=""
          />
        </div>
        <div className="relative h-[200px] w-[2/3] rounded-xl bg-[#B06AB7] p-4">
          <h1>
            Identify and locate leaks in your system that contain acids or other
            dangerous chemicals.
          </h1>
          <img
            className="absolute bottom-4 right-4 h-[128px]"
            src={Image.WeCare2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function GoodToKnow() {
  return (
    <div className="flex gap-16 bg-blue-datatech p-16 font-semibold text-white">
      <div className="mt-8 flex w-[30%] flex-col justify-center gap-2 rounded-3xl bg-[#F6B24C] p-8">
        <h1 className="text-center text-xl">
          Identify and locate oil leaks in your system
        </h1>
        <img className="" src={Image.GoodToKnow1} alt="" />
      </div>
      <div className="flex w-[70%] flex-col items-center gap-8">
        <div>
          <h1 className="text-4xl">Good To Know ✨</h1>
          <hr className="mt-2 w-full border-l border-white" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-4 rounded-2xl bg-white p-4 py-8">
            <img className="h-[80px]" src={Image.GoodToKnow2} alt="" />
            <p className="text-xs text-[#88888E]">
              The FG-NET control unit as well as all TTK products, are covered
              by a{" "}
              <span className="text-[#D4389D]">
                10-year manufacturer's warranty.
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl bg-white p-4 py-8">
            <img className="h-[80px]" src={Image.GoodToKnow3} alt="" />
            <p className="text-xs text-[#88888E]">
              TTK acid sensing cables have a proven high resistance to fire and
              abrasion. They have passed the most rigorous test for{" "}
              <span className="text-[#D4389D]">
                plenum cables, NFPA 262 / UL 910
              </span>{" "}
              and <span className="text-[#D4389D]">UL 719</span> tests in 2007.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl bg-white p-4 py-8">
            <img className="h-[80px]" src={Image.GoodToKnow4} alt="" />
            <p className="text-xs text-[#88888E]">
              All TTK water sensing cables are manufactured exclusively with{" "}
              <span className="text-[#D4389D]">
                Low Smoke and Halogen Free materials
              </span>{" "}
              (LSZH or LSOH) since 2019.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-2xl bg-white p-4 py-8">
            <img className="h-[80px]" src={Image.GoodToKnow5} alt="" />
            <p className="text-xs text-[#88888E]">
              In addition to the FG-NET system, TTK offers ranges of
              cost-effective{" "}
              <span className="text-[#D4389D]">
                digital and analogue detection systems
              </span>{" "}
              suitable for different scales and installation needs. No project
              is too big or too small for us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DrilledMen() {
  return (
    <div className="mx-auto flex w-[60%] flex-col items-center justify-between gap-[200px] pb-[200px] pt-24">
      <div className="relative w-full rounded-2xl bg-blue-datatech py-4 pl-24 pr-4 font-bold text-white">
        <h1>
          We are dedicated to creating(and increasing) positive social, health,
          safety, economic impacts for our user ecosystem.
        </h1>
        <img
          className="absolute -left-24 top-0 h-[300px]"
          src={Image.Drilling1}
          alt=""
        />
      </div>
      <div className="relative flex w-fit items-center gap-2 self-end rounded-full bg-[#00D72F] px-10 py-4 font-bold text-white">
        <img className="h-[50px]" src={Image.SafetyFirst} alt="" />
        <h1>Let's create a safe environment for your company</h1>
        <img
          className="absolute -right-8 top-16 h-[150px]"
          src={Image.Drilling2}
          alt=""
        />
      </div>
    </div>
  );
}

function GlobalContact() {
  const placeholder = useTypingEffect("Infra Datatech Indonesia", 500);
  return (
    <section className="">
      <div className="_FIRST flex">
        <div className="_GLOBE relative w-2/5 overflow-hidden">
          <div className="absolute top-[100px] z-10 px-16 ">
            <h1 className="text-4xl font-semibold text-[#A5AEB3]">
              GLOBAL CONTACT
            </h1>
            <p className="mt-8 font-semibold text-white">
              With offices in Europe, Asia, the Middle East and North America,
              we are perfectly placed to offer you tailored solutions for water,
              acid or hydrocarbon leak detection. Contact us for more
              information.
            </p>
          </div>
          <img
            className="absolute -left-[100px] top-0 z-0  min-w-[600px]"
            src={Image.Earth1}
            alt=""
          />
        </div>
        <div className="_CONTENT w-3/5">
          <img src={Image.Maps} alt="" />
          <table className="mt-8 w-1/2 table-auto">
            <thead>
              <tr className="bg-blue-datatech text-white">
                <th className="border-2 border-white px-4 py-2 text-left font-semibold">
                  EROUPE
                </th>
                <th className="border-2 border-white px-4 py-2 text-left font-semibold">
                  ASIA PACIFIC
                </th>
                <th className="border-2 border-white px-4 py-2 text-left font-semibold">
                  MIDDLE EAST
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-2 border-white px-4 py-2 align-top text-blue-datatech">
                  <h1 className="mb-4 text-left text-lg font-semibold">
                    France
                  </h1>
                  <p>
                    TTK S.A.S. (Paris Headquarter) 19, Rue du Général Foy 75008
                    Paris Tel.+33.1.56.76.90.10 Fax.+33.1.55.90.62.15 www.ttk.fr
                    ventes@ttk.fr
                  </p>
                  <h1 className="my-4 text-left text-lg font-semibold">
                    Gerrmany
                  </h1>
                  <p>
                    TTK Deutschland GmbH (Frankfurt) Berner Strasse 34 60437
                    Frankfurt Deutschland Tel.+49.69.95.00.56.30
                    Fax.+49.69.95.00.56.40 www.ttk-gmbh.de vertrieb@ttk-gmbh.de
                  </p>
                  <h1 className="my-4 text-left text-lg font-semibold">
                    TTK Europe (The Benelux countries, Scandinavia, Switzerland,
                    Italy, Spain)
                  </h1>
                  <p>
                    19, Rue du Général Foy 75008 Paris Tel.+33.1.56.76.90.10
                    Fax.+33.1.55.90.62.15
                  </p>
                </td>
                <td className="border-2 border-white px-4 py-2 align-top text-blue-datatech">
                  <h1 className="mb-4 text-left text-lg font-semibold">
                    China
                  </h1>
                  <p>
                    TTK Asia Ltd (Hong Kong) 2107-2108 Kai Tak Commercial
                    Building 317 Des Voeux Road Central Hongkong
                    Tel.+852.2858.7128 Fax.+852.2858.8428 www.ttkasia.com
                    info@ttkasia.com
                  </p>
                </td>
                <td className="border-2 border-white px-4 py-2 align-top text-blue-datatech">
                  <h1 className="mb-4 text-left text-lg font-semibold">EAU</h1>
                  <p>
                    TTK ME (Dubai) Building 6EA, Office 328 PO Box 54925 Dubai
                    Airport Free Zone UAE Christophe Galmiche TTK ME Regional
                    Manager Tel. +971 4 70 17 553 Fax.+971 4 368 27 35 Mob. +971
                    50 259 66 29 www.ttkuk.com cgalmiche@ttk.fr
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="_CONTENT mt-16 flex justify-between">
        <div className="_LEFT space-y-8">
          <div className="flex items-center rounded-full border border-gray-300 px-4">
            <img className="h-5 w-auto" src={Image.GMapsIcon} alt="" />
            <input
              type="text"
              placeholder={placeholder}
              className="w-full px-4 py-2 focus:outline-none"
            />
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <p className="font-semibold text-blue-datatech">
            LEEON Jl. Moch. Kahfi II No.23 RT.07/RW.03 Cipedak, <br /> Kec.
            Jagakarsa - Jakarta Selatan 12630 <br />
            <br /> Phone: +628118201430 <br /> Email: sylviana@datatech.co.id
          </p>
        </div>
        <div className="_RIGHT">
          <MapContainer
            className="z-50 h-[300px] w-[500px]"
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="_GLOBE relative">
        <img className="h-auto w-full" src={Image.Earth2} alt="" />
        <h1 className="absolute bottom-8 flex items-center">
          <div className="absolute size-16 rounded-lg bg-blue-datatech"></div>
          <div className="z-10 ml-4 text-4xl font-semibold text-[#05FF00]">
            INDONESIA CONTACT
          </div>
        </h1>
      </div>
    </section>
  );
}
