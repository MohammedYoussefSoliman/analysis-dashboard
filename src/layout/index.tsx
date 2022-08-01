import React from "react";
import LayoutWrapper from "./styles";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper data-testid="app-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}
