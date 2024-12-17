import Head from "next/head";

export default function Banner() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/home-page-banner-updated.png"
          as="image"
          type="image/png"
          media="(min-width: 1024px)"
        />
        <link
          rel="preload"
          href="/home-page-banner-mobile.png"
          as="image"
          type="image/png"
          media="(max-width: 1024px)"
        />
      </Head>
      <div className="">
        <div className="">
          <div className="flex h-[50vh] w-screen bg-[url('/home-page-banner-mobile.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('/home-page-banner.png')]">
            <div className="container mx-auto flex items-center justify-center p-5 text-center text-2xl text-white lg:text-5xl">
              <div className="inline-block bg-black bg-opacity-65 px-6 py-4">
                <p>
                  Your Reliable Partner For <br /> Quality Products
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="z-40 mx-auto  flex items-center justify-center bg-[#F8E2CF] p-5 text-xl font-normal lg:p-14  lg:px-40">
          <p className="container mx-auto text-center lg:w-10/12 ">
            Seslong is a global trading house with operations and manufacturing
            strategically located across India, Hong Kong, China, enabling us to
            supply a diverse range of products to customers worldwide.
          </p>
        </div>
      </div>
    </>
  );
}
