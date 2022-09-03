import * as React from "react";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  )
}

export {Layout}
