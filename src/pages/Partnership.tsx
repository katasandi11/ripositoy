import Section from "../layout/Section";

import { useState } from "react";

import { Link } from "react-router-dom";

import imgBackground from "../assets/images/partnership-background-image.png";
import imgTelkomIndonesia from "../assets/images/partnership-logo/telkom-indonesia.png";
import imgTelkomSigma from "../assets/images/partnership-logo/telkomsigma.png";
import imgMicrosoft from "../assets/images/partnership-logo/microsoft.png";
import imgAmazon from "../assets/images/partnership-logo/amazon.png";
import imgCreditSuisse from "../assets/images/partnership-logo/credit-suisse.png";
import { TTK } from "../assets/images/company-logo";
import warantyLogo from "../assets/images/waranty-10-years-logo.png";
import certificate01 from "../assets/images/certificate-01.png";
import certificate02 from "../assets/images/certificate-02.png";
import imgPartnership01 from "../assets/images/partnership-image-01.png";
import globarCertificate01 from "../assets/images/global-certificate-logo-01.png";
import globarCertificate02 from "../assets/images/global-certificate-logo-02.png";
import globarCertificate03 from "../assets/images/global-certificate-logo-03.png";
import globarCertificate04 from "../assets/images/global-certificate-logo-04.png";
import globarCertificate05 from "../assets/images/global-certificate-logo-05.png";
import globarCertificate06 from "../assets/images/global-certificate-logo-06.png";
import globarCertificate07 from "../assets/images/global-certificate-logo-07.png";
import iconWorkWithUs01 from "../assets/images/icon-01.png";
import iconWorkWithUs02 from "../assets/images/icon-02.png";
import iconWorkWithUs03 from "../assets/images/icon-03.png";
import iconWorkWithUs04 from "../assets/images/icon-04.png";
import iconWorkWithUs05 from "../assets/images/icon-05.png";
import iconWorkWithUs06 from "../assets/images/icon-06.png";
import imgFeedback01 from "../assets/images/feedback-img-01.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { XCircle, MessageCircleMore } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Partnership() {
  return (
    <Section>
      <div className="relative mt-[50px] flex w-full justify-center">
        <div className="relative">
          <h1 className="absolute left-16 top-8 z-10 text-4xl font-semibold text-white">
            <span className="rounded-xl bg-blue-datatech py-2 pl-4">PA</span>
            RTNERSHIP
          </h1>
          <img
            className="h-[400px] w-auto object-cover"
            src={imgBackground}
            alt="Partnership background"
          />
        </div>
        <h2 className="absolute -bottom-8 rounded-full bg-blue-datatech px-32 py-4 text-4xl font-medium text-white">
          They Trust Us:
        </h2>
      </div>
      <Swiper
        className="m-8 mt-[80px] h-[100px]"
        spaceBetween={32}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <PartnershipLogo
            image={imgTelkomIndonesia}
            height={100}
            alt="Telkom Indonesia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo
            image={imgTelkomSigma}
            height={32}
            alt="Telkom Sigma"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo image={imgMicrosoft} height={32} alt="Microsoft" />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo image={imgAmazon} height={32} alt="Amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo
            image={imgCreditSuisse}
            height={32}
            alt="Credit Suisse"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo
            image={imgTelkomIndonesia}
            height={100}
            alt="Telkom Indonesia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo
            image={imgTelkomSigma}
            height={32}
            alt="Telkom Sigma"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo image={imgMicrosoft} height={32} alt="Microsoft" />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo image={imgAmazon} height={32} alt="Amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <PartnershipLogo
            image={imgCreditSuisse}
            height={32}
            alt="Credit Suisse"
          />
        </SwiperSlide>
      </Swiper>
      <Certificated />
      <WhyWorkWithUs />
      <CustomerSatifaction />
    </Section>
  );
}

interface PartnershipLogoProps {
  image: string;
  alt: string;
  height: number;
}

function PartnershipLogo({ image, height, alt }: PartnershipLogoProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <img className={`h-[${height}px]`} src={image} alt={alt} />
    </div>
  );
}

