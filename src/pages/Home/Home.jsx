import React, { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<p>loading...</p>}>
        <Books data={data}></Books>
      </Suspense>
    </div>
  );
};

export default Home;
