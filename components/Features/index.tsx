"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const 特性 = () => {
  return (
    <>
      {/* <!-- ===== 特性部分开始 ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- 章节标题开始 --> */}
          <SectionHeader
            headerInfo={{
              title: "核心特性",
              subtitle: "核心特性",
              description: `管理平台功能完善、系统安全稳定、支持高并发、简单易用、支持多渠道接入`,
            }}
          />
          {/* <!-- 章节标题结束 --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- 特性项目开始 --> */}

            {featuresData.map((特性项, 索引) => (
              <SingleFeature feature={特性项} key={索引} />
            ))}
            {/* <!-- 特性项目结束 --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== 特性部分结束 ===== --> */}
    </>
  );
};

export default 特性;