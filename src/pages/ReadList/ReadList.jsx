import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { getStoredBook } from "../../utilities/addToDB";
import { CgFacebook } from "react-icons/cg";
import ListedBook from "../ListedBook/ListedBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedBookData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <div className="mt-16">
      <details className="dropdown">
        <summary className="btn m-1">Sort by</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList className="flex items-center gap-3 border-b border-gray-300">
          <Tab className="border-t border-r border-gray-300 p-2 rounded-[8px]">
            Read List
          </Tab>
          <Tab className="border-t border-r p-2 rounded-[8px] border-gray-300">
            Wish List
          </Tab>
        </TabList>

        <TabPanel className="mt-8">
          {readList.map((book) => (
            <ListedBook key={book.bookId} book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h1>My Content 2</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
