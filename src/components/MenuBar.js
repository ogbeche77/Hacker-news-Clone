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
          name="hacker news"
          active={activeItem === "hacker news"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="new"
            active={activeItem === "new"}
            onClick={handleItemClick}
            as={Link}
            to="/new"
          />
          <Menu.Item
            name="past"
            active={activeItem === "past"}
            onClick={handleItemClick}
            as={Link}
            to="/past"
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default MenuBar;
