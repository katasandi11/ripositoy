import { useState } from "react";

import { Datatech } from "../assets/images/company-logo";
import iconSenseCables from "../assets/images/product/sense-cables-icon.png";
import imgAlarmsUnit01 from "../assets/images/product/alarms-unit-01.png";
import imgAlarmsUnit02 from "../assets/images/product/alarms-unit-02.png";
import imgAlarmsUnit03 from "../assets/images/product/alarms-unit-03.png";
import imgSenseCables01 from "../assets/images/product/sense-cables-01.png";
import imgSenseCables02 from "../assets/images/product/sense-cables-02.png";
import imgSenseCables03 from "../assets/images/product/sense-cables-03.png";
import imgSolutions01 from "../assets/images/solutions/img-solutions-01.png";
import imgSolutions02 from "../assets/images/solutions/img-solutions-02.png";

import { Link } from "react-router-dom";

const data = {
  alarmUnits: [
    {
      id: 1,
      link: "fg-net",
      image: imgAlarmsUnit01,
      type: "LOCATING UNITS",
      name: "FG-NET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl ",
    },
    {
      id: 2,
      link: "fg-sys",
      image: imgAlarmsUnit02,
      type: "LOCATING UNITS",
      name: "FG-SYS",
      description:
        "Monitoring up to 120 lengths of sense cables on 3 independent zones, the FG-SYS is the most widely installed panel around the world over the past decade. Suitable for both water and acid leak detection.",
    },
    {
      id: 3,
      link: "fg-als8",
      image: imgAlarmsUnit03,
      type: "LOCATING UNITS",
      name: "FG-ALS8",
      description:
        "NEW PRODUCT: With 8 independent detection zones and up to 100 metres of sense cable per zone, the FG-ALS8 is ideal for medium and large applications where the precise water/acid leak location is required.",
    },
  ],
  senseCables: [
    {
      id: 1,
      link: "fg-ec",
      image: imgSenseCables01,
      type: "Water Sense Cables",
      name: "FG-EC",
      description:
        "The FG-EC digital and addressable sense cable (with microprocessor and a high visibility LED embedded) detects and pin-points the location of water and base liquids leaks at any point along its length. The FG-EC is insensitive to dust and metal particle contaminations, and, what’s more, from 1st July 2019, all FG-EC cables are made in low smoke zero halogen (LSZH or LZ0H) materials, it emits limited smoke and no halogen when exposed to high sources of heat.",
    },
    {
      id: 2,
      link: "fg-ecs",
      image: imgSenseCables02,
      type: "Water Sense Cables",
      name: "FG-ECS",
      description:
        "The FG-ECS works in two ways: When connected to the locating unit it detects and pin-points the position of the leak ~or~ when connected to the non-locating unit it detects the leak without pin-point mapping. To one end is 3.5 metres of TTK BUS 8723 jumper cable, whilst to the other there is an end termination enabling quick connection. From 1st July 2019, all FG-ECS cables are made in low smoke zero halogen (LSZH or LZ0H) materials, it emits limited smoke and no halogen when exposed to high sources of heat.",
    },
    {
      id: 3,
      link: "fg-ecx",
      image: imgSenseCables03,
      type: "Water Sense Cables",
      name: "FG-ECX",
      description:
        "The FG-ECX sense cable is analogue and designed to be connected to the FG-ALS8, FG-ALS4 and FG-A units. This cable detects and pin-points the location of leaks when it is connected to the locating units; and detects leaks without specific mapping when connected to the non-locating unit. The FG-ECX sense cable is made with special Low Smoke Zero Halogen materials (LSZH or LS0H).",
    },
  ],
  accesories: [
    {
      id: 1,
      link: "fg-clc",
      image: imgSenseCables01,
      type: "Water Sense Cables",
      name: "FG-CLC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ],
};

export default function CaseStudy() {
  const [productView, setProductView] = useState(<AlarmsUnit />);

  const handleProductView = (i: number) => {
    if (i === 0) {
      setProductView(<AlarmsUnit />);
    } else if (i === 1) {
      setProductView(<SenseCables />);
    } else {
      setProductView(<Accesories />);
    }
  };
  return (
    <>
      <div className="container mx-auto flex bg-white font-poppins">
        <div className="relative left-0 top-0 min-w-[350px]">
          <div className="fixed top-0 z-[100] h-fit min-w-[350px] bg-blue-datatech p-8">
            <Link to="/" className="">
              <img
                src={Datatech}
                alt="Logo Datatech"
                className="h-auto w-full"
              />
            </Link>
            <ul className="my-16 flex flex-col gap-4 text-2xl font-medium text-white">
              <li
                onClick={() => handleProductView(0)}
                className="cursor-pointer py-4 pl-8"
              >
                CASE STUDY 1
              </li>
              <hr className="w-full border-l border-white" />
              <li
                onClick={() => handleProductView(1)}
                className="cursor-pointer py-4 pl-8"
              >
                CASE STUDY 2
              </li>
              <hr className="w-full border-l border-white" />
              <li className="cursor-pointer py-4 pl-8">CASE STUDY 3</li>
              <hr className="w-full border-l border-white" />
              <li
                onClick={() => handleProductView(2)}
                className="cursor-pointer py-4 pl-8"
              >
                PRIVACY POLICY
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">{productView}</div>
      </div>
    </>
  );
}

function AlarmsUnit() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="_ICON flex items-center gap-4">
        <h1 className="text-4xl font-semibold text-blue-datatech">
          CASE STUDY 1
        </h1>
      </div>
      <hr className="_DIVIDER w-2/3 border-l border-blue-datatech" />
      <div className="_CONTENT flex gap-8 text-blue-datatech">
        <div className="_LEFT_SECTION flex w-1/2 flex-col gap-4">
          <img className="h-auto w-full" src={imgSolutions01} alt="" />
          <h2 className="text-2xl font-semibold text-blue-datatech">
            Lanjutan Case Study
          </h2>
          <p className="font-normal">{data.alarmUnits[0].description}</p>
        </div>
        <div className="_LEFT_SECTION flex w-1/2 flex-col gap-4">
          <h2 className="text-center text-2xl font-semibold text-blue-datatech">
            Judul Case Study
          </h2>
          <p className="font-normal">{data.alarmUnits[0].description}</p>
          <img className="h-auto w-full" src={imgSolutions02} alt="" />
        </div>
      </div>
    </div>
  );
}

