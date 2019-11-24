import React from 'react';
import {renderPropertyValue} from "./JSONDisplayUtils";

interface JSONDisplayProps {
  json: string;
}

const JSONDisplay = (props: JSONDisplayProps): JSX.Element => {

  const parseJSONtoHTML = () => {
    let json;

    try {
      console.log(props)
      json = JSON.parse(props.json);
    } catch (errorEvent) {
      console.log(errorEvent);
      return;
    }

    return renderPropertyValue(json);
  };

  return (
    <>
      &#123;
      {parseJSONtoHTML()}
      &#125;
    </>
  );
};

export default JSONDisplay;
