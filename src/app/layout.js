import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gig Connect App",
  description: "We connect businesses to top talents all around Africa",
};

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <div className={inter.className}>{children}</div>
    </ChakraProvider>
  );
}
