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
      <main className="container mx-auto px-4 py-4 lg:px-0 min-h-screen">
        {children}
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
