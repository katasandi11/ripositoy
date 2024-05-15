import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Section from "../layout/Section";
import Headline from "../components/Banner";

import imgService01 from "../assets/images/service/service-image-01.png";
import imgService02 from "../assets/images/service/service-image-02.png";
import imgService03 from "../assets/images/service/service-image-03.png";
import imgProduct01 from "../assets/images/product-01.png";
import imgProduct02 from "../assets/images/product-02.png";
import imgProduct03 from "../assets/images/product-03.png";
import imgProduct04 from "../assets/images/product-04.png";

const data = [
  {
    backgroundColor: "bg-gradient-to-b from-[#05C3FF]",
    image: imgService01,
    headline:
      "DEVELOPING PRODUCTS THAT CONTRIBUTE TO A GREENER, MORE ECO-FRIENDLY WORLD",
    title: "WATER LEAK DETECTION",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    link: "/service",
  },
  {
    backgroundColor: "bg-gradient-to-b from-[#9A37A2]",
    image: imgService02,
    headline:
      "DIGITAL LEAK DETECTION SYSTEMS FOR HYDROCARBON & WATER IN A DATA CENTRE",
    title: "ACID LEAK DETECTION",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    link: "/service",
  },
  {
    backgroundColor: "bg-gradient-to-b from-[#FF9900]",
    image: imgService03,
    headline:
      "WATER LEAKAGE DETECTION IS ONE OF THE IMPORTANT AND REGULAR TASKS OF THIS UTILITY TUNNEL'S INSPECTION.",
    title: "OIL LEAK DETECTION",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl condimentum id venenatis a condimentum.",
    link: "/service",
  },
];

export default function Service() {
  return (
    <Section>
      <OurService />
      <OurProduct />
    </Section>
  );
}

function OurService() {
  const [selected, setSelected] = useState<number | null>(null);
  const toggle = (i: number): void => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <Headline>OUR SERVICES</Headline>
      <div className="relative mb-32 mt-8 h-[600px]">
        <div className="absolute z-10 flex h-full w-full">
          <div className="flex h-full w-2/6 flex-col items-center justify-center text-white">
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`flex h-full w-full cursor-pointer flex-col items-center justify-center ${item.backgroundColor}`}
              >
                <h1
                  className={
                    selected === i
                      ? "hidden"
                      : "p-4 text-center text-3xl font-medium"
                  }
                >
                  {item.title}
                </h1>
                <p
                  className={
                    selected === i ? "p-4 text-center font-normal" : "hidden"
                  }
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <h1 className="flex h-[250px] w-[600px] items-center bg-black/50 p-6 text-center text-3xl font-medium text-white">
              {selected === null
                ? "TTK DIESEL OIL LEAK DETECTION SOLUTIONS FOR GENERATORS"
                : data[selected].headline}
            </h1>
            <button className="mx-24 rounded-full bg-blue-datatech px-16 py-4 text-xl font-medium text-white">
              <Link to="../projects#case-study">LEARN MORE</Link>
              {/* <a href="/projects#case-study">LEARN MORE</a> */}
            </button>
          </div>
        </div>
        <Swiper
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper h-full w-full object-cover"
        >
          <SwiperSlide>
            <img src={imgService01} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgService02} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgService03} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

function OurProduct() {
  const [productView, setProductView] = useState(<WaterProduct />);

  const handleProductView = (i: number) => {
    if (i === 0) {
      setProductView(<WaterProduct />);
    } else if (i === 1) {
      setProductView(<AcidProduct />);
    } else {
      setProductView(<OilProduct />);
    }
  };

  return (
    <>
      <Headline>OUR PRODUCT</Headline>
      <div className="relative my-8 bg-white">
        <div className="flex w-full gap-16">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => handleProductView(i)}
              className={`flex h-[200px] w-full cursor-pointer flex-col items-center justify-center p-4 text-center text-3xl font-medium text-white ${item.backgroundColor}`}
            >
              {item.title}
            </div>
          ))}
        </div>
        {productView}
      </div>
    </>
  );
}

