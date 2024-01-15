import { createElement } from "react";
import './Text.scss'

const Text = ({
  children,
  className,
  text,
  tag,
  h1,
  h2,
  h3,
  sh1,
  sh2,
  sh3,
  ui1,
  ui2,
  ui3,
  bold,
  italic,
  ...rest
}) => {
  let classNames = [];
  if (h1) {
    classNames = ["h1"];
  } else if (h2) {
    classNames = ["h2"];
  } else if (h3) {
    classNames = ["h3"];
  } else if (sh1) {
    classNames = ["sh1"];
  } else if (sh2) {
    classNames = ["sh2"];
  } else if (sh3) {
    classNames = ["sh3"];
  } else if (ui1) {
    classNames = ["ui1"];
  } else if (ui2) {
    classNames = ["ui2"];
  } else if (ui3) {
    classNames = ["ui3"];
  }

  if (bold) classNames.push("bold");
  if (italic) classNames.push("italic");
  if (className) classNames.push(className);

  if (!tag) {
    if ( h1) {
      tag = "h1";
    } else if (h2) {
      tag = "h2";
    } else if (h3) {
      tag = "h3";
    } else {
      tag = "div";
    }
  }

  const CustomTag = ({ tag, children, ...props }) => {
    return createElement(tag, props, children);
  };

  return (
    <CustomTag {...rest} className={classNames.join(" ")} tag={tag}>
      {text}
      {children}
    </CustomTag>
  );
};

export default Text;
