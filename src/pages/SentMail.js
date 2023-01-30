//import React, { useEffect } from "react";
import "./SentMail.css";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { deleteSentMessage } from "../store/compose-actions";

const SentMail = () => {
  const sentData = useSelector((state) => state.compose.sentData);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchSentMail());
  // }, [dispatch]);

  const deleteMessageHandler = (id) => {
    dispatch(deleteSentMessage(id));
  };
  console.log(sentData);
  const sentList = sentData.map((data) => {
    return (
      <div>
        <Container>
          <Row xs={3} className="bg-light border p-3">
            <Col>
              <div>To:{data.To}</div>
            </Col>
            <Col>
              <div>Message:{data.message}</div>
            </Col>
            <Col>
              <Button
                onClick={() => deleteMessageHandler(data.id)}
                variant="danger"
                className="deletebtn"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
  return <div>{sentList}</div>;
};

export default SentMail;
