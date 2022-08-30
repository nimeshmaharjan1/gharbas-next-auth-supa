import { NextPage } from "next";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <main className="container py-6 px-4 lg:px-8">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
