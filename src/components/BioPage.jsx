import React from "react";
import { Text, RichText } from "components";
import frame1 from './img_frame_red_a100.svg';
import { bioEntries } from "../data/bioData";

export function BioPage({ pageRef }) {
  return (
    <div key={"elemBio"} ref={pageRef} className="flex flex-col items-start justify-center max-w-[1440px] w-full">
      {bioEntries.map((entry) => (
        <div key={entry.id} className="flex flex-col h-[1024px] md:h-auto md:py-16 sm:py-10 items-center justify-center max-w-[1440px] px-2.5 w-full">
          <div className={`flex flex-col gap-[17px] ${entry.innerHeight} items-center justify-center ${entry.maxWidth} mx-auto md:px-5 w-full`}>
            <img src={frame1} className="h-[283px] w-[283px] sm:h-[180px] sm:w-[180px]" alt="frame" />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtJuraBold32"
            >
              {entry.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < entry.titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </Text>
            <RichText
              segments={entry.description}
              className="max-w-[545px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtJuraRegular24"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
