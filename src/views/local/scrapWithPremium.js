import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function ScrapWithIp() {
  const history = useHistory();
  const navigateTo = () => history.push("/live"); //eg.history.push('/login');

  const { register, handleSubmit, errors } = useForm();
  const [data, setData] = useState({ hits: [] });
  const [lang, setlang] = useState("Select language");
  const [platform, setPlatform] = useState("Select Platform");
  const [google, setGoogle] = useState("Please choose a Google region");

  const [response, setResponse] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://keyshunt.com.com/api/bandwidth");
      console.log("resuuuuuuuuuuult is : ", result);
      setData(result.data.data);
      setResponse(true);
    };

    fetchData();
  }, []);
  const onSubmit = (data) => {
    let keywordtofocus = data.keyword;
    let website = data.website;
    let numproxies = data.numproxies;
    let lang = data.country;
    let platform = data.platform;
    let google = data.google;

    console.log(website);
    let websitesArray = website.split("\n");
    console.log(websitesArray);

    const toSend = {
      keywordtofocus,
      websites: websitesArray,
      clickforeachwebsite: numproxies,
      proxycountry: lang,
      platform,
      googlecountry: google,
    };

    axios
      .post("https://keyshunt.com/api/runpremiumproxyscrap", toSend)
      // .post("http://localhost:2626/api/runpremiumproxyscrap", toSend)
      .then((res) => {
        notifySuccess();
        //  navigateTo();
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
  const validateDropDown = (e) => {
    if (e === "Select a country") {
      return false;
    }
    return true;
  };

  // !

  const validateDropDownGoogle = (e) => {
    if (e === "Please choose a Google region") {
      return false;
    }
    return true;
  };

  const validateDropDownPlatform = (e) => {
    if (e === "Select a platform") {
      return false;
    }
    return true;
  };

  const handleSelect = (e) => {
    console.log(e);
    setlang(e);
  };
  const handleSelectPlatform = (e) => {
    console.log(e);
    setPlatform(e);
  };
  const handleSelectGoogle = (e) => {
    console.log(e);
    setGoogle(e);
  };

  const validateWebsites = (e) => {
    const Myarray = e.split("\n");

    if (Myarray.length < 1) {
      alert("Please type something");
      return false;
    }
    return true;
  };

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
            <h5 class="card-title">Scraping With Premium Proxies</h5>
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
                <Form.Label htmlFor="website">Websites</Form.Label>
              </Col>
              <Col>
                {" "}
                <Form.Control
                  ref={register({ required: true, validate: validateWebsites })}
                  as="textarea"
                  name="website"
                  id="website"
                  placeholder="Enter website"
                />
                {errors.website && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    At least, one website is required!
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="numproxies">Number of proxies</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  ref={register({ required: true })}
                  type="number"
                  min="1"
                  name="numproxies"
                  id="numproxies"
                  placeholder="Enter Number of proxies"
                />
                {errors.numproxies && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Number of proxies is required
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="country">Country</Form.Label>
              </Col>
              <Col>
                {" "}
                <select
                  style={{ padding: "8px" }}
                  className="selectpicker"
                  onSelect={handleSelect}
                  ref={register({
                    required: true,
                    validate: validateDropDown,
                  })}
                  title={lang}
                  name="country"
                  id="country"
                >
                  <option selected="selected" value="Select a country">
                    Select a country
                  </option>
                  <option value="Belgium">Belgium</option>
                  <option value="Germany">Germany</option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                </select>
                {errors.country && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Please select a Country
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>

          {/* Google Search Engine : */}

          <Form.Group>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="google">Google Region</Form.Label>
              </Col>
              <Col>
                {" "}
                <select
                  style={{ padding: "8px" }}
                  className="selectpicker"
                  onSelect={handleSelectGoogle}
                  ref={register({
                    required: true,
                    validate: validateDropDownGoogle,
                  })}
                  title={lang}
                  name="google"
                  id="google"
                >
                  <option
                    selected="selected"
                    value="Please choose a Google region"
                  >
                    Please choose a Google region
                  </option>
                  <option value="com">Google.com [International]</option>
                  <option value="de">Google.de [Germany]</option>
                  <option value="be">Google.de [Belgium]</option>
                  <option value="es">Google.es [Spain]</option>
                  <option value="fr">Google.fr [France]</option>
                  <option value="nl">Google.nl [Netherland]</option>
                </select>
                {errors.google && (
                  <p style={{ color: "red", marginTop: "4px" }}>
                    Please choose a Google region
                  </p>
                )}
              </Col>
            </Row>
          </Form.Group>

          {/* GOogle Search Engine END */}

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

      <Container
        className="rounded border"
        style={{
          backgroundColor: "white",
          padding: "25px",
        }}
      >
        <Form>
          <Form.Group>
            <h5 class="card-title">Bandwidth infos</h5>
            <div class="dropdown-divider mb-3"></div>

            <Row>
              <Col md="3">
                <Form.Label htmlFor="keyword">Bandwidth Limit</Form.Label>
              </Col>
              <Col>
                {response ? (
                  <Form.Label htmlFor="bandwidthlimit">
                    {data.bandwidthLimit}
                  </Form.Label>
                ) : (
                  <p>Loading ...</p>
                )}
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="keyword">Bandwidth Usage</Form.Label>
              </Col>
              <Col>
                {response ? (
                  <Form.Label htmlFor="bandwidthusage">
                    {data.bandwidthUsage}
                  </Form.Label>
                ) : (
                  <p>Loading ...</p>
                )}
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="keyword">Activate On</Form.Label>
              </Col>
              <Col>
                {response ? (
                  <Form.Label htmlFor="activateon">
                    {data.activateOn}
                  </Form.Label>
                ) : (
                  <p>Loading ...</p>
                )}
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Form.Label htmlFor="keyword">Status</Form.Label>
              </Col>
              <Col>
                {response ? (
                  <Form.Label style={{ color: "green" }} htmlFor="status">
                    {data.status} 🟢
                  </Form.Label>
                ) : (
                  <p>Loading ...</p>
                )}
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default ScrapWithIp;