function Certificated() {
  return (
    <section className="relative flex h-[1250px] items-center justify-center overflow-hidden xl:h-[1300px]">
      <div className="absolute top-0 z-10 mx-auto w-[150%] xl:w-[140%]">
        <div className="h-[550px] w-full bg-blue-datatech"></div>
      </div>
      <div className="absolute left-[10%] top-[100px] z-10">
        <div className="mb-8 flex items-center gap-8">
          <img className="h-[64px] w-auto" src={TTK} alt="" />
          <p className="text-6xl font-semibold text-[#FFD700]">CERTIFICATE</p>
          <img className="h-[80px] w-auto" src={warantyLogo} alt="" />
        </div>
        <hr className="_DIVIDER border-1 w-full border-white" />
        <div className="mt-16 flex gap-8">
          <img className="h-[180px]" src={certificate01} alt="" />
          <img className="h-[180px]" src={certificate02} alt="" />
        </div>
      </div>
      <GreyBanner />
      <div className="absolute  bottom-0 mx-auto w-[150%] xl:w-[140%]">
        <Link to="list-certificate">
          <Elipse color="#A5AEB3" />
        </Link>
      </div>
      <div className="_CONTENT absolute bottom-[25%] w-full">
        <div className="flex justify-center">
          <h1 className="z-10 flex items-center text-center">
            <div className="absolute size-24 rounded-lg bg-blue-datatech"></div>
            <div className="z-10 ml-4 text-6xl font-semibold text-[#FFD700]">
              GLOBAL CERTIFICATED
            </div>
          </h1>
        </div>
        <Swiper
          className="mx-4 mt-[80px] h-[100px] "
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate01}
              height={100}
              alt="Telkom Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate02}
              height={100}
              alt="Telkom Sigma"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate03}
              height={100}
              alt="Microsoft"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate04}
              height={100}
              alt="Amazon"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate05}
              height={100}
              alt="Credit Suisse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate06}
              height={100}
              alt="Telkom Indonesia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <PartnershipLogo
              image={globarCertificate07}
              height={100}
              alt="Telkom Sigma"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="absolute bottom-16 w-full text-center text-6xl font-semibold text-blue-datatech">
        WHY WORK WITH US
      </h1>
    </section>
  );
}

interface Props {
  color: string;
}

function Elipse({ color }: Props) {
  return (
    <svg
      className="h-auto w-[100%]"
      xmlns="http://www.w3.org/2000/svg"
      width="2274"
      height="713"
      viewBox="0 0 2274 713"
      fill="none"
    >
      <path
        d="M2274 356.5C2274 553.389 1764.95 713 1137 713C509.052 713 0 553.389 0 356.5C0 159.61 509.052 0 1137 0C1764.95 0 2274 159.61 2274 356.5Z"
        fill={color}
      />
    </svg>
  );
}

function GreyBanner() {
  return (
    <div className="absolute right-0 z-40 mb-32 flex h-[200px] w-[600px] self-center bg-[#D9D9D9] p-2">
      <img className="h-full" src={imgPartnership01} alt="" />
      <p className="p-4 font-semibold">
        All TTK products are manufactured in France and rigorously tested. Never
        before has a company in our industry offered what we now do - a “10 Year
        Warranty” on all TTK products!
      </p>
      <div>
        <XCircle className="m-2 h-8 w-8" />
      </div>
    </div>
  );
}

