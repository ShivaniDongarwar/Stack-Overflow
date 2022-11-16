import React from "react";

function Avatar({
  children,
  backgroundColor,
  px,
  py,
  borderRadius,
  color,
  fontSize,
  cursor,
}) {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: "" || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration:"none"
  };
  return <div style={style}>{children}</div>;
}

export default Avatar;
