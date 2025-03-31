import React from "react";
import "./item-list.css";
interface ListProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  cost: number;
}
const List: React.FC<ListProps> = ({ id, name, icon, cost }) => {
  return (
    <div key={id} className="list-item">
      <div className="list-item-content">
        <div>{icon}</div>
        <div>{name}</div>
      </div>
      <div className="cost">$ {cost}</div>
    </div>
  );
};

export default List;
