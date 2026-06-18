import logo from './DesktopOneNavbar/img_frame1.svg'
import { Text } from "components";
import { footerData } from "../data/footerData";
export function DesktopFooter() {

    return (
        <div className="flex flex-col font-kiranghaerang md:gap-10 gap-[0] h-[281px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 sm:px-5 px-[236px] md:py-10 sm:py-6 py-[78px] w-full">
          <img src={logo} className="h-12 w-12"  alt="logo" />
            <Text
              as="div"
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtKirangHaerangRegular16"
            >
              {footerData.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </Text>
          </div>
    )
}