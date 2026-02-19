import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CardProvider from "@/context/CardProvider";
import Image from "next/image";
import logo from "../assets/logo.png";
import foodLogo from "../assets/foodLogo.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//google all font next.js take just name lekbo Uppercase first word dile amder ke nex.js suggest kore dive

const poppins = Poppins({
  // bold property set
  weight: ["400", "500", "700"],
  //static vabe ekta subsets bold dithe hoy
  subsets: ["latin"],
});

export const metadata = {
  //dynamic title set
  title: {
    default: "My Brand Food",
    //template "%s" use korle jey page jabo sei page title and My Brand Food ta dekebe
    template: "%s | My Brand Food",
  },
  // title: "My Food Brand",
  description: "Best FastFood in Rangamati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* project code  */}
        <header className="px-5 py-2 flex items-center justify-between gap-5 bg-slate-400 rounded">
          <Link href="/">
            {/* amra ekane next.js image ta use kortesi next.js image use korle hight width dithe hoy  */}
            <Image
              width={120}
              height={25}
              src={foodLogo}
              className="w-[120px]  h-[50] rounded-full"
              alt=""
            />
          </Link>

          <div className="space-x-5">
            <Link prefetch={false} className="btn" href="/foods">
              Foods
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
            <Link className="btn" href="/feedback">
              Feedbacks
            </Link>
          </div>
        </header>

        {/* eta main route and children ta holo component er */}
        <main className="px-5 py-8">
          {/* I am giving all the power cartProvided. Now the cardProvider is king */}
          <CardProvider>{children}</CardProvider>
        </main>
      </body>
    </html>
  );
}
