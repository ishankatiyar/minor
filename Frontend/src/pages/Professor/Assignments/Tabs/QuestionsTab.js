import { Tab, Nav, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

//This Tab will be used to select questions for the assignment
function QuestionsTab({ setFormData, MyQuestions, OtherQuestions, handleSubmit }) {
    return (
        <>
            <Tab.Container defaultActiveKey={"MyQuestions"}>
                <Nav variant="tabs" fill>
                    <Nav.Item>
                        <Nav.Link eventKey="MyQuestions">My Questions</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                <Tab.Content>
                    {/* My Questions */}
                    <Tab.Pane eventKey="MyQuestions">
                        <hr />
                        <Form.Group controlId="myQuestions" className="mt-3">
                            {/* iterate over MyQuestions Array */}
                            {MyQuestions.map((question, index) => (
                                <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={question.QuestionName}
                                    id={question._id}
                                    className="mt-3"
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        if (isChecked) {
                                            // Add the question _id to the Questions array
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                Questions: [...prevFormData.Questions, question._id]
                                            }));
                                        } else {
                                            // Remove the question _id from the Questions array
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                Questions: prevFormData.Questions.filter(selectedQuestion => selectedQuestion !== question._id)
                                            }));
                                        }
                                    }}
                                />
                            ))}
                        </Form.Group>
                        <hr />
                    </Tab.Pane>
                    {/* Other Questions */}
                    <Tab.Pane eventKey="OtherQuestions">
                        <hr />
                        <Form.Group controlId="otherQuestions" className="mt-3">
                            {/* iterate over OtherQuestions Array */}
                            {OtherQuestions.map((question, index) => (
                                <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={question.QuestionName}
                                    id={question._id}
                                    className="mt-3"
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        if (isChecked) {
                                            // Add the question _id to the Questions array
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                Questions: [...prevFormData.Questions, question._id]
                                            }));
                                        } else {
                                            // Remove the question _id from the Questions array
                                            setFormData((prevFormData) => ({
                                                ...prevFormData,
                                                Questions: prevFormData.Questions.filter(selectedQuestion => selectedQuestion !== question._id)
                                            }));
                                        }
                                    }}
                                />
                            ))}
                        </Form.Group>
                        <hr />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <Button variant="primary" className="w-100" onClick={handleSubmit}>Submit</Button>
        </>
    )
}

export default QuestionsTab;