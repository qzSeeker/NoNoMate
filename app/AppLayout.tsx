"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isAuthPage =
        pathname.startsWith("/auth") ||
        pathname.startsWith("/select-role");

    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {!isAuthPage && <Header />}
        {children}
        {!isAuthPage && <Footer />}
        </ThemeProvider>
    );
}
