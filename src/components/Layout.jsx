import React, { Suspense } from "react";
import Spinner from "./Spinner";

const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));

export default function Layout({ children }) {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <main className="bg-gray-100 mt-16">
          <div>{children}</div>
        </main>
        <Footer />
      </Suspense>
    </>
  );
}
