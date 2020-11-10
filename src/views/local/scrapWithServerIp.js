import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function ScrapWithIp() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    let keyword = data.keyword;
    let website = data.website;

    const toSend = {
      keyword,
      website,
    };
    console.log(toSend);

    axios
      .post("https://testpup.herokuapp.com/api/runipscrap", toSend)
      .then((res) => {
        notifySuccess();
      })

      .catch((err) => {
        notifyError();
      });
  };
  const notifySuccess = () =>
    toast.success("The process is starting...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: "undefined",
    });
  const notifyError = () =>
    toast.error("Something goes wrong!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container
        className="rounded border"
        style={{
          backgroundColor: "white",
          padding: "25px",
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <h5 class="card-title">Scraping with Server IP</h5>
            <div class="dropdown-divider mb-3"></div>
            
            <Row>
              <Col md="3">
                <Form.Label htmlFor="keyword">Keyword</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  ref={register({ required: true })}
                  name="keyword"
                  id="keyword"
                  placeholder="Enter Keyword"
                />
                {errors.keyword && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Keyword is required
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row>
              <Col md="3">
                {" "}
                <Form.Label htmlFor="website">Website</Form.Label>
              </Col>
              <Col>
                {" "}
                <Form.Control
                  ref={register({ required: true })}
                  name="website"
                  id="website"
                  placeholder="Enter website"
                />
                {errors.website && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Website is Required
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <Row className="mt-2">
              <Col md="3"></Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button className="ml-1" variant="danger" type="reset">
                  Reset
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default ScrapWithIp;
