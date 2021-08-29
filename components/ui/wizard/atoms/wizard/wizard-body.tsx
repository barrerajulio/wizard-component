import React, { FC } from "react";

import useWizard from "../../hooks/use-wizard";

interface IWizardBodyProps {
  children: React.ReactNodeArray;
}

const WizardBody: FC<IWizardBodyProps> = ({ children }) => {
  const { isActive } = useWizard();
  const contentChildren = React.Children.toArray(children);

  return (
    <React.Fragment>
      {contentChildren.find((_child, index) => isActive(index))}
    </React.Fragment>
  );
};

export default WizardBody;
