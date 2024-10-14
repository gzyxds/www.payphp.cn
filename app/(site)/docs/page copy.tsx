import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "文档页面 - Solid SaaS 模板",
  description: "这是 Solid Pro 的文档页面",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>欢迎来到创业文档</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  本文档作为一个简单的模板，展示了一个示例
                  布局和格式。它仅用于演示
                  目的，不适用于任何官方用途。
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  请访问：{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  查看真正的文档，设置指南甚至视频
                  说明
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
