import React from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search';

const items = [
  {
    title: "What is React?",
    content:
      "React is a JavaScript library for building interactive user interfaces."
  },
  {
    title: "Why use React?",
    content:
      "It's fast, scalable and simple. And come's with a huge helpful community!"
  },
  {
    title: "How do you use React?",
    content:
      'You use React by composing isolated pieces of code called "components".'
  }
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
