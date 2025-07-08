import { useState } from "react";

export const BucketList = () => {
  type BucketItem = {
    completed: boolean;
    id: number;
    title: string;
  };
  const items: Array<BucketItem> = [{ id: 1, title: "No1", completed: true }];
  //move to dir

  const [newItem, setNewItem] = useState("");
  const handleAdd = () => {
    console.log(newItem);
  };
  const toggleComplete = (id: number, completed: boolean) => {
    console.log(id, completed);
  };

  return (
    <div>
      <div>
        <h2> 🎯 Bucket list:</h2>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new goal... 🎯"
            className="text-green-500"
          />
          <button
            onClick={handleAdd}
            className=""
          ></button>
        </div>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            <span
              className={item.completed ? "line-through text-gray-400" : ""}
            >
              {item.title}
            </span>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => toggleComplete(item.id, e.target.checked)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
