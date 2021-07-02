import React from "react";

const PortfolioItem  = (props) => (
    <div>
      <h1 className="all">A thing I've done</h1>     
      <p className="all">This page is for the item with the id of {props.match.params.id}</p>
    </div>
)

export default PortfolioItem