function SenseCables() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center gap-4">
        <img className="h-[64px] w-auto" src={iconSenseCables} alt="" />
        <h1 className="text-4xl font-semibold text-blue-datatech">
          SENSE CABLES
        </h1>
      </div>
      <hr className="w-2/3 border-l border-blue-datatech" />
      <h2 className="font-base text-4xl text-blue-datatech">
        LOCATING SOLUTION
      </h2>
      <ul className="grid grid-cols-3">
        {data.senseCables.map((item) => (
          <Link key={item.id} to={item.link}>
            <li className="flex flex-col p-4 text-blue-datatech">
              <img className="h-[200px] w-fit" src={item.image} alt="" />
              <div className="w-fit text-center">
                <h1 className="text-2xl font-semibold">{item.type}</h1>
                <h3 className="text-xl font-medium">{item.name}</h3>
              </div>
              <p className="mt-8 font-medium">{item.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

function Accesories() {
  return (
    <div className="flex flex-col gap-4 p-8 px-32">
      <h1 className="border-y border-blue-datatech py-4 text-center text-4xl font-semibold text-blue-datatech">
        PRIVACY POLICY
      </h1>
      <p className="font-normal text-blue-datatech">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Ac tortor vitae purus
        faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id
        venenatis a condimentum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Dictum fusce ut placerat orci nulla pellentesque
        dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
        lacus. Nisl condimentum id venenatis a condimentum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Ac tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus. Nisl condimentum id venenatis a
        condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
        fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae
        purus faucibus ornare suspendisse sed nisi lacus. Nisl Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Ac tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut
        placerat orci nulla pellentesque dignissim. Ac tortor vitae purus
        faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id
        venenatis a condimentum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Dictum fusce ut placerat orci nulla pellentesque
        dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
        lacus. Nisl condimentum id venenatis a condimentum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Ac tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus. Nisl Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Dictum fusce ut placerat orci nulla pellentesque
        dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
        lacus. Nisl condimentum id venenatis a condimentum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
        pellentesque dignissim. Ac tortor vitae purus faucibus ornare
        suspendisse sed nisi lacus. Nisl condimentum id venenatis a
        condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
        fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae
        purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id
        venenatis a condimentum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Dictum fusce ut placerat orci nulla pellentesque
        dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
        lacus. Nisl
      </p>
    </div>
  );
}
