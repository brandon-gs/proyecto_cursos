import React from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { Search, FolderShared, Logout } from "@mui/icons-material";
import Link from "./Link";

export default function ButtonAppBar() {
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => setOpenDrawer(false);

  const icons = React.useMemo(
    () => [<FolderShared key="icon-0" />, <Search key="icon-1" />],
    []
  );

  const links = React.useMemo(() => ["/user/courses", "/courses/"], []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <Box
          // sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {["Mis cursos", "Ver cursos"].map((text, index) => (
              <ListItem key={text} component={Link} href={links[index]}>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                localStorage.removeItem("email");
                router.push("/");
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={"Cerrar sesión"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cursos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
