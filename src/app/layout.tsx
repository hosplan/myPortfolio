import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'


const pretendard = localFont({
  src: './fonts/Pretendard-Regular.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: "김태호의 포트폴리오",
  description: "웹 어플리케이션 개발자 김태호 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
      </body>
    </html>
  );
}
