import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import Script from "next/script"; // ✅ Import this

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vaidik-AI ",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleOneTap />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}

          {/* ✅ Voiceflow Chat Widget Script */}
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '67a48444732d42af01754e14' },
                      url: 'https://general-runtime.voiceflow.com',
                      versionID: 'production',
                      voice: {
                        url: "https://runtime-api.voiceflow.com"
                      }
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                  v.type = "text/javascript";
                  s.parentNode.insertBefore(v, s);
                })(document, 'script');
              `,
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
