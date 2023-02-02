import React from "react";
import Image from "next/image";
import styles from "@/styles/newest.module.css";
import Stories from "@/components/Stories";
import Comment from "@/components/Comments";

export default function search() {
  return (
    <div className="py-10 px-5">
      <div className={styles.head}>
        <div className="py-2 flex items-center justify-between w-full">
          <div className="flex mr-10">
            <Image
              src="https://news.ycombinator.com/y18.gif"
              width={60}
              height={10}
              alt="logo"
              className="mx-2 border-2"
            />
            <p className="text-2xl">
              Search <br /> Hacker News
            </p>
          </div>
          <div className="w-3/5">
            <input
              type="search"
              placeholder="Search stories by title, url or author"
              className="w-full p-4 text-xl rounded-md"
            />
          </div>
          <div className="px-10 text-2xl">Settings</div>
        </div>
      </div>
      <div className="flex mx-4 my-4 items-center">
        <p className="mr-3">Search</p>
        <select className="mr-6" style={{ height: "2.5rem" }}>
          <option value="all" className="p-8">
            All
          </option>
          <option value="stories" className="p-2">
            Stories
          </option>
          <option value="comments" className="p-2">
            Comments
          </option>
        </select>
        <p className="mr-3">by</p>
        <select className="mr-6" style={{ height: "2.5rem" }}>
          <option value="popularity" className="p-2">
            Popularity
          </option>
          <option value="date" className="p-2">
            Date
          </option>
        </select>
        <p className="mr-3">for</p>
        <select className="mr-6" style={{ height: "2.5rem" }}>
          <option value="all" className="p-2">
            All time
          </option>
          <option value="past24" className="p-2">
            Last 24h
          </option>
          <option value="pastWeek" className="p-2">
            Past Week
          </option>
          <option value="pastMonth" className="p-2">
            Past Month
          </option>
          <option value="pastYear" className="p-2">
            Past Year
          </option>
          <option value="custom" className="p-2">
            Custom Range
          </option>
        </select>
      </div>
      <div className="py-5">
        <Stories
          author="dfjge"
          title="sdufgg hd t"
          url="google.com"
          created_at="5 sec ago"
          points="5"
          num_comments="54"
        />
        <Comment
          author="dfjge"
          comment="fkgh g hdb bhs dbh sb bh dbfhb sdb dfh f"
          on="ihv fhf vf dfhb dfhks fdkh dfb"
          created_at="5 sec ago"
          points="5"
        />
      </div>
    </div>
  );
}
