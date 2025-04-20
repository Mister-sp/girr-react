import React from "react";

type HeaderProps = {
  title: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ title, className = "" }) => (
  <header className={`text-2xl font-bold p-4 ${className}`}>
    {title}
  </header>
);

export default Header;
