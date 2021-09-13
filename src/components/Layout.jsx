import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
}
