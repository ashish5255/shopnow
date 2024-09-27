import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          className=" w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about us"
        />

        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Shopnow, we believe fashion is for everyone, and we’re here to
            make it accessible, trendy, and fun. Whether you're looking for
            everyday essentials or the latest styles, we’ve got you covered with
            a wide range of clothes and accessories that fit every vibe and
            personality. Our mission is simple: to deliver high-quality products
            that don’t just look good, but feel great too.
          </p>
          <p>
            With new arrivals dropping all the time, Shopnow keeps you ahead of
            the trends, offering fashion-forward options that suit your
            lifestyle without breaking the bank. Shop with confidence, dress
            with style—Shopnow is here to elevate your wardrobe game!
          </p>
          <strong className=" text-gray-800"> What Drives Us ?</strong>
          <p>
            At Shopnow, we’re driven by a passion for style, inclusivity, and
            customer satisfaction. Our goal is to make fashion accessible to
            everyone while staying committed to quality, affordability, and
            sustainability.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"US ?"} />
      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
          <b>Top Notch Quality</b>
          <p className="textgray600">
            At Shopnow, quality comes first. We carefully select materials and
            craftsmanship to ensure every piece stands the test of time,
            offering you style that lasts.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
          <b>Convenience</b>
          <p className="textgray600">
            Shopnow makes shopping easy with multiple payment options and fast,
            reliable home delivery. We’re all about giving you a seamless
            experience, from checkout to doorstep.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
          <b>Exceptional Customer Service</b>
          <p className="textgray600">
            Shopnow makes shopping easy with multiple payment options and fast,
            reliable home delivery. We’re all about giving you a seamless
            experience, from checkout to doorstep.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
