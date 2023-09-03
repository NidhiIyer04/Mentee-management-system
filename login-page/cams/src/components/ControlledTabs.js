import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Personal Details" title="Personal Details">
        Tab content for Personal Details
      </Tab>
      <Tab eventKey="Academics" title="Academics">
        Tab content for Academics
      </Tab>
      <Tab eventKey="Attendance" title="Attendance">
        Tab content for Attendance
      </Tab>
      <Tab eventKey="Counselling Logs" title="Counselling Logs">
        Tab content for Counselling Logs
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;