import * as Logo from "../assets/images/socmed-icon";
import { TTK, Datatech } from "../assets/images/company-logo";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <div className="space-y-4 bg-black p-8 font-semibold text-white">
      <div className="flex h-[64px] gap-4">
        <img className="p-2" src={Datatech} alt="" />
        <img src={TTK} alt="" />
      </div>
      <h1 className="mt-8 text-xl">Connect with us 👇</h1>
      <div className="flex h-[32px] gap-4">
        <img src={Logo.LinkedIn} alt="" />
        <img src={Logo.Instagram} alt="" />
        <img src={Logo.Twitter} alt="" />
        <img src={Logo.Youtube} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <Copyright className="h-8" />
        <h1>PT. Infra Data Tech Indonesia | 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
}
