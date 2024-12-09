import "./globals.css";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";

export const metadata = {
  title: "React",
  description: "Pagina de React",
}


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        {children}
        
        <Footer/>
      </body>
    </html>
  );
}
