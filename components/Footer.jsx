import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper flex w-full flex-col border-gray-800 lg:border-b-8">
        {/* <div className="footer-top grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 px-5 pt-6 md:grid-cols-3 md:px-10  lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:gap-8 lg:px-[50px] lg:pb-3 lg:pt-8 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 "> */}
        <div className="footer-top flex">
          <div className="flex flex-col mx-4">
            <div className="footer-logo mb-[2px] flex h-10 items-start ">
              <a className="inline-flex" href="/">
                <span className="relative h-10 w-16 overflow-hidden md:w-16">
                  {/* <img
                    alt="KrishiBarters"
                    loading="eager"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=3840&q=75 3840w"
                    src="/_next/image?url=https%3A%2F%2Fkborg.s3.ap-south-1.amazonaws.com%2F1%2Forganization_logo%2Ff309332f-6ac9-4237-bfce-228bcc6ef691__original.png&w=3840&q=75"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent"
                    }}
                  /> */}
                </span>
              </a>
            </div>
            <div className="mb-[8px] flex items-start ">
              <p className="text">Vyaparik Rishtoun ka Adda</p>
            </div>
            <address className="text mb-7 text-sm not-italic text-heading">
              8 T Arihant Harmony
              <br />
              Ahinsha Khand Indirapuram , Delhi (India) <br />
              Delhi, New Delhi,110006
            </address>
            <a
              href="https://play.google.com/store/apps/details?id=com.kbagritech.myapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 rtl:space-x-reverse"
            >
              {/* <img
                alt=""
                loading="lazy"
                width={646}
                height={250}
                decoding="async"
                data-nimg={1}
                className="goggleplay-store-icon"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-badge.6ed095e9.png&w=750&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-badge.6ed095e9.png&w=1920&q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-badge.6ed095e9.png&w=1920&q=75"
                style={{ color: "transparent" }}
              /> */}
            </a>
            <span className="text-email mb-1 text-sm text-heading">corporate@krishihelpers.com</span>
          </div>
          <div className="footer-link-wrapper flex w-full items-start justify-around mt-4">
            <div className="flex flex-col">
              <h3 className="mb-4 mt-3 font-semibold text-heading lg:mb-3">Quick Links</h3>
              <ul className="space-y-0">
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    About Us
                  </button>
                </li>
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Knowledge Base
                  </button>
                </li>
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Feature Tour
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-4 mt-3 font-semibold text-heading lg:mb-3">Customer Service</h3>
              <ul className="space-y-0">
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    FAQ &amp; Helps
                  </button>
                </li>
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-4 mt-3 font-semibold text-heading lg:mb-3">Our Policy</h3>
              <ul className="space-y-0">
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button className="text-sm text-heading transition-colors hover:text-orange-500">
                    Return &amp; Shipping Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer shadow-2x1 flex w-full flex-col items-center justify-center border-t border-gray-200 pb-4 pt-4 lg:mt-0 lg:flex-row lg:justify-center lg:border-t-0">
          <span className="order-2 text-sm text-heading text-white lg:order-1">
            © Copyright 2024{" "}
            <a className="footer-link font-bold text-heading transition-colors hover:text-accent" href="/">
              Krishi Helper
            </a>{" "}
            All rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
