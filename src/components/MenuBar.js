import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
      <Link to="/">
        {" "}
        <h1 className="header-title">Hacker News Clone</h1>{" "}
      </Link>

      <Menu pointing secondary size="large" color="orange">
        <Menu.Item
          name="Recent Articles"
          active={activeItem === "Recent Articles"}
          onClick={handleItemClick}
          as={Link}
          to="/new"
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="hacker questions"
            active={activeItem === "hacker questions"}
            onClick={handleItemClick}
            as={Link}
            to="/ask"
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default MenuBar;
