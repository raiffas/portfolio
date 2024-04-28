import logo from './DesktopOneNavbar/img_frame1.svg'
import { Text } from "components";
export function DesktopFooter() {

    return (
        <div className="flex flex-col font-kiranghaerang md:gap-10 gap-[0] h-[281px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[236px] py-[78px] w-full">
          <img src={logo} className="h-12 w-12"  alt="logo" />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtKirangHaerangRegular16"
            >
              <>
                website under construction, last updated: 4/28/2024
                <br />
                email me at raiffa.syamil [at] ucf.edu -- feedback and creative
                ideas welcome!
              </>
            </Text>
          </div>
    )
}