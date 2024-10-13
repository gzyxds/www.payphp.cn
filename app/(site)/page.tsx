import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "码支付官网|易支付即时到账|支付系统源码|在线支付系统|免签约聚合支付系统", // 网站标题 
  keywords: "码支付,易支付,即时到账,支付系统源码,在线支付系统,免签约聚合支付系统",
  description: "Payphp是行业领先的聚合码支付个人免签约支付平台，一站式接入网站收款api接口,支持支付宝，微信，财付通，QQ钱包，微信wap，银联支付，USDT支付，paypal，帮助开发者快速集成到自己相应产品，效率高，见效快，费率低", // 网站描述
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