function WaterProduct() {
  return (
    <Swiper
      className="mr-32 mt-4"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="h-[400px]">
        <Link to="water-leak-detection-any-product">
          <div className="flex h-full bg-[#1EC5FA] p-16 text-white">
            <img
              className="h-full w-auto object-cover"
              src={imgProduct01}
              alt=""
            />
            <div>
              <h1 className="mb-4 text-center text-2xl font-medium">
                NAMA PRODUK
              </h1>
              <p className="px-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Dictum fusce ut placerat orci nulla pellentesque dignissim. Ac
                tortor vitae purus faucibus ornare suspendisse sed nisi lacus.
                Nisl condimentum id venenatis a condimentum.
              </p>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <Link to="water-leak-detection-any-product">
          <div className="flex h-full justify-center bg-[#1EC5FA] text-center text-white">
            <div className="basis-2/5 p-8 text-xl font-medium">
              <h1 className="p-4">COMMERCIAL DOCUMENTS</h1>
              <h1 className="p-4">DESIGN GUIDE</h1>
              <h1 className="p-4">MODBUS COMMUNICATION</h1>
            </div>
            <hr className="h-4/5 self-center border-l border-white" />
            <div className="basis-2/5 p-8 text-xl font-medium">
              <h1 className="p-4">PRODUCT DATASHEETS</h1>
              <h1 className="p-4">SPECIFICATION</h1>
              <h1 className="p-4">OPERATION AND INSTALLATION MANUAL</h1>
            </div>
            <div className="basis-1/5">
              <h1 className="h-2/5 bg-gradient-to-b from-black/50 p-4 text-3xl font-semibold">
                DATASHEET & MODULE
              </h1>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <Link to="water-leak-detection-any-product">
          <div className="flex h-full justify-center bg-[#1EC5FA] text-center text-white">
            <div className="basis-2/5 p-8 text-xl font-medium">
              <h1 className="p-4">ALARM UNITS</h1>
              <h1 className="p-4">SENSE CABLES</h1>
            </div>
            <hr className="h-4/5 self-center border-l border-white" />
            <div className="basis-2/5 p-8 text-xl font-medium">
              <h1 className="p-4">POINT SENSORS</h1>
              <h1 className="p-4">ACCESSORIES</h1>
            </div>
            <div className="basis-1/5">
              <h1 className="h-2/5 bg-gradient-to-b from-black/50 p-4 text-3xl font-semibold">
                ANY
                <br />
                PRODUCT
              </h1>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <Link to="water-leak-detection-solutions">
          <div className="flex h-full justify-center bg-[#1EC5FA] text-center text-white">
            <div className="basis-2/5 p-8 text-xl font-medium">
              <img className="h-full" src={imgProduct02} alt="" />
            </div>
            <div className="basis-2/5 p-8 text-left text-xl font-medium">
              <h1 className="p-4">LOCATION SOLUTION</h1>
              <h2 className="ml-4 p-2 text-[#00F0FF]">
                <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/4-locating-solutions/fg-net-unit/">
                  With FG-NET Unit
                </a>
              </h2>

              <h2 className="ml-4 p-2 text-[#00F0FF]">
                <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/4-locating-solutions/fg-sys-unit/">
                  With FG-SYS Unit
                </a>
              </h2>
              <h2 className="ml-4 p-2 text-[#00F0FF]">
                <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/4-locating-solutions/fg-als8-unit/">
                  With FG-ALS8 Unit
                </a>
              </h2>
              <h2 className="ml-4 p-2 text-[#00F0FF]">
                <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/4-locating-solutions/fg-als4-unit/">
                  With FG-ALS4 Unit
                </a>
              </h2>
            </div>
            <div className="basis-1/5">
              <h1 className="h-2/5 bg-gradient-to-b from-black/50 p-4 text-3xl font-semibold">
                SOLUTIONS
              </h1>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <Link to="water-leak-detection-solutions">
          <div className="flex h-full justify-center bg-[#1EC5FA] text-center text-white">
            <div className="basis-2/5 p-8 text-xl font-medium">
              <img className="h-full" src={imgProduct03} alt="" />
            </div>
            <div className="basis-2/5 p-8 text-left text-xl font-medium">
              <h1 className="p-4">NON LOCATING SOLUTION</h1>
              <hr className="w-2/3 border-l border-white" />
              <h2 className="ml-4 p-2 text-[#00F0FF]">
                <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/non-locating-solution/fg-unit-2/">
                  With FG-A unit
                </a>
              </h2>
            </div>
            <div className="basis-1/5">
              <h1 className="h-2/5 bg-gradient-to-b from-black/50 p-4 text-3xl font-semibold">
                SOLUTIONS
              </h1>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
function AcidProduct() {
  return (
    <Swiper
      className="mr-32 mt-4 bg-[#B06AB7]"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="h-[400px]">
        <div className="flex h-full p-16 text-white">
          <img
            className="h-full w-auto object-cover"
            src={imgProduct01}
            alt=""
          />
          <div>
            <h1 className="mb-4 text-center text-2xl font-medium">
              NAMA PRODUK
            </h1>
            <p className="px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              fusce ut placerat orci nulla pellentesque dignissim. Ac tortor
              vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl
              condimentum id venenatis a condimentum.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <div className="flex h-full justify-center text-center text-white">
          <div className="basis-2/5 p-8 text-xl font-medium">
            <h1 className="p-4">COMMERCIAL DOCUMENTS</h1>
            <h1 className="p-4">DESIGN GUIDE</h1>
            <h1 className="p-4">MODBUS COMMUNICATION</h1>
          </div>
          <hr className="h-4/5 self-center border-l border-white" />
          <div className="basis-2/5 p-8 text-xl font-medium">
            <h1 className="p-4">PRODUCT DATASHEETS</h1>
            <h1 className="p-4">SPECIFICATION</h1>
            <h1 className="p-4">OPERATION AND INSTALLATION MANUAL</h1>
          </div>
          <div className="basis-1/5">
            <h1 className="h-2/5 bg-gradient-to-b from-[#903E99] p-4 text-3xl font-semibold">
              DATASHEET & MODULE
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
function OilProduct() {
  return (
    <Swiper
      className="mr-32 mt-4 bg-[#F6B24C]"
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="h-[400px]">
        <div className="flex h-full p-16 text-white">
          <img
            className="h-full w-auto object-cover"
            src={imgProduct01}
            alt=""
          />
          <div>
            <h1 className="mb-4 text-center text-2xl font-medium">
              NAMA PRODUK
            </h1>
            <p className="px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              fusce ut placerat orci nulla pellentesque dignissim. Ac tortor
              vitae purus faucibus ornare suspendisse sed nisi lacus. Nisl
              condimentum id venenatis a condimentum.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <div className="flex h-full justify-center text-center text-white">
          <div className="basis-2/5 p-8 text-xl font-medium">
            <h1 className="p-4">COMMERCIAL DOCUMENTS</h1>
            <h1 className="p-4">DESIGN GUIDE</h1>
            <h1 className="p-4">MODBUS COMMUNICATION</h1>
          </div>
          <hr className="h-4/5 self-center border-l border-white" />
          <div className="basis-2/5 p-8 text-xl font-medium">
            <h1 className="p-4">PRODUCT DATASHEETS</h1>
            <h1 className="p-4">SPECIFICATION</h1>
            <h1 className="p-4">OPERATION AND INSTALLATION MANUAL</h1>
          </div>
          <div className="basis-1/5">
            <h1 className="h-2/5 bg-gradient-to-b from-[#C28427] p-4 text-3xl font-semibold">
              DATASHEET & MODULE
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-[400px]">
        <div className="flex h-full justify-center text-center text-white">
          <div className="basis-2/5 p-8 text-xl font-medium">
            <img className="h-full" src={imgProduct04} alt="" />
          </div>
          <div className="basis-2/5 p-8 text-left text-xl font-medium">
            <h1 className="p-4">LOCATING SOLUTION</h1>
            <hr className="w-2/3 border-l border-white" />
            <h2 className="ml-4 p-2 text-[#00F0FF]">
              <a href="https://www.ttkuk.com/water-acids-leak-detection/solutions/non-locating-solution/fg-unit-2/">
                With FG-A unit
              </a>
            </h2>
            <h1 className="p-4">NON LOCATING SOLUTION</h1>
            <hr className="w-2/3 border-l border-white" />
            <h2 className="ml-4 p-2 text-[#00F0FF]">
              <a href="">FG-NET-LL Unit</a>
            </h2>
          </div>
          <div className="basis-1/5">
            <h1 className="h-2/5 bg-gradient-to-b from-black/50 p-4 text-3xl font-semibold">
              SOLUTIONS
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
