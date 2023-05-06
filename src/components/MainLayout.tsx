import React from "react";
import { MainHeader } from "./MainHeader";
import { MainFooter } from "./MainFooter";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
