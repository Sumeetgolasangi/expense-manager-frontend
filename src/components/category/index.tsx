import React from "react";
import ItemList from "./item-list";
const Categories: React.FC = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h4>Categories</h4>

      <div style={{ display: "flex", marginTop: "-10px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
        </svg>
        <div style={{ marginTop: "-1px", marginLeft: "2px", fontSize: "15px" }}>
          Gallery.
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.055)",
          margin: "10px 0",
        }}
      ></div>
      <ItemList />
    </div>
  );
};

export default Categories;
