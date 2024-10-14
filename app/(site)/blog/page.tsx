import BlogData from "@/components/Blog/blogData"; // 导入博客数据
import BlogItem from "@/components/Blog/BlogItem"; // 导入博客项组件
import { Metadata } from "next"; // 导入Metadata

export const metadata: Metadata = {
  title: "博客", // 页面标题
  description: "码支付博客", // 页面描述
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">  
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">  
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">   
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />  
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
