import React, {useState} from 'react';

import JSONInput from "../json-input/JSONInput";
import TabPanel from "./components/TabPanel";
import JSONDisplay from "../json-display/JSONDisplay";

import Paper from "@material-ui/core/Paper";

import * as Styled from "./JSONPlayground.css";

const JSONPlayground: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [jsonValue, setJsonValue] = useState('');

  const handleTabIndexChange = (index: number): void => {
    setTabIndex(index);
  };

  const handleJsonUpdate = (json: string): void => {
    setJsonValue(json);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Styled.JSONPlaygroundWrapper elevation={1}>
      <Paper elevation={2}>
        <Styled.TabsWrapper
          value={tabIndex}
          onChange={(e: React.ChangeEvent<{}>, value: number) => handleTabIndexChange(value)}
        >
          <Styled.TabButton label="JSON Input" {...a11yProps(0)} />
          <Styled.TabButton label="JSON Formatter" {...a11yProps(1)} disabled={!jsonValue} />
        </Styled.TabsWrapper>
      </Paper>
      
      <TabPanel value={tabIndex} index={0}>
        <JSONInput handleJsonUpdate={handleJsonUpdate}/>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <JSONDisplay json={jsonValue}/>
      </TabPanel>
    </Styled.JSONPlaygroundWrapper>
  );
};

export default JSONPlayground;