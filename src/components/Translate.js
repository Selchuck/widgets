import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Bulgarian',
    value: 'bg'
  }, 
  {
    label: 'Chinese',
    value: 'zh-TW'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Turkce',
    value: 'tr'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown 
        label="Select a Language"
        selected={language} 
        onSelectedChange={setLanguage} 
        options={options} 
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;