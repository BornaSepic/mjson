import React, {useState} from 'react';
import * as Styled from "./JSONInput.css";

interface JSONInputProps {
  handleJsonUpdate: (jsonValue: string) => void;
}

const JSONInput = (props: JSONInputProps): JSX.Element => {
  const [jsonUnformatedValue, setJsonUnformatedValue] = useState('');

  const handleJsonUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let jsonValue: string = e.target.value;
    setJsonUnformatedValue(jsonValue);

    try {
      jsonValue = JSON.parse(jsonValue);
    } catch (errorEvent) {
      console.log(errorEvent);
      return;
    }
    const value: string = JSON.stringify(jsonValue, null, '  ');
    
    props.handleJsonUpdate(value);
  };

  return (
    <>
      <Styled.Textfield
        multiline={true}
        rows={30}
        value={jsonUnformatedValue}
        onChange={handleJsonUpdate}
        placeholder={"Paste your JSON here"}
      />
    </>
  );
};

export default JSONInput;
