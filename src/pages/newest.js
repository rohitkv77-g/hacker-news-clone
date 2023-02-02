import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/newest.module.css";

//Components
import ListItem from "@/components/ListItem";

const newest = () => {
  const getDomain = (url) => {
    if (url == null) return;
    const Url = new URL(url);
    // console.log(Url.hostname);
    return "(" + Url.hostname.toString() + ")";
  };
  function timeDifference(previous) {
    const current = Date.now();
    const date = new Date(previous);

    // console.log(current, date.getTime());
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - date.getTime();

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return (
        "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
      );
    } else {
      return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
    }
  }
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(0);
  const getNews = async () => {
    const data = await axios.get(
      `http://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
    );
    console.log(data.data.hits);
    setNewsData(data.data.hits);
  };

  useEffect(() => {
    getNews();
  }, [page]);

  return (
    <div className="py-10 px-5">
      <div className={styles.head}>
        <div className={`flex py-2 flex items-center`}>
          <div className="flex mr-10">
            <Image
              src="https://news.ycombinator.com/y18.gif"
              width={30}
              height={20}
              alt="logo"
              className="mx-2 border-2"
            />
            <p className="text-3xl font-bold">Hacker News</p>
          </div>
          <div className="flex">
            <a href="#" className={styles.links} style={{ color: "#fff" }}>
              new
            </a>
            <a href="#" className={styles.links}>
              past
            </a>
            <a href="#" className={styles.links}>
              comments
            </a>
            <a href="#" className={styles.links}>
              ask
            </a>
            <a href="#" className={styles.links}>
              show
            </a>
            <a href="#" className={styles.links}>
              jobs
            </a>
            <a href="#" className={styles.links} style={{ border: "none" }}>
              submit
            </a>
          </div>
        </div>
        <div className="px-10 text-2xl">login</div>
      </div>
      <div className="py-5">
        {newsData.map((item, index) => {
          return (
            <ListItem
              key={index}
              index={page * 20 + index}
              author={item.author}
              title={item.title}
              url={getDomain(item.url)}
              created_at={timeDifference(item.created_at)}
              points={item.points}
              num_comments={item.num_comments}
            />
          );
        })}
        <a
          className="pl-10 text-2xl cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          More
        </a>
      </div>
      <hr style={{ borderColor: "orange", borderWidth: 2 }} />
      <footer className="p-5 text-xl">
        <div className="flex justify-center">
          <a className={styles.footer_link}>Guidelines</a> |
          <a className={styles.footer_link}> FAQ</a> |
          <a className={styles.footer_link}> Lists</a> |
          <a className={styles.footer_link}> API</a> |
          <a className={styles.footer_link}> Security</a> |
          <a className={styles.footer_link}> Legal</a> |
          <a className={styles.footer_link}> Apply to YC</a> |{" "}
          <a className={styles.footer_link}>Contact</a>
        </div>
        <div className="flex justify-center py-5">
          Search:
          <input
            type="text"
            className="border-2 ml-2 border-black rounded-md"
          />
        </div>
      </footer>
    </div>
  );
};

export default newest;
