import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Live extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      response2: false,
      response3: false,
      response4: false,
      response5: false,
      response6: false,
      response1: false,
      endpoint: "https://testpup.herokuapp.com",
      endpoint2: "https://aut2.herokuapp.com",
      // aut2 ==> brahim.akaroouch
      endpoint3: "https://aut3.herokuapp.com",
      endpoint4: "https://aut44.herokuapp.com",
      endpoint5: "https://aut5.herokuapp.com",
      endpoint6: "https://aut6.herokuapp.com",
      endpoint1: "http://localhost:2629",
      // endpoint1: "https://keyshunt.com",
      // alijilali58@gmail.com
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const { endpoint2 } = this.state;
    const { endpoint3 } = this.state;
    const { endpoint4 } = this.state;
    const { endpoint5 } = this.state;
    const { endpoint6 } = this.state;
    const { endpoint1 } = this.state;
    const socket = socketIOClient(endpoint);
    const socket2 = socketIOClient(endpoint2);
    const socket3 = socketIOClient(endpoint3);
    const socket4 = socketIOClient(endpoint4);
    const socket5 = socketIOClient(endpoint5);
    const socket6 = socketIOClient(endpoint6);
    const socket1 = socketIOClient(endpoint1);
    socket.on("process", (data) => this.setState({ response: data }));
    socket2.on("process2", (data2) => this.setState({ response2: data2 }));
    socket3.on("process3", (data3) => this.setState({ response3: data3 }));
    socket4.on("process4", (data4) => this.setState({ response4: data4 }));
    socket5.on("process5", (data5) => this.setState({ response5: data5 }));
    socket6.on("process6", (data6) => this.setState({ response6: data6 }));
    socket1.on("premium", (data1) => this.setState({ response1: data1 }));
  }
  render() {
    const { response } = this.state;
    const { response2 } = this.state;
    const { response3 } = this.state;
    const { response4 } = this.state;
    const { response5 } = this.state;
    const { response6 } = this.state;
    const { response1 } = this.state;
    return (
      <div>
        {/* // ! DELETE IF ITSNT WORKING ! */}
        <div class="container-fluid content-row">
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col-sm-12 col-lg-12 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 1</h2>
                  <p class="card-text">
                    {response1 ? (
                      <h4>{response1}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        Premium Server is UP 👨‍💻
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col-sm-12 col-lg-6 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 2</h2>
                  <p class="card-text">
                    {response ? (
                      <h4>{response}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 2 is UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 py-2">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5" style={{ textAlign: "center" }}>
                    🟢 Server 3
                  </h2>
                  <p class="card-text">
                    {response2 ? (
                      <h4>{response2}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 3 is UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col-sm-12 col-lg-6 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 4</h2>
                  <p class="card-text">
                    {response3 ? (
                      <h4>{response3}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 4 is UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 5</h2>
                  <p class="card-text">
                    {response4 ? (
                      <h4>{response4}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 5 is UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style={{ textAlign: "center" }}>
            <div class="col-sm-12 col-lg-6 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 6</h2>
                  <p class="card-text">
                    {response5 ? (
                      <h4>{response5}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 6 UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6 py-2 ">
              <div class="card h-100 border-primary">
                <div class="card-body">
                  <h2 class="card-title mb-5">🟢 Server 7</h2>
                  <p class="card-text">
                    {response6 ? (
                      <h4>{response6}</h4>
                    ) : (
                      <span role="img" aria-label="">
                        {" "}
                        Server 7 UP 👨‍💻{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        {/* // ! FIN */}
      </div>
    );
  }
}
export default Live;
