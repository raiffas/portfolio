import { Text, DescriptionLines } from "components";
import { projectSections, sectionOrder } from "../data/projectData";

export function ProjectPage({ pageRef }) {
  return (
    <div key={"elemProj"} ref={pageRef} className="flex flex-col md:gap-10 gap-[100px] h-[3000px] md:h-auto items-start justify-start max-w-[1440px] px-[100px] md:px-10 sm:px-5 w-full">
      {sectionOrder.map((id) => {
        const section = projectSections[id];
        return (
          <div key={id} className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[35px] text-center text-red-A100 w-auto"
              size="txtJuraRegular32"
            >
              {section.heading}
            </Text>
            <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">
              {section.items.map((item) => (
                <div key={item.id} className="flex md:flex-col flex-row gap-8 items-start justify-center max-w-[1440px] w-full">
                  <Text
                    className="md:text-base md:text-center text-[18px] text-right text-white-A700 md:w-full flex-1"
                    size="txtJuraRegular16"
                  >
                    {item.label}
                  </Text>
                  <div className="flex-1 md:w-full">
                    <DescriptionLines lines={item.lines} link={item.link} accentFirst={section.accentFirst} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}