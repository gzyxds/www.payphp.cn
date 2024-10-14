import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "李明",
    designation: "电商平台创始人",
    image: image1,
    content:
      "Payphp的支付接口集成非常简单，大大缩短了我们的开发时间。它的费率也很合理，帮助我们降低了运营成本。客户反馈使用体验很好，这对我们的业务增长起到了积极作用。",
  },
  {
    id: 2,
    name: "张华",
    designation: "在线教育平台CEO",
    image: image2,
    content:
      "我们选择Payphp是因为它的安全性和稳定性。在线支付对我们的业务至关重要，Payphp从未让我们失望。它的实时交易报告功能也非常有用，帮助我们更好地管理财务。",
  },
  {
    id: 3,
    name: "王芳",
    designation: "跨境电商负责人",
    image: image1,
    content:
      "作为一个跨境电商平台，我们需要支持多种货币和支付方式。Payphp完美满足了我们的需求，它的全球化支付解决方案帮助我们轻松拓展国际市场。客户服务也很棒！",
  },
  {
    id: 4,
    name: "陈强",
    designation: "金融科技公司CTO",
    image: image2,
    content:
      "Payphp的API文档非常详细，集成过程顺畅。它的反欺诈系统给了我们很大信心。最重要的是，它的系统性能出色，即使在交易高峰期也能保持稳定，这对我们的业务至关重要。",
  },
];
