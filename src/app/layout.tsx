import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Semiconductor Interview Lab",
  description: "반도체 공정과 양산기술 면접을 연결하는 학습 공간",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
