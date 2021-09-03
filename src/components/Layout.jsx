import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
