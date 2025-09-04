import React from "react";
import UniversalHeader from "./UniversalHeader";
import UniversalFooter from "./UniversalFooter";

type PageTemplateProps = {
  children: React.ReactNode | null;
};

function PageTemplate({ children }: PageTemplateProps) {

  return (
    <center>
      <div id="page" className="block w-[85%]">
        <UniversalHeader />
        <h1>Page Template</h1>
        {children}
        <UniversalFooter />
      </div>
    </center>
  );
}

export default PageTemplate;