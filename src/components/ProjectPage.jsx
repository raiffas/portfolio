import { Img, List, Text } from "components";
export function ProjectPage({ pageRef }) {
    return (
        <div key={"elemProj"} ref={pageRef} className="flex flex-col md:gap-10 gap-[100px] h-[3000px] md:h-auto items-start justify-start max-w-[1440px] w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                  size="txtJuraRegular32"
                >
                  Research and Development
                </Text>
                
                <div className="flex flex-col gap-[47px] h-[850px] md:h-auto items-start justify-start max-w-[1440px] w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Research with Lockheed Martin
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <>
                        Gaze adaptive interactions and user interfaces in AR
                        with gaze tracking <br />
                        visualizations <br /> 
                        Research and design of new methods for LMCO to utilize
                        gaze tracking <br />
                        to improve the design and user experience of AR
                        applications.<br/>
                        Developed in Unity with OpenXR for use with Hololens 2. <br/>
                        Fall 2023-Spring 2024
                        <br />{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="max-w-[710px] md:max-w-full text-base text-right text-white-A700 w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Submission to ISMAR 2024
                    </Text>
                    <Text
                      className="text-base text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Scoping review with dynamic topic modeling of <br/>360-degree video applications
                      areas <br></br>Fall 2023-May 2024
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      Research with Boarding Ring
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <>
                        Evaluating cybersickness reduction techniques 
                        <br />
                        Working alongside leadership at Boarding Ring to
                        evaluate Seenetic VR, <br />
                        their solution for cybersickness in Virtual Reality. <br/>
                        Compiled publically available 360-degree videos for automatic playback <br/> 
                        and data collection in Unity for use with Meta Quest Pro.
                        <br/> Summer-Fall 2023
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      IEEEVR 2024 Presented Poster
                    </Text>
                    <Text
                      className="text-base text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      <span className="text-white-A700 font-jura text-left font-normal">
                        <>
                          Physical locomotion techniques and presence in virtual
                          reality<br></br>
                          Responsible for (1) user study design to evaluate
                          performance metrics of <br />
                          two locomotion methods (Redirected Walking and Virtuix
                          Omni) and
                          <br />
                          (2) virtual museum experience which served as experiment stimuli <br></br> in Unreal Engine 4 for use with HTC Vive Cosmos. 
                          <br />Fall 2021-Spring 2022
                          <br />
                        </>
                      </span>
                      <span className="text-red-A100 font-jura text-left font-normal">
                        Publication Link Coming Soon
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                    <Text
                      className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                      size="txtJuraRegular16"
                    >
                      ISMAR 2022 Short Paper
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtJuraRegular16"
                    >
                      <span className="text-white-A700 font-jura text-left font-normal">
                        <>
                          Cross Reality interaction methods user study with Matt Gottsacker
                            <br />
                          As a team, designed and conducted a user study to
                          evaluate the <br />effect of
                          
                          Matt’s interruption cue prototype.
                          Designed a theoretical
                          <br />
                          yet ecological valid scenario to test function and
                          gather user <br />attitudes
                          
                          towards the interactions. <br />
                          CAP 6919 Fall 2021 <br></br>
                        </>
                      </span>
                      <span className="text-red-A100 font-jura text-left font-normal">
                      <a href="https://ieeexplore.ieee.org/abstract/document/9974530" rel="noreferrer">Publication Link</a>
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[100px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                    size="txtJuraRegular32"
                  >
                    Digital Experiences
                  </Text>
                  <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        360-Degree Video concept
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            "Eye Spy"
                            <br />
                            
                            Testing eye spy concept to use for a research project comparing <br/>monoscopic and steroscopic 360-degree video
                            <br/>
                            Fall 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.youtube.com/playlist?list=PLNRs9nCboNSSzjFt99xWhDz3sNMNBA5gP" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Snapchat AR Lens
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Halloween Party Lens
                            <br />
                            Designed in Canva, developed in Lens Studio <br/>
                            October 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=86d8441d99a84425be2f9372ee6e17ea&metadata=01" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Snapchat AR Lens
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            SIGGRAPH 2023 T-Shirt AR Lens with Dr. Mark
                            Billinghurst
                            <br />
                            Allowed conference attendees to virtually try on <br />T-shirts, hats, and pins from previous iterations of the conference <br />in honor of the 50th anniversary of SIGGRAPH.
                            <br />
                            Developed in Lens studio.
                            <br />
                            Summer 2023 <br/>
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://s2023.siggraph.org/presentation/?id=histc_140&sess=sess422" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        VR Experience
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Virtual Reality Dining Room Experience
                            <br />
                          
                            Developed with Unity and OpenXR for use with HP Omnicept. <br/>
                            CAP 5115 Spring 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                        <a href="https://www.youtube.com/playlist?list=PLNRs9nCboNSQZKt2KeMqN7Eu3ymWBUPpq" rel="noreferrer">Project Link</a>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                    size="txtJuraRegular32"
                  >
                    Presentations and Speaking Opportunities
                  </Text>
                  <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">

                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Invited Panelist
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            “How AI and Metaverse will impact our future”
                            <br />
                            2023 Central Fl NCWIT Aspirations in Computing Award
                            Ceremony
                            <br />
                            April 15, 2023
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                          <a href="https://stem.ucf.edu/wp-content/uploads/2023/04/2023-NCWIT-Aic-Program-Full-1.pdf" rel="noreferrer">Program Link</a>
                        </span>
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Research Presentation
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            “Building a Successful Imaging Project in the
                            Digital Humanities”
                            <br />
                            History and Literature Master’s Program, Columbia
                            University
                            <br />
                            Paris, France
                            <br />
                            May 17, 2019
                            <br />
                          </>
                        </span>
                        <span className="text-red-A100 font-jura text-left font-normal">
                          <a href="https://globalcenters.columbia.edu/sites/default/files/content/Paris/Publications/digital%20humanities.pdf" rel="noreferrer">Program Link</a>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-1 flex-col gap-[43px] items-center justify-start max-w-[1440px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                    size="txtJuraRegular32"
                  >
                    Technical Experience
                  </Text>
                  <div className="flex flex-col gap-[47px] items-start justify-start max-w-[1440px] w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Graduate Research Assistant
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            VARLAB - University of Central Florida, Orlando, FL
                            <br />
                            (1) Continuously managed 2-4 AR/VR research and development <br />projects with monthly deliverables
                            <br />
                            (2) Designed and developed a realistic VR museum experience with <br />Unreal Engine 4, HTC Vive Cosmos, and physical locomotion <br />methods (Redirected Walking and Omni-Directional Treadmills)
                            <br />
                            (3) Created EyeToolKit (EyeTK) to facilitate adding gaze based <br />interactions and gaze adaptive user interfaces in Unity/OpenXR <br/>AR projects for the Hololens2 <br/>
                            August 2020-May 2024
                            <br />
                          </>
                        </span>

                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Software Engineer (Contractor)
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Delta V Innovations, Cincinatti, OH (remote)
                            <br />
                            (1) Invited to join the development team after successful <br />delivery of a 12-week senior design project
                            <br />
                            (2) Worked closely with the lead engineer to integrate <br />new UI features for a physics-based vehicle crash <br />reconstruction visualization software using C++ and QT
                            <br />
                            May 2020-October 2020
                            <br />
                          </>
                        </span>

                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Software Engineer (Contractor)
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Lexcelon LLC, Lexington, KY (remote)
                            <br />
                            (1) Feature development for an experimental, at-home <br/>physical therapy application/system for Active Therapy Systems
                            <br />
                            using React Native <br/>
                            December 2019-August 2020
                            <br />
                          </>
                        </span>

                      </Text>
                    </div>

                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Associate IT Systems Analyst
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            GE Appliances, Louisville, KY
                            <br />
                            (1) Streamlined the migration of two business applications <br/>used by GE engineers
                            <br />
                            (2) Collaborated with infrastructure teams, developers, <br/>and IT and Engineering project leads to ensure a <br/>sucessful migration
                          
                            <br />
                            (3) Worked on front end (Cordova) and back end (AWS IoT Core) <br/>for a cross-platform mobile application to monitor activity <br/>for an indoor smoker developed by FirstBuild
                            <br/>
                            May 2019-July 2019
                            <br />
                          </>
                        </span>

                      </Text>
                    </div>

                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Undergraduate Research Assistant
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Digital Restoration Initiative, University of Kentucky, Lexington, KY
                            <br />
                            (1) Developed an automatic XML metadata collection and <br />delivery process to solve a long-standing issue with the <br />existing Virtual Unwrapping pipeline
                            <br />
                            (2) Published and presented work locally and internationally
                            <br />
                            (3) Spearheaded production on video detailing the lab’s <br />innovations in Machine Learning
                            <br />
                            August 2018-August 2020
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>

                    

                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1440px] w-full">
                      <Text
                        className="text-base md:text-left text-right text-white-A700 md:w-full w-[710px]"
                        size="txtJuraRegular16"
                      >
                        Engineer Co-op
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtJuraRegular16"
                      >
                        <span className="text-white-A700 font-jura text-left font-normal">
                          <>
                            Trane, Lexington, KY
                            <br />
                            (1) Developed a new feature for a VB.NET application <br />that supported an improvement plan for a
manufacturing plant. <br />Feature reduced waste of cut metal parts
                            <br />
                            (2) Developed a VBA application used by all project leaders <br />to easily access important dates and
information <br />on all current projects. Automated updating of desired <br />project information<br />
                            January 2018-July 2018
                            <br />
                          </>
                        </span>

                      </Text>
                    </div>

 


                  </div>
                </div>
            </div>

            
    )
}