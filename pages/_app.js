/* _app.js varsayılan dışa aktarımı, uygulamanızdaki tüm sayfaları saran üst düzey bir React bileşenidir.
 Sayfalar arasında gezinirken durumu korumak veya burada yaptığımız gibi genel stiller eklemek
  için bu bileşeni kullanabilirsiniz. 
  
   Önemli: pages/_app.js eklediğinizde geliştirme sunucusunu yeniden başlatmanız gerekir.
   Basın Ctrl + c Sunucuyu durdurmak ve çalıştırmak için:
   npm run dev*/

   
   import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
