import React from "react";
import List from "./list";

const ItemList: React.FC = () => {
  const list = [
    {
      id: 1,
      name: "Food and Drinks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
        </svg>
      ),
      cost: 0,
    },
    {
      id: 2,
      name: "Groceries",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M350-40q-30 0-52.5-19.5T271-109l-71-531h560l-71 531q-4 30-26.5 49.5T610-40H350Zm0-80h260l58-440H291l59 440Zm130-200q50 0 85-35t35-85v-80h-80v80q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-80h-80v80q0 50 35 85t85 35Zm120-360q-25 0-42.5-17.5T540-740q0-25 17.5-42.5T600-800q25 0 42.5 17.5T660-740q0 25-17.5 42.5T600-680Zm-200-40q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm210 600H350h260Z" />
        </svg>
      ),
      cost: 0,
    },
    {
      id: 3,
      name: "Shopping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
      ),
      cost: 0,
    },
    {
      id: 4,
      name: "Transportation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
        </svg>
      ),
      cost: 0,
    },
  ];
  return (
    <div className="list">
      {list.map((item) => (
        <List
          key={item.id}
          id={item.id}
          name={item.name}
          icon={item.icon}
          cost={item.cost}
        />
      ))}
    </div>
  );
};

export default ItemList;
