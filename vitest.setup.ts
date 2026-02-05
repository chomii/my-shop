import "@testing-library/jest-dom/vitest";
import { ImageProps } from "next/image";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImageProps) => {
    // Return a basic img element
    return React.createElement("img", {
      src: props.src,
      alt: props.alt || "mock alt",
      // Pass other props if needed
    });
  },
}));
