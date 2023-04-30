import { FC } from "react";
import useTodos from "../../store/data/todos/useTodos";

import Head from "next/head";
import styles from "@/styles/FirstPost.module.css";

const FirstPost: FC = () => {
  const { acCreate, todos } = useTodos();

  const {todosList} = todos;

  const handleCreate = () => {
    acCreate({
      date: "2023-02-06",
      time: "1443",
      title: "Some title",
      value: "this is the value",
      category: ["some category"],
    });
  };
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <main className={styles.main}>
        <p>Hello I am the first post</p>
        {todosList.length > 0 ? (
          <ul>
            {todosList.map((item, ind) => (
              <li key={`todo-${item.title}-${ind}`}>{item.title}</li>
            ))}
          </ul>
        ) : null}
        <button onClick={handleCreate}>Create todo</button>
      </main>
    </>
  );
};

export default FirstPost;
