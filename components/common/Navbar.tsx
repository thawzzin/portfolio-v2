import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div className="hidden md:block fixed z-50 right-20 top-10 text-[#D1D1C7]">
      <StyledWrapper>
        <div className="nav">
          <div className="container">
            <Link href="#about" className="btn">
              About
            </Link>
            <Link href="#projects" className="btn">
              Projects
            </Link>
            <Link href="#skills" className="btn">
              Skills
            </Link>
            <Link href="#contact" className="btn">
              Contact
            </Link>
            <svg
              className="outline"
              style={{ outlineWidth: 0 }}
              overflow="visible"
              width={400}
              height={60}
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="rect"
                pathLength={100}
                x={0}
                y={0}
                width={400}
                height={60}
                fill="transparent"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #D1D1C7;
  }

  .nav {
    position: relative;
    width: 400px;
    height: 60px;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    /* Must specify these values here as something *different* just so that the transition works properly */
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .btn {
    padding: 0.5em 1.5em;
    // color: #fff;
    cursor: pointer;
    transition: 0.1s;
  }

  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 11 9.5 52.3 9.5 31.6;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 22.7 8.5 31 8.5 55.5;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;

export default Navbar;
