import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import portfolio from "../data/portfolio";
import Menu from "../components/Menu";
import Button from "../components/Button";

const allButtons = ["All", ...new Set(portfolio.map((item) => item.category))];

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolio);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolio);
      return;
    }

    const filteredData = portfolio.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolio"} span={"portfolio"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
