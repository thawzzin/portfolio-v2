import React from "react";
import ArrowButton from "../reusable/ArrowButton";
import Image from "next/image";
import { Stack, Text, Title } from "@mantine/core";

const WorkCard = ({ work }: { work: any }) => {
  return (
    <div
      className="md:flex gap-10 border-[#D1D1C7]/30 last:border-none border-b-[1px] py-10 md:py-20
    "
    >
      <Stack className={`md:w-[50%] mb-10 md:mb-0 `}>
        <Title order={2}>{work.title}</Title>
        <Text className="will-change-transform"> {work.description} </Text>
        <div className="flex gap-5 mt-5">
          {work.icons.map((icon: string, index: number) => (
            <Image key={index} width={28} height={28} src={icon} alt="icon" />
          ))}
        </div>
        <div className="flex md:gap-20 justify-between md:justify-start flex-wrap">
          {work.githubUrl && (
            <ArrowButton url={work.githubUrl} >
              View on Github
            </ArrowButton>
          )}
          {work.url && <ArrowButton url={work.url} >
            View Live Demo
          </ArrowButton>}
        </div>
      </Stack>
      <div className="relative md:w-[60%]">
        <div className="flex gap-x-5 md:gap-x-10">
          <div className="relative">
            <div
              className={
                work.type === "mobile"
                  ? "md:ml-10 md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-[#A6AEBA] border-solid border-2"
                  : "md:ml-10 rounded-2xl overflow-hidden border-[#A6AEBA] border-solid border-2"
              }
            >
              {work.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  src={work.video}
                  className="w-full h-full object-fill"
                ></video>
              ) : (
                <Image
                  src={work.webimg}
                  alt="project"
                  width={1000}
                  height={100}
                  className="w-full h-full object-fill"
                  unoptimized
                />
              )}
            </div>
            {work.type === "web" && (
              <div className="hidden md:block scale-75 absolute -right-10 -bottom-10">
                <Image
                  src={work.image}
                  alt="project"
                  width={150}
                  height={100}
                  unoptimized
                />
              </div>
            )}
          </div>
          {work.type === "mobile" && (
            <Image
              src={work.image}
              alt="project"
              width={150}
              height={200}
              className="md:w-60 md:h-[450px] w-32 h-56 rounded-2xl overflow-hidden border-[#A6AEBA] border-solid border-2"
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
