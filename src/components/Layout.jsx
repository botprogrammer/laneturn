import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
