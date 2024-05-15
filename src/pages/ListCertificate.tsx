import Section from "../layout/Section";

import globarCertificate01 from "../assets/images/global-certificate-logo-01.png";
import globarCertificate02 from "../assets/images/global-certificate-logo-02.png";
import globarCertificate03 from "../assets/images/global-certificate-logo-03.png";
import globarCertificate04 from "../assets/images/global-certificate-logo-04.png";
import globarCertificate05 from "../assets/images/global-certificate-logo-05.png";
import globarCertificate06 from "../assets/images/global-certificate-logo-06.png";
import globarCertificate07 from "../assets/images/global-certificate-logo-07.png";
import documentIcon from "../assets/images/document-icon.png";
import imgBookStack from "../assets/images/books-image.png";

const data = [
  {
    id: 1,
    logo: globarCertificate01,
    title: "FM Approvals",
    description:
      "TTK's FG-NET digital water leak detection system* is FM approved since December 2020. FM Approvals is an international leader in third-party testing and certification service. *: FG-NET system includes the digital panel, water, acid sensing cables and connection accessories.",
    links: [
      {
        name: "FM Certificate for FG-NET System",
        link: "https://www.ttkuk.com/wp-content/uploads/2024/01/TTK_FG-NETsystem_FM7745.pdf",
      },
    ],
  },
  {
    id: 2,
    logo: globarCertificate02,
    title: "ATEX, IECEx",
    description:
      "TTK offers a full range of ATEX & IECEx-certified addressable sensing cables. They comply with stringent regulations for being installed in explosive environments and hazardous locations. In Europe, equipment which is for use in or intended to be connected to equipment used in a potentially explosive atmosphere is required to be of a specific design such as flameproof, increased safety, intrinsically safe, etc. While ATEX is a mandatory application limited to Europe, IECEx is an international certification accepted in other countries/regions. TTK has obtained the ATEX and ICECx standards.",
    links: [
      {
        name: "ATEX Certificate 2023",
        link: "https://www.ttkuk.com/wp-content/uploads/2023/07/ATEX_production-quality-assurance-notification-2023.pdf",
      },
      {
        name: "IECEx Certificate 2023",
        link: "https://www.ttkuk.com/wp-content/uploads/2023/07/FR_LCIE_QAR14.0009_09_009.pdf",
      },
      {
        name: "FG-OD",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/ATEX-FG-OD.pdf",
      },
      {
        name: "FG-OD Certificate of Conformity",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/IECEx-LCIE-FG-OD.pdf",
      },
      {
        name: "FG-OD",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/ATEX-FG-OD.pdf",
      },
      {
        name: "FG-OD Certificate of Conformity",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/IECEx-LCIE-FG-OD.pdf",
      },
      {
        name: "FG-ECS, FG-ACS",
        link: "https://www.ttkuk.com/wp-content/uploads/2018/11/LCIE-05-ATEX-6065X-CertificationType-FG-ECXXX-Rev00.pdf",
      },
    ],
  },
  {
    id: 3,
    logo: globarCertificate03,
    title: "UL",
    description:
      "UL stands for safety. Products marked with UL ensure public safety and confidence, reduce costs, improve quality and market products and services. TTK FG-SYS and FG-NET systems are UL Listed. TTK FG-ALS4, FG-ALS4-OD, FG-ALS8, FG-ALS8-OD panels are UL Listed.",
    links: [
      {
        name: "UL Certificate for FG-NET system",
        link: "https://www.ttkuk.com/wp-content/uploads/2015/04/UL-Certificate_20130723-FG-NET.pdf",
      },
    ],
  },
  {
    id: 4,
    logo: globarCertificate04,
    title: "IECEE",
    description:
      "FG-NET digital unit meets the requirements of the IEC system for mutual recognition of test certificates for electrical equipment (IECEE) CB sheme.",
    links: [
      {
        name: "FG-NET digital unit",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/FG-NET_IEC_certificate_2016.pdf",
      },
    ],
  },
  {
    id: 5,
    logo: globarCertificate05,
    title: "TUV",
    description:
      "TTK product meets the requirements of the Equipment Safety Law and was tested according to IEC 61010-1/A2: 1995",
    links: [
      {
        name: "FG-NET digital unit",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/TÜV-Technical-Report_compliance_FG-NET-2012.pdf",
      },
    ],
  },
  {
    id: 6,
    logo: globarCertificate06,
    title: "CE",
    description:
      "The CE Marketing is a marking which signifies Declaration by the Responsible Party (usually the manufacturer) that a product is compliant with all appropriate European Union New Approach Directives, such as the ATEX, Low Voltage, EMC and Machinery Directives. TTK products are CE marked.",
    links: [
      {
        name: "Sense cables",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/TÜV-Technical-Report_compliance_FG-NET-2012.pdf",
      },
      {
        name: "FG-ALS4, FG-ALS4-OD alarm units",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/DECLARATION-de-CONFORMITE-FG-ALS4-Rev-1-TQT150513.pdf",
      },
    ],
  },
  {
    id: 7,
    logo: globarCertificate07,
    title: "NFPA 262 (or UL 910)",
    description:
      "TTK relevant sensing cable is certificated by NFPA (known as UL 910) since 2007. (NFPA: National Fire Protection Association)",
    links: [
      {
        name: "UL910_NFPA262 Test Report",
        link: "https://www.ttkuk.com/wp-content/uploads/2022/05/FG-AC-Fire-Retardance-Test-Report_web.pdf",
      },
      {
        name: "FG-AC, FG-ACS, FG-ACX Sense cables",
        link: "https://www.ttkuk.com/wp-content/uploads/2014/10/UL910-Formal-Letter-FG-AC-FG-ACS-FG-ACX.jpg",
      },
    ],
  },
];
export default function ListCertificate() {
  return (
    <Section>
      <div className="flex items-center gap-8 font-semibold">
        <img className="h-[70px]" src={documentIcon} alt="" />
        <h1 className="text-4xl text-blue-datatech">CERTIFICATIONS</h1>
      </div>
      <img className="ml-8 mt-8" src={imgBookStack} alt="" />
      <div className="mt-16 space-y-8 pr-8">
        {data.map((item) => (
          <div key={item.id} className="flex w-full items-center gap-8">
            <div className="min-w-[300px] max-w-[300px] p-8">
              <img className="w-full" src={item.logo} alt="" />
            </div>
            <div className="grow font-semibold">
              <h1 className="mb-4 text-2xl text-blue-datatech">{item.title}</h1>
              <p>{item.description}</p>
              <div className="mt-4 flex gap-4">
                {item.links.map((tautan, i) => (
                  <a key={i} href={tautan.link}>
                    <p className="w-fit bg-[#50B6BA] p-2 text-white underline">
                      {tautan.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
