import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Dashboard from "../../Dashboard/Dashboard";
import { RiDashboardFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import SubjectIcon from "@mui/icons-material/Subject";
import BoyIcon from "@mui/icons-material/Boy";
import StudentRegistrationForm from "../../Student/RegistrationStudent";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setmenudata] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            School Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setmenudata("Home")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* <MailIcon /> */}
                <div style={{ fontSize: "20px" }}>
                  <RiDashboardFill />
                </div>
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setmenudata("Classes")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "18px" }}>
                  <FaBook />
                </div>
              </ListItemIcon>
              <ListItemText primary="Classes" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setmenudata("Subjects")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "18px", marginRight: "-6px" }}>
                  <SubjectIcon />
                </div>
              </ListItemIcon>
              <ListItemText primary="Subjects" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setmenudata("Student")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "18px", marginRight: "-6px" }}>
                  <BoyIcon />
                </div>
              </ListItemIcon>
              <ListItemText primary="Student" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => setmenudata("Logout")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon className="logout" />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" className="Content" sx={{ flexGrow: 1, p: 3 }}>
        {menudata == "Home" && <Dashboard />}
        {menudata == "Student" && <StudentRegistrationForm />}
      </Box>
    </Box>
  );
}

// import * as React from "react";
// import {
//   Divider,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   ListSubheader,
// } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";

// import HomeIcon from "@mui/icons-material/Home";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
// import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
// import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
// import ReportIcon from "@mui/icons-material/Report";
// import AssignmentIcon from "@mui/icons-material/Assignment";

// const SideBar = () => {
//   const location = useLocation();
//   return (
//     <>
//       <React.Fragment>
//         <ListItemButton component={Link} to="/">
//           <ListItemIcon>
//             <HomeIcon
//               color={
//                 location.pathname === ("/" || "/Admin/dashboard")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/classes">
//           <ListItemIcon>
//             <ClassOutlinedIcon
//               color={
//                 location.pathname.startsWith("/Admin/classes")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Classes" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/subjects">
//           <ListItemIcon>
//             <AssignmentIcon
//               color={
//                 location.pathname.startsWith("/Admin/subjects")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Subjects" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/teachers">
//           <ListItemIcon>
//             <SupervisorAccountOutlinedIcon
//               color={
//                 location.pathname.startsWith("/Admin/teachers")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Teachers" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/students">
//           <ListItemIcon>
//             <PersonOutlineIcon
//               color={
//                 location.pathname.startsWith("/Admin/students")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Students" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/notices">
//           <ListItemIcon>
//             <AnnouncementOutlinedIcon
//               color={
//                 location.pathname.startsWith("/Admin/notices")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Notices" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/Admin/complains">
//           <ListItemIcon>
//             <ReportIcon
//               color={
//                 location.pathname.startsWith("/Admin/complains")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Complains" />
//         </ListItemButton>
//       </React.Fragment>
//       <Divider sx={{ my: 1 }} />
//       <React.Fragment>
//         <ListSubheader component="div" inset>
//           User
//         </ListSubheader>
//         <ListItemButton component={Link} to="/Admin/profile">
//           <ListItemIcon>
//             <AccountCircleOutlinedIcon
//               color={
//                 location.pathname.startsWith("/Admin/profile")
//                   ? "primary"
//                   : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Profile" />
//         </ListItemButton>
//         <ListItemButton component={Link} to="/logout">
//           <ListItemIcon>
//             <ExitToAppIcon
//               color={
//                 location.pathname.startsWith("/logout") ? "primary" : "inherit"
//               }
//             />
//           </ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItemButton>
//       </React.Fragment>
//     </>
//   );
// };

// export default SideBar;