function WhyWorkWithUs() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="_CARD flex -rotate-[5deg] flex-col items-end gap-4 rounded-3xl bg-[#FFBCBC] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Service and Support
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          for your projects by a team of engineers and experts
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs01} alt="" />
        </div>
      </div>
      <div className="_CARD flex rotate-[0deg] flex-col items-end gap-4 rounded-3xl bg-[#BCFFC7] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Reduce Costs
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          on equipment and maintenance thanks to the versatile system and
          reusable sensing cables
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs02} alt="" />
        </div>
      </div>
      <div className="_CARD flex rotate-[3deg] flex-col items-end gap-4 rounded-3xl bg-[#FEFFBC] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Unfailing Solidity
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          and a long sevice life
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs03} alt="" />
        </div>
      </div>
      <div className="_CARD flex -rotate-[3deg] flex-col items-end gap-4 rounded-3xl bg-[#FFBCDB] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Reduce Costs
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          capable to evolve with your future needs
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs04} alt="" />
        </div>
      </div>
      <div className="_CARD flex rotate-[5deg] flex-col items-end gap-4 rounded-3xl bg-[#E792B9] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Powerful Solutions
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          developed and designed for data centres of all sizes
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs05} alt="" />
        </div>
      </div>
      <div className="_CARD flex -rotate-[3deg] flex-col items-end gap-4 rounded-3xl bg-[#BCCFFF] p-8">
        <h1 className="text-right text-2xl font-semibold text-[#FF06F5]">
          Simple and Flexible Design
        </h1>
        <p className="w-2/3 font-semibold text-[#6A6B70]">
          ease of installation/ extension/ upgrade
        </p>
        <div className="self-start">
          <img className="h-32 w-fit" src={iconWorkWithUs06} alt="" />
        </div>
      </div>
    </div>
  );
}

function CustomerSatifaction() {
  const options = [
    { value: 1, color: "text-[#FF0000]", emoji: "🥲", label: "Very Bad!" },
    { value: 2, color: "text-[#CF2E2E]", emoji: "☹️", label: "Bad!" },
    {
      value: 3,
      color: "text-[#D3741D]",
      emoji: "😐",
      label: "I think enough!",
    },
    { value: 4, color: "text-[#94CA20]", emoji: "🙂", label: "Cool!" },
    { value: 5, color: "text-[#1D50D3]", emoji: "☺️", label: "I like it!" },
    { value: 6, color: "text-[#CF1DD3]", emoji: "😍", label: "So Statisfy!" },
  ];

  const handleSelect = (option: Option) => {
    console.log("Selected option:", option);
  };

  return (
    <div className="mt-32 flex h-[700px] bg-blue-datatech">
      <div className="relative flex w-[40%] items-center overflow-hidden">
        <svg
          className="absolute right-0 z-0 h-[120%]"
          viewBox="0 0 1182 1182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="591" cy="591" r="591" fill="#D7F1FE" />
        </svg>
        <img
          className="absolute bottom-0 z-10 w-full object-contain pr-16"
          src={imgFeedback01}
          alt=""
        />
      </div>
      <div className="flex grow flex-col items-center justify-between p-16">
        <div className="text-center font-semibold text-white">
          <h1 className="text-4xl">CUSTOMER SATISFACTION SURVEY</h1>
          <p className="mt-8 text-xl">
            ˚˖𓍢ִ໋🦢˚ Your Feedback Is Most Important ˚˖𓍢ִ໋🦢˚
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-white p-8 font-semibold text-[#FF9900]">
          <h1 className="text-center text-lg">
            Give Your Feedback <br />
            So We Can Improve Our Services!
          </h1>
          <EmojiCheckBox options={options} onSelect={handleSelect} />
          <h2 className="text-center text-lg">What should we improve?</h2>
          <div className="flex items-center rounded-xl border border-gray-300 px-4 py-4">
            <MessageCircleMore className="h-8 w-8 text-gray-500" />
            <input
              type="text"
              placeholder="Please tell us, we very happy for your feedback"
              className="w-full px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type Option = {
  value: number;
  emoji: string;
  color: string;
  label: string;
};

interface EmojiCheckBoxProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

function EmojiCheckBox({ options, onSelect }: EmojiCheckBoxProps) {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <ul className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex w-full flex-col items-center gap-2"
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option}
            onChange={() => handleSelectOption(option)}
            className="hidden"
          />
          <h1
            className={`${selectedOption === option ? "bg-[#FFC633]" : "bg-white"} flex h-16 w-16 items-center justify-center rounded-full border border-[#D99243] text-2xl`}
          >
            {option.emoji}
          </h1>
          <p className={`text-center ${option.color}`}>{option.label}</p>
        </label>
      ))}
    </ul>
  );
}
