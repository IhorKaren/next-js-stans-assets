"use client";

import "./globals.scss";

import { useState, useEffect } from "react";
import { Montserrat, Raleway } from "next/font/google";
import Layout from "../../components/Layout/layout";
import AppContext from "../../AppContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

const RootLayout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded === false) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <AppContext.Provider value={{ isLoaded }}>
      <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </AppContext.Provider>
  );
};

export default RootLayout;
