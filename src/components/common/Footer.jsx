import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  footerCompanyList,
  footerSolutionList,
  socialIconList,
} from "./Helper";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-offWhite gradient_border border-t">
        <div className="xl:max-w-[1324px] container px-5 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:pb-[118px] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-6 justify-between">
            <div className="md:w-4/12 lg:w-5/12">
              <Image
                className="lg:w-[185px] w-[135px]"
                width={185}
                height={20}
                src="/assets/images/common/footer/footer-logo.png"
                alt="logo"
              />
              <div className="pt-12 md:pt-8 lg:pt-[50px] grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="gap-1.5 flex flex-col">
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark uppercase">
                    United states
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/2055+Limestone+Rd,+Wilmington,+DE+19808,+USA/@39.7233984,-75.6595227,17z/data=!3m1!4b1!4m6!3m5!1s0x89c701c8925345d3:0xcd02bd1a18e65181!8m2!3d39.7233943!4d-75.6569478!16s%2Fg%2F11c3q3cccf?entry=ttu"
                    className="font-medium text-sm text-riverBed hover:text-darkBlue duration-300 !leading-[140%]"
                  >
                    2055 Limestone Road, Wilmington, Delaware 19808
                  </Link>
                </div>
                <div className="gap-1.5 flex flex-col order-2 sm:order-1">
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark uppercase">
                    Dubai
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/Office+1902,+48+Burj+Gate,+Sheikh+Zayed+Road,+Downtown+Dubai/@25.2001888,55.2663745,17z/data=!3m1!4b1?entry=ttu"
                    className="font-medium text-sm text-riverBed hover:text-darkBlue duration-300 !leading-[140%]"
                  >
                    Office 1902, 48 Burj Gate, Sheikh Zayed Road, Downtown Dubai
                  </Link>
                </div>
                <div className="gap-1.5 flex flex-col xl:pt-1 order-1 sm:order-2">
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark uppercase">
                    Bangladesh
                  </p>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/House-11,+Road-17,+Banani+C%2FA,+Banani,+Dhaka/@23.7811967,90.4129875,17z/data=!3m1!4b1?entry=ttu"
                    className="font-medium text-sm text-riverBed hover:text-darkBlue duration-300 !leading-[140%]"
                  >
                    House-11, Road-17, Banani C/A, Banani, Dhaka
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/search/+Level+6,+Erectors+House,+18+Kemal+Ataturk+Avenue,+Banani,+++++++++++++++++++++Dhaka+1213/@23.7937663,90.4012921,17z/data=!3m1!4b1?entry=ttu"
                    className="font-medium text-sm text-riverBed hover:text-darkBlue duration-300 !leading-[140%]"
                  >
                    Level 6, Erectors House, 18 Kemal Ataturk Avenue, Banani,
                    Dhaka 1213
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-6/12 pt-6 sm:pt-8 md:pt-0">
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-3 xl:gap-6">
                <div>
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Company
                  </p>
                  <ul className="flex flex-col gap-[9px]">
                    {footerCompanyList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                            href={value.link}
                          >
                            {value.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Solution
                  </p>
                  <ul className="flex flex-col gap-[9px]">
                    {footerSolutionList.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                            href={value.link}
                          >
                            {value.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <p className="font-bold !leading-[140%] text-sm md:text-base text-shark pb-5 uppercase">
                    Contact us
                  </p>
                  <p className="font-bold text-sm text-shark !leading-[140%] pb-1">
                    Phone
                  </p>
                  <Link
                    target="_blank"
                    className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                    href="tel:+8802222274550"
                  >
                    +88 02 2222 74550
                  </Link>
                  <p className="font-bold text-sm text-shark !leading-[140%] pb-1 pt-5 md:pt-6">
                    Email
                  </p>
                  <Link
                    target="_blank"
                    className="font-medium text-sm text-riverBed hover:text-shark duration-300 !leading-[140%]"
                    href="mailto:hello@nuport.io"
                  >
                    hello@nuport.io
                  </Link>
                  <p className="font-riverBed text-sm text-shark !leading-[140%] pt-5 md:pt-6 pb-1">
                    Follow us
                  </p>
                  <div className="flex gap-3 md:gap-1 xl:gap-3 pt-2">
                    {socialIconList.map((value, index) => {
                      return (
                        <Link
                          aria-label={value.socialmedia}
                          target="_blank"
                          key={index}
                          className="w-9 h-9 bg-[#EDEFF2] rounded-full flex justify-center items-center hover:bg-darkBlue duration-300 group"
                          href={value.link}
                        >
                          {value.icon}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between mt-[21px] sm:mt-6 md:mt-9 lg:mt-12 xl:mt-[55px] py-6 md:py-8 lg:py-10 gradient_border border-y">
            <p className="text-xs font-medium md:text-sm text-riverBed pb-6 sm:pb-0">
              Copyright {year} © Nuport Industrial Automation, Inc.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-11">
              <Link
                href={"/"}
                className="text-xs font-medium md:text-sm text-riverBed hover:text-darkBlue duration-300"
              >
                Terms of Use
              </Link>
              <Link
                href={"/"}
                className="text-xs font-medium md:text-sm text-riverBed hover:text-darkBlue duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="pt-7 md:pt-8 lg:pt-10">
            <Image
              className="max-w-[1178px] w-full mx-auto"
              width={1178}
              height={138}
              src="/assets/images/common/footer/footer-bottom-pay.webp"
              alt="pay image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
