import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../common/ScrollToTop";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
