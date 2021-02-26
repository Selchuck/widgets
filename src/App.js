import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
  {
    label: 'The Colour Red',
    value: 'red'
  },
  {
    label: 'The Colour Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} />
      <Search /> */}
      {/* <Dropdown
        label="Select a Colour" 
        selected={selected}
        onSelectedChange={setSelected} 
        options={options}
      /> */}
      <Translate />
    </div>
  );
};
