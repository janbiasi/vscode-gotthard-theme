import React, {
  MouseEvent,
  forwardRef,
  useEffect,
  useCallback,
  FC,
} from "react";
import { MyService } from "./Other";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

interface ButtonProps {
  onClick?: (ev: any) => void;
  title: string;
  hoverTitle?: string;
  type: ButtonType;
}

const someGenericFunction = <T extends string>(input: T) => {
  return input.toUpperCase();
};

export const SubComponent: FC<{}> = () => <p>Component</p>;

export const objectExample = {
  property: "Hello World",
  andSomeOther: 10,
  andMore: {
    nested: [10, 20, undefined, null, Number.POSITIVE_INFINITY, void 0],
  },
};

// Inline comment test
const service = new MyService();

// This is for error testing
Object.someMethodThatDoesNotExist();

/**
 * This is a simple button component
 * --> and can do something fancy {@link Button.onClick}
 * @see https://test.com
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, hoverTitle, onClick, type = ButtonType.PRIMARY }, ref) => {
    const usedTitleVar = title;
    const unusedVar = [title, "test", 20, { a: 20 }, ["test"]];

    useEffect(() => {
      console.log("Hello from Button!");
    }, []);

    const onMouseOver = useCallback(
      (ev: MouseEvent<HTMLButtonElement>) => {
        alert("Hovered!" + ev.type);
      },
      [title]
    );

    return (
      <button
        key="test"
        className={`button ${type}`}
        ref={ref}
        onClick={onClick}
        title={hoverTitle || ""}
        onMouseOver={(ev) => {
          onMouseOver(ev);
        }}
      >
        Button:
        {someGenericFunction(usedTitleVar)}
        <SubComponent />
        <img src="https://placehold.it/100x100?text=Icon" />
      </button>
    );
  }
);

Button.displayName = "Button";
