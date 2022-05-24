import React from "react";

function OnSale({ on_sale, price, regular_price }) {
   return <>{on_sale && <span className="label label-theme">{Math.floor((1 - price / regular_price) * 100)}% Off</span>}</>;
}

export default OnSale;
