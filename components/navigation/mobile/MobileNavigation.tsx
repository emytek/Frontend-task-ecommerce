import React, { useState } from "react";
import Newnav from "./Newnav";
import Sidebar from "./Sidenav";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Newnav toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MobileNav;
