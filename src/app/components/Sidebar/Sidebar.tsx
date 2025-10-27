"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./Sidebar.module.scss";
import { sidebarData } from "../../lib/placeholder-data";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>("referFriends");

  const handleClick = (id: string) => {
    setSelectedItem(id);
  };

  return (
    <aside className={styles.sidebar}>
      {sidebarData.map((category) => (
        <div key={category.title} className={styles.category}>
          <h3 className={styles.title}>{category.title}</h3>
          <nav>
            {category.items.map((item) => (
              <div
                key={item.id}
                className={`${styles.item} ${
                  selectedItem === item.id ? styles.selected : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className={styles.icon}
                  width={24}
                  height={24}
                />
                {item.name}
              </div>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
