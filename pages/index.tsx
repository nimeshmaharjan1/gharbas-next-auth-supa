import { PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import Card from "../components/homes/Card";
import { Home } from "../lib/interfaces";
interface Props {
  homes: Home[];
}
const Home: NextPage<Props> = ({ homes }) => {
  useEffect(() => {
    console.log(homes);
  }, [homes]);

  return (
    <div className="w-full">
      <Head>
        <title>Gharbas</title>
        <meta
          name="description"
          content="A home rental application for nepal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="featured-section grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 container">
        {homes &&
          homes.map((home: Home) => <Card home={home} key={home.id}></Card>)}
      </div>
      {/* <button className="btn btn-primary">
        <Link href="/homes/create">Create</Link>
      </button> */}
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const homes = await prisma.home.findMany();
  return {
    props: { homes: JSON.parse(JSON.stringify(homes)) },
  };
};
