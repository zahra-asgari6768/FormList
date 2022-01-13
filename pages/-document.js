import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
class MyDocument extends Document {

  render() {

    return (

      <Html lang="fa">

<link rel="preconnect" href="//fdn.fontcdn.ir"></link>
<link rel="preconnect" href="//v1.fontapi.ir"></link>
<link href="https://v1.fontapi.ir/css/Vazir" rel="stylesheet"></link>
        <Head />

        <body dir="rtl">
          
        <style jsx>{`@import url('https://v1.fontapi.ir/css/Vazir');`}

</style>
          <Main />

          <NextScript />

        </body>

      </Html>

    );

  }

}

export default MyDocument;