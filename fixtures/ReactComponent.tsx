import React, { forwardRef } from "react";

interface ButtonProps {
  onClick?: (ev: any) => void;
  title: string;
  hoverTitle?: string;
}

// Inline comment test

/**
 * This is a simple button component
 * --> and can do something fancy!
 * @see https://test.com
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, hoverTitle, onClick }, ref) => {
    const xy = title;
    const yz = [title, "test", 20, { a: 20 }, ["test"]];

    return (
      <button ref={ref} onClick={onClick} alt={hoverTitle || ""}>
        {title}
      </button>
    );
  }
);

Button.displayName = "Button";
