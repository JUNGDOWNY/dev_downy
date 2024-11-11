import '../styles/global.css';
import Pcheader from '../components/header_pc';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <head>
                <meta httpEquiv="content-language" content="ko" />
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=1280"/>	
                <title>건강기능식품 전문관 - 에누리 건강 Plus</title>
            </head>
            <body>
                <div className="wrap">
                    <Pcheader />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}