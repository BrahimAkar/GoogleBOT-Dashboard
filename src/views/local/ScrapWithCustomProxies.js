import React, { useState } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

function ScrapWithProxy() {
  const { register, handleSubmit, errors } = useForm();
  const [protocol, setProtocol] = useState("Select Protocol");

  const onSubmit = (data) => {
    let obj = {};
    let list = [];

    const proxy = data.proxy;
    const Myarray = proxy.split("\n");

    for (var el of Myarray) {
      obj = {
        IP: el.substr(0, el.indexOf(":")).replace(/\s/g, ""),
        PORT: el.substr(el.indexOf(":") + 1).replace(/\s/g, ""),
      };
      list.push(obj);
    }
    function splitUp(arr, n) {
      var rest = arr.length % n, // how much to divide
        restUsed = rest, // to keep track of the division over the elements
        partLength = Math.floor(arr.length / n),
        result = [];

      for (var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
          add = false;

        if (rest !== 0 && restUsed) {
          // should add one element for the division
          end++;
          restUsed--; // we've used one division element now
          add = true;
        }

        result.push(arr.slice(i, end)); // part of the array

        if (add) {
          i++; // also increment i in the case we added an extra element for division
        }
      }

      return result;
    }
    console.log(splitUp(list, 4));
    const toSend = {
      keyword: data.keyword,
      website: data.website,
      protocol: data.protocol,
      proxies: list,
    };

    axios
      .post("https://aut2.herokuapp.com/api/runcustomprox", toSend)
      .then((res) => {
        notifySuccess();
      })

      .catch((err) => {
        notifyError();
      });
  };

  const validateProxy = (value) => {
    const Myarray = value.split("\n");

   

    var path = /^(?:(\w+)(?::(\w*))@)?([a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})|((?:\d{1,3})(?:\.\d{1,3}){3}))(?::(\d{1,5}))$/;
    for (var elTomatch of Myarray) {
      if (!elTomatch.match(path)) {
        return false;
      }
    }
    return true;

    //   for (var el of Myarray) {
    //     obj = {
    //       IP: el.substr(0, el.indexOf(":")).replace(/\s/g, ""),
    //       PORT: el.substr(el.indexOf(":") + 1).replace(/\s/g, ""),
    //     };
    //     list.push(obj);
    //   }
    //   this.setState({ [e.target.name]: list });
    //   console.log(list);
  };
  const validateDropDownProtocol = (e) => {
    if (e === "Select a country") {
      return false;
    }
    return true;
  };
  const handleSelectProtocol = (e) => {
    console.log(e);
    setProtocol(e);
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
            <h5 class="card-title">Scraping With Cuctom Proxies</h5>
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
                <Form.Label htmlFor="website">WebSite</Form.Label>
              </Col>
              <Col>
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
            <Row>
              <Col md="3">
                <Form.Label htmlFor="proxy">Proxies</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  name="proxy"
                  id="proxy"
                  rows="10"
                  placeholder="IP:PORT"
                  ref={register({
                    required: true,
                    validate: validateProxy,
                  })}
                />
                {errors.proxy && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Please Verify your proxy list!
                  </p>
                )}
              </Col>
            </Row>
            <Form.Group>
              <Row>
                <Col md="3" className="mt-2">
                  <Form.Label htmlFor="country">Protocol</Form.Label>
                </Col>
                <Col>
                  {" "}
                  <select
                    style={{ padding: "8px" }}
                    className="mt-2"
                    onSelect={handleSelectProtocol}
                    ref={register({
                      required: true,
                      validate: validateDropDownProtocol,
                    })}
                    title={protocol}
                    name="protocol"
                    id="protocol"
                  >
                    <option selected="selected" value="Select a country">
                      Select a Protocol
                    </option>
                    <option value="http://">HTTPS/HTTP</option>
                    <option value="socks4://">SOCKS4</option>
                    <option value="socks5://">SOCKS5</option>
                  </select>
                  {errors.protocol && (
                    <p style={{ color: "red", marginTop: "4px" }}>
                      Please select a Protocol
                    </p>
                  )}
                </Col>
              </Row>
            </Form.Group>
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

export default ScrapWithProxy;
