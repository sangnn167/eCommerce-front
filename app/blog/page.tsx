"use client"
import React, { FC, useState } from "react";
import styles from "./styles.module.css"
import blogs from "../mock/blog.json"
import { Menu } from "../components/Menu/page";
import { BannerBlog } from "../components/Blog/BannerBlog/page";
import { BlogPosts } from "../components/Blog/BlogPosts/page";
import { SearchCard } from "../components/Blog/SearchCard/page";
import { RecentPosts } from "../components/Blog/RecentPosts/page";
import { SelectPage } from "../components/Shop/SelectPage/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";


type Props = {};

const Blog: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const uniqueTags: string[] = Array.from(new Set(blogs.flatMap(blog => blog.tags)));

  return (
    <div className={styles.blogContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerBlog />
        <div className={styles.content}>
          <div className={styles.blogpost}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.blog}>
                <BlogPosts
                  User={blog.user}
                  Images={blog.images}
                  Date={blog.date}
                  Tags={blog.tags}
                  Title={blog.title}
                  Content={blog.content}
                />
              </div>
            ))}
          </div>
          <div>
            <div className={styles.categories}>
              <SearchCard />
              <div className={styles.title}>Categories</div>
              {uniqueTags.map((tag, index) => (
                <div key={index} className={styles.tags}>
                  <div className={styles.test}>
                    <span className={styles.textTags}>{tag}</span>
                  </div>
                  <span>
                    {blogs.reduce((acc, blog) => (blog.tags.includes(tag) ? acc + 1 : acc), 0)}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.recentContainer}>
              <p className={styles.textRecent}>Recent Posts</p>
              {blogs.map((blog) => (
                <div className={styles.productCard} key={blog.id}>
                  <RecentPosts
                    Images={blog.images}
                    Title={blog.title}
                    date={blog.date}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SelectPage
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className={styles.shopService}>
          <ShopService />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Blog;