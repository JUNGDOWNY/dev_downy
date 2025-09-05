// Next.js 13+ app router 기본 레이아웃
import "../styles/_reset.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
    </html>
  );
}
