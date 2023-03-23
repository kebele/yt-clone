// burada utils/constants.js oluşturduk, her tarafta kullanacağımız, iconlar, menu item'lar vb. oradan alacağız,
// MUI'deki yapıya örnek aşağıda sx ile istediğimiz style'ı yazabiliriz, Stack div gibi, mouse ile üstün egelip bekleyince demosuna ve API'sine ulaşabiliriz,

import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "stciky",
        background: "$000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
