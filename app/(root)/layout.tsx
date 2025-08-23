import SideBar from "@/components/SideBar";
import { log } from "node:util";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Andrue", lastName: "Hudson" };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sidebar */}
      <SideBar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}
