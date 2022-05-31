import {
  Articles,
  CustomNavbar,
  Hero,
  CustomFooter,
  FeaturesGrid,
} from "@components";
import { MenuContext } from "@core/context/MenuContext";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";

const Home: NextPage = () => {
  const { opened, setOpened } = useContext(MenuContext);
  useEffect(() => {
    console.log(opened);
  }, [opened]);
  return (
    <>
      <CustomNavbar />
      <Hero />
      <FeaturesGrid />
      <Articles />
      <CustomFooter />
    </>
  );
};

export default Home;
