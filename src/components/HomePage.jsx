import headshot from './img_headshottransparent.png'
import { Text } from "components";
export function HomePage( { pageRef } ) {
    return (
        <div key={"elemHome"} ref={pageRef} className="h-[1024px] md:h-[862px] pb-[55px] md:px-5 px-[55px] relative w-full">
              <div className="absolute bottom-[21%] flex flex-col gap-2.5 h-[269px] md:h-auto inset-x-[0] items-start justify-start mx-auto w-auto">
                <div className="font-kiranghaerang md:h-[163px] h-[166px] relative w-full">
                  <Text
                    className="absolute h-max inset-y-[0] left-[0] my-auto md:text-5xl text-[130px] text-white-A700"
                    size="txtKirangHaerangRegular130"
                  >
                    Raiffa Syamil
                  </Text>
                  <div className="absolute bg-white-A700 bottom-[0] h-[13px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 bg"
                  size="txtJuraRegular32"
                >
                  <>
                    contact: raiffas [at] gmail.com
                    <br />
                    github.com/raiffas<br />
                    Orlando, FL
                  </>
                </Text>
              </div>
              
              
              <img src={headshot} className="absolute h-[862px] object-cover right-[5%] top-[0] w-[41%]"  alt="me" />
            </div>
    )
}