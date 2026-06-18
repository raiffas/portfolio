import headshot from './img_headshottransparent.png'
import { Text } from "components";
import { homeData } from "../data/homeData";
export function HomePage( { pageRef } ) {
    return (
        <div key={"elemHome"} ref={pageRef} className="h-[1024px] md:h-[862px] sm:h-auto sm:min-h-[300px] pb-[55px] sm:pb-8 md:px-5 sm:px-4 px-[55px] relative w-full">
              <div className="sm:relative sm:bottom-auto absolute bottom-[21%] flex flex-col gap-2.5 h-auto left-[55px] md:left-10 sm:left-0 right-0 items-start sm:items-center justify-start sm:pt-12 w-auto">
                <div className="font-kiranghaerang w-full">
                  <Text
                    className="block sm:text-center sm:text-[13vw] text-[clamp(32px,9vw,130px)] text-white-A700"
                    size="txtKirangHaerangRegular130"
                  >
                    {homeData.name}
                  </Text>
                  <div className="bg-white-A700 h-[13px] w-full"></div>
                </div>
                <Text
                  as="div"
                  className="text-[clamp(16px,2.5vw,32px)] sm:text-center text-white-A700 bg"
                  size="txtJuraRegular32"
                >
                  {homeData.contactLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </Text>
              </div>
              
              
              <img src={headshot} className="absolute sm:hidden top-[0] bottom-[10%] object-cover object-top right-[5%] md:w-[45%] w-[41%]"  alt="me" />
            </div>
    )
}