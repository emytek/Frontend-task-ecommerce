import React, { useState } from "react";
import Newnav from "../../components/Landing/components/Newnav";
import Sidebar from "../../components/Landing/components/Newsidenav";

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
