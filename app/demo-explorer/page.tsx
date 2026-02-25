'use client';
import ExplorerSidebar from "./leftcomponent";
import { RightComponent } from "./rightcomponent";

const page = () => {
  return (
    <>
      <div className="fixed w-full top-0 left-0  max-h-[15vh] py-[1%] z-[10000] flex justify-between items-center px-4 shadow-nav bg-blue-200">
        <div>
          <div className="flex items-center">
            <img src="/ec-connect.svg" alt="img" className="w-[2.7vw] h-auto" />
            <span className="text-h1 pl-2">
              Hiring Explorer
            </span>
          </div>
          <span className="text-[clamp(5px,1vw,32px)] font-medium">
            Chart Your Course to Hiring Success
          </span>
        </div>

        <div className="grid grid-cols-6 gap-[0.8vw] h-[72%] w-[75%]">
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Target Fixed
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">50</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#F5DBD6] text-[#F0431D]">
                <div className="">
                  <span>-</span>
                  <span>50.0%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Schedules
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">84</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#F5DBD6] text-[#F0431D]">
                <div className="">
                  <span>-</span>
                  <span>70.0%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Interview No-Show
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">5</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#F5DBD6] text-[#F0431D]">
                <div className="">
                  <span>-</span>
                  <span>29.41%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Offer
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">36</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#F5DBD6] text-[#F0431D]">
                <div className="">
                  <span>-</span>
                  <span>87.8%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Offer No-Show
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">2</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#F5DBD6] text-[#F0431D]">
                <div className="">
                  <span>-</span>
                  <span>15.38%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className=" text-nowrap h-full bg-[#E6F0FC] rounded-[4px] shadow-nav flex flex-col justify-between p-[2%]">
            <p className="text-center text-[clamp(7px,1vw,44px)] font-semibold">
              Joined
            </p>
            <div className="flex items-center justify-evenly py-[5%]">
              <span className="text-[clamp(8px,1.1vw,44px)]">9</span>
              <div className="flex items-center px-2 rounded-[4px] justify-between pr-[6%] h-fit py-[1%] font-medium text-[clamp(7px,1vw,44px)] bg-[#CEF2BD] text-[#2B9B43]">
                <div className="">
                  <span>+</span>

                  <span>100%</span>
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
      <ExplorerSidebar/>
      <RightComponent/>
      </div>
    </>
  );
};

export default page;
