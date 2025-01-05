import React from "react";
import { Container } from "@mui/material";
import QuickLinks from "./QuikLinks";
import { Work, Folder, Settings } from "@mui/icons-material";

const QuickLinksExample = () => {
  const links = [
    { label: "Workshops", icon: <Work /> },
    { label: "Projects", icon: <Folder /> },
    { label: "Settings", icon: <Settings /> },
  ];

  return (
    <Container maxWidth="xs" style={{ marginTop: "20px" }}>
      <QuickLinks links={links} />
    </Container>
  );
};

export default QuickLinksExample;
