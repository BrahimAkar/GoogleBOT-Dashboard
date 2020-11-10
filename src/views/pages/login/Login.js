import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./../../../base";
import { AuthContext } from "./../../../Auth";
import { Form, Button } from "react-bootstrap";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <h1 className="text-center">
                    {" "}
                    <img
                      src="https://youpel.ma/layouts/v7/resources/Images/vtiger.png"
                      height={65}
                      className="text-center"
                      alt=""
                    ></img>
                  </h1>

                  {/* <h1 className="text-center">LOGIN</h1> */}
                  <br></br>
                  <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    // <div>
    //   <h1>Log in</h1>
    //   <form onSubmit={handleLogin}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Log in</button>
    //   </form>
    // </div>
  );
};

export default withRouter(Login);
