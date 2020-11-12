import React from "react";

import "./Fieldset.scss";

type FieldsetProps = {
  children: React.ReactNode;
  className?: string;
};

export const Fieldset: React.FC<FieldsetProps> = (props) => {
  const { className = "", children } = props;

  const classNames = `Fieldset ${className}`;
  return <fieldset className={classNames}>{children}</fieldset>;
};

export default Fieldset;
