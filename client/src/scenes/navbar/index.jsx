import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogin } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const NavBar = () => {
  const mode = useSelector((state) => state.mode);
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  // const neutralLight = theme.palette.neutral.light;
  // const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  console.log(theme.palette);
  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween>
        <Typography fontWeight="bold" fontSize="clamp(1rem,2rem,2.25rem)">
        Navbar
          <IconButton
            onClick={() => {
              dispatch(setMode());
            }}
          >
           { mode=='light'? <DarkMode />:<LightMode />}
          </IconButton>
        </Typography>
      </FlexBetween>
      {isNonMobileScreens ? 
      ( <FlexBetween>
        äsd (
      </FlexBetween> ):(<IconButton onClick={() => setIsMobileMenuToggled((prev) => !prev)}>
          {isMobileMenuToggled ? <Close /> : <Menu />}
        </IconButton>)}
    </FlexBetween>
  );
};

export default NavBar;