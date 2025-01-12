"use client"

import React, { ReactElement } from "react";
import { ReactTyped } from "react-typed";

interface TypedWrapperProps {
  strings: string[]; // Array of strings to type
  typeSpeed?: number; // Speed of typing (default: 40)
  backSpeed?: number; // Speed of backspacing (default: 50)
  loop?: boolean; // Whether to loop the animation (default: true)
  attr?: string; // Optional: Attribute to apply typing to (e.g., placeholder)
  children?: ReactElement; // Restrict to ReactElement or undefined
}

const TypedWrapper: React.FC<TypedWrapperProps> = ({
  strings,
  typeSpeed = 40,
  backSpeed = 50,
  loop = true,
  attr,
  children,
}) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
      attr={attr}
    >
      {children}
    </ReactTyped>
  );
};

export default TypedWrapper;
