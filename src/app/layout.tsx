import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TourFi — WiFi аудиогид для экскурсий",
  description:
    "Приложение для экскурсоводов и туристов. Гид транслирует аудио через WiFi, туристы слушают на своих телефонах без интернета.",
  openGraph: {
    title: "TourFi — WiFi аудиогид",
    description: "Скачайте TourFi и проводите экскурсии с живым аудио через WiFi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
