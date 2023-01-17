import React from "react";
import { useState } from "react";
import { ProductList } from "components/lists/ProductsList";
import { MakeupList } from "components/lists/Makeup";
import { SkincareList } from "components/lists/Skincare";
import { FragrancesList } from "components/lists/Fragrances";
import Button from "@mui/material/Button";
import {
  buttonColor,
  pageHeading,
  fontType,
} from "components/feutures";

const Navbar = ({ setMenu }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        onClick={() => setMenu(FragrancesList)}
        sx={{
          backgroundColor: "white",
          color: buttonColor,
          fontFamily: fontType,
        }}
      >
        fragrances
      </Button>
      <Button
        onClick={() => setMenu(SkincareList)}
        sx={{
          backgroundColor: "white",
          color: buttonColor,
          fontFamily: fontType,
        }}
      >
        skincare
      </Button>
      <Button
        onClick={() => setMenu(MakeupList)}
        sx={{
          backgroundColor: "white",
          color: buttonColor,
          fontFamily: fontType,
        }}
      >
        makeup
      </Button>
    </div>
  );
};

export const Products = () => {
  const [menu, setMenu] = useState(ProductList);
  return (
    <div>
      <div
        style={{ color: pageHeading }}
        className="text-xl flex align-center justify-center mb-2 p-2 w-full"
      >
        Products
      </div>
      <Navbar setMenu={setMenu} />
      <div className="grid grid-cols-4 gap-2">
        {menu.map((product) => (
          <div className="p-2">
            <div className="p-5">{product.image}</div>
            <div style={{ fontFamily: fontType }} className="text-center mt-1">
              {product.description}
            </div>
            <div style={{ fontFamily: fontType }} className="text-center">
              {product.brand}
            </div>
            <div style={{ fontFamily: fontType }} className="text-center">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
