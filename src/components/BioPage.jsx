import { Text } from "components";
import frame1 from './img_frame_red_a100.svg'
export function BioPage({ pageRef }) {
    return (
        <div key={"elemBio"} ref={pageRef} className="flex flex-col items-start justify-center max-w-[1440px] w-full">
              <div className="flex flex-col h-[1024px] md:h-auto md:py-16 sm:py-10 items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] h-[621px] md:h-auto items-center justify-center max-w-[877px] mx-auto md:px-5 w-full">
                <img src={frame1} className="h-[283px] w-[283px] sm:h-[180px] sm:w-[180px]"  alt="frame" />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtJuraBold32"
                  >
                    <>
                      2016-2020
                      <br />
                      BS in Computer Science @ the University of Kentucky
                      <br />+ minor in math
                    </>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      I found time to do everything I wanted. I found a passion
                      for
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      {" "}
                      leadership{" "}
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      and{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      management
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      , found what I loved and what I couldn’t stand to do
                      anymore, and ended up with a lot to show for.
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      {" "}
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col h-[1024px] md:h-auto md:py-16 sm:py-10 items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] items-center justify-center max-w-[1058px] mx-auto md:px-5 w-full">
                  <img src={frame1} className="h-[283px] w-[283px] sm:h-[180px] sm:w-[180px]"  alt="frame" />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtJuraBold32"
                  >
                    <>
                      2020-2024
                      <br />
                      Masters in Computer Science @ the University of Central
                      Florida
                    </>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      <>
                        Getting my masters allowed me to focus my <br />
                        skill set and create a portfolio of projects related
                        to{" "}
                      </>
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      immersive technology
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      ,{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      computer graphics
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      , and{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      user experience research
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      .
                    </span>
                  </Text>
                </div>
              </div>
             {/* <div className="flex flex-col h-[1024px] md:h-auto md:py-16 sm:py-10 items-center justify-center max-w-[1440px] px-2.5 w-full">
                <div className="flex flex-col gap-[17px] items-center justify-center max-w-[990px] mx-auto md:px-5 w-full">
                <img src={frame1} className="h-[283px] w-[283px] sm:h-[180px] sm:w-[180px]"  alt="frame" />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                    size="txtKirangHaerangRegular32"
                  >
                    <span className="text-white-A700 font-kiranghaerang font-normal">
                      <>
                        2020-2026
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-jura font-bold">
                      PhD in Computer Science @ the University of Central
                      Florida
                    </span>
                  </Text>
                  <Text
                    className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtJuraRegular24"
                  >
                    <span className="text-white-A700 font-jura text-left font-normal">
                      <>
                        With Dr. Carolina Cruz-Neira as my advisor, I <br />
                        am embarking on the journey to create a new space for{" "}
                      </>
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      filmmakers
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      {" "}
                      within{" "}
                    </span>
                    <span className="text-red-A100 font-jura text-left font-normal">
                      Virtual Reality
                    </span>
                    <span className="text-white-A700 font-jura text-left font-normal">
                      .
                    </span>
                  </Text>
                </div>
              </div>*/}
            </div>
    )
}