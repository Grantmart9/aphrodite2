import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
} from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { About } from "pages/About";
import { Specials } from "pages/Specials";
import { Contact } from "pages/Contact";
import { Products } from "pages/Products";
import { buttonColor, layoutColor,pageHeading,fontType } from "components/feutures";

const menuItems = [
  { name: "Products", path: "/products" },
  { name: "Specials", path: "/specials" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Home = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ backgroundColor: layoutColor }}>
          <Toolbar>
            <Button
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon className="text-gray-500" />
            </Button>
            <Typography variant="h6" component="div" sx={{color:pageHeading, flexGrow: 1,fontFamily:fontType }}>
              <div className="flex align-center justify-center">
                Aphrodite
              </div>
            </Typography>
            <Button color="inherit">
              <div style={{fontFamily:fontType}} className="text-gray-500">Login</div>
            </Button>
          </Toolbar>
        </AppBar>
        <div className="flex">
          {open ? (
            <div
              style={{ backgroundColor: layoutColor, minWidth: "300px" }}
              className="rounded shadow-md mt-1"
            >
              <div className="flex align-center justify-center">
                <div className="grid grid-rows-4 gap-2 p-2 mt-3">
                  {menuItems.map((item) => (
                    <Button size="large" sx={{ color: buttonColor }}>
                      <Link to={item.path}>
                        <div style={{fontFamily:fontType}} className="text-md">{item.name}</div>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          <div
            style={{ backgroundColor: layoutColor,fontFamily:fontType }}
            className="rounded shadow-md h-screen p-2 mt-1 ml-1"
          >
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/specials">
                <Specials />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
