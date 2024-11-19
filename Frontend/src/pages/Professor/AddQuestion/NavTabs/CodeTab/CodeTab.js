import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import SolutionCodeTab from './SolutionCodeTab';

function CodeTab({ formData, handleInputChange }) {


    return (
        <Tab.Container defaultActiveKey={"SolutionCode"}>
            <Nav variant="tabs" className="my-3" fill>
                <Nav.Item>
                    <Nav.Link eventKey="SolutionCode">Solution Code</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="SolutionCode">
                    <SolutionCodeTab formData={formData} handleInputChange={handleInputChange} />
                </Tab.Pane>
                
            </Tab.Content>
        </Tab.Container>
    );
}

export default CodeTab;
