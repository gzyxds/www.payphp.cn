// 导入必要的React组件和模块
import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

// 定义RelatedPost组件
const RelatedPost = async () => {
  return (
    <>
      {/* 相关文章容器 */}
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        {/* 标题 */}
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Related Posts
        </h4>

        {/* 文章列表 */}
        <div>
          {/* 遍历前3篇博客文章 */}
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              {/* 文章图片 */}
              <div className="max-w-45 relative h-18 w-45">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              {/* 文章标题 */}
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/blog-details`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 导出RelatedPost组件
export default RelatedPost;
