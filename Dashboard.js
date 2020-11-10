import React from "react";
import Moment from "react-moment";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import {
  CCol,
  CRow,
  CCallout,
  CWidgetDropdown,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";

class Dashboard extends React.Component {
  // const [lang, setlang] = useState("Select language");
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      dateTime: null,
      success: null,
      proxy: null,
      PageLink: null,
      screenPath: null,
      fullData: null,
      errorsData: null,
      successLength: null,
      failedLength: null,
      delete: false,
    };
  }

  componentDidMount() {
    const targetUrl = "http://157.245.86.92:2629/api/getokresults";
    trackPromise(
      fetch(targetUrl)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            fullData: data.data,
            successLength: data.length,
          })
        )
    );

    // get all erros:
    // var proxyUrl2 = "https://cors-anywhere.herokuapp.com/",
    const targetUrl2 = "http://157.245.86.92:2629/api/getbadresults";
    trackPromise(
      fetch(targetUrl2)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            errorsData: data.data,
            failedLength: data.length,
          })
        )
    );
  }

  render() {
    const refreshWithNewSuccessData = () => {
      const targetUrl = "http://157.245.86.92:2629/api/getokresults";
      trackPromise(
        fetch(targetUrl)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              fullData: data.data,
              successLength: data.length,
            })
          )
      );
    };
    const refreshWithNewErrorData = () => {
      const targetUrl2 =
        // "https://stark-waters-08877.herokuapp.com/api/getbadresults";
        "http://157.245.86.92:2629/api/getbadresults";
      trackPromise(
        fetch(targetUrl2)
          .then((response) => response.json())
          .then((data) =>
            this.setState({
              errorsData: data.data,
              failedLength: data.length,
            })
          )
      );
    };
    const deleteAllSucess = () => {
      axios
        .delete("http://157.245.86.92:2629/api/deleteokresults")
        // .post("http://localhost:2626/api/runpremiumproxyscrap", toSend)
        .then((res) => {
          refreshWithNewSuccessData();
        })

        .catch((err) => {
          refreshWithNewSuccessData();
        });
    };
    const deleteAllErrors = () => {
      axios
        .delete("http://157.245.86.92:2629/api/deletebadresults")
        // .post("http://localhost:2626/api/runpremiumproxyscrap", toSend)
        .then((res) => {
          refreshWithNewErrorData();
        })

        .catch((err) => {
          refreshWithNewErrorData();
        });
    };
    const dialogForErrors = () => {
      confirmAlert({
        title: "Confirm to delete all Errors", // Title dialog
        message: "Are you sure to do this?", // Message dialog

        buttons: [
          {
            label: "Yes",
            onClick: () => deleteAllErrors(),
          },
          {
            label: "No",
            //     onClick: () => alert("Click No"),
          },
        ],
      });
    };
    const dialogForSuccesses = () => {
      confirmAlert({
        title: "Confirm to delete all success results", // Title dialog
        message: "Are you sure to do this?", // Message dialog

        buttons: [
          {
            label: "Yes",
            onClick: () => deleteAllSucess(),
          },
          {
            label: "No",
            //    onClick: () => alert("Click No"),
          },
        ],
      });
    };
    const LoadingIndicator = (props) => {
      const { promiseInProgress } = usePromiseTracker();
      return (
        promiseInProgress && (
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
          </div>
        )
      );
    };
    function refreshPage() {
      window.location.reload(false);
    }
    const { successLength, fullData, errorsData, failedLength } = this.state;

    if (fullData) {
      var listItems = fullData.map((d) => (
        <tr>
          <td className="text-center">
            <div className="c-avatar">
              <a href={d.screenPath} target="_blank" rel="noopener noreferrer">
                <img
                  src={d.screenPath}
                  className="c-avatar-img"
                  alt="NoPICTURE"
                />
              </a>
              <span className="c-avatar-status bg-success"></span>
            </div>
          </td>
          <td>
            <a
              data-toggle="tooltip"
              data-placement="top"
              title={d.PageLink === undefined ? "OLD SHEMA" : d.PageLink}
              href={d.PageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div>{d.PageLink.substr(0, 18)}</div>
            </a>
            <div className="small text-muted">
              <span>{d.dateTime}</span>
            </div>
          </td>
          <td className="text-center">
            <span> {d.proxy} </span>
          </td>
          <td>
            <span
              data-toggle="tooltip"
              data-placement="top"
              title={d.PageTitle}
            >
              {" "}
              {d.PageTitle.substr(0, 19)}...{" "}
            </span>
          </td>
          <td className="text-center ">
            {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
            <strong
              data-toggle="tooltip"
              data-placement="top"
              title={d.keyword === undefined ? "OLD SHEMA" : d.keyword}
            >
              {d.keyword === undefined ? "OLD SHEMA" : d.keyword.substr(0, 12)}
            </strong>
          </td>
          <td className="text-center ">
            <strong
              data-toggle="tooltip"
              data-placement="top"
              title={d.website === undefined ? "OLD SHEMA" : d.website}
            >
              {d.website === undefined ? "OLD SHEMA" : d.website.substr(0, 12)}
            </strong>
          </td>{" "}
          <td className="text-center">
            <strong
              data-toggle="tooltip"
              data-placement="top"
              title={d.platform === undefined ? "OLD SHEMA" : d.platform}
            >
              {d.platform === "Mobile" ? "📱" : "🖥️" ?? "🖥️"}
            </strong>
          </td>
          <td>
            <div className="small text-muted">Last Succeed</div>
            <strong>{<Moment fromNow>{d.dateTime}</Moment>}</strong>
          </td>
        </tr>
      ));
    } else {
      listItems = (
        <div className="pt-3 text-center">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
      );
    }

    if (errorsData) {
      var listItemsErrors = errorsData.map((d) => (
        <tr>
          <td className="text-center">
            <div className="c-avatar">
              <a href={d.screenPath} target="_blank" rel="noopener noreferrer">
                <img
                  src={d.screenPath}
                  className="c-avatar-img"
                  alt="NoPICTURE"
                />
              </a>
              <span className="c-avatar-status bg-danger"></span>
            </div>
          </td>
          <td>
            {/* <a href={d.PageLink} target="_blank" rel="noopener noreferrer"> */}{" "}
            {/* <div>{d.PageLink.substr(0, 29)}</div> */}
            {/* </a> */}
            <div className="small text-muted">
              <span>{d.dateTime}</span>
            </div>
          </td>
          <td className="text-center">
            <span> {d.proxy} </span>
          </td>
          <td>
            <span> {d.Message.substr(0, 29)} </span>
          </td>
          <td className="text-center">
            {/* <CIcon height={25} name="cib-cc-mastercard" /> */}
            <span>{d.Success + ""}</span>
          </td>
          <td>
            <div className="small text-muted">Error date</div>
            <strong>{<Moment fromNow>{d.dateTime}</Moment>}</strong>
          </td>
        </tr>
      ));
    } else {
      listItems = (
        <div className="pt-3 text-center">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
      );
    }

    var listErros = [];
    // ! hello
    if (errorsData) {
      errorsData.map((d) =>
        listErros.push({
          Message: d.Message,
          Date: d.dateTime,
          Proxy: d.proxy,
          Status: "Failed",
          image: d.screenPath,
        })
      );
    }
    console.log(fullData);

    return (
      <>
        <CRow>
          <CCol sm="6">
            <CCallout color="warning">
              <strong className="h4">Analytics</strong>
            </CCallout>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="6" lg="3">
            <CWidgetDropdown
              color="gradient-primary"
              header={successLength === null ? "0" : successLength}
              text="Successful Clicks"
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="c-chart-wrapper mt-3 mx-3"
                  style={{ height: "70px" }}
                  dataPoints={[18, 12, 9, 11, 15, 7, 14]}
                  label="Clicks"
                  labels=""
                  pointHoverBackgroundColor="primary"
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem onClick={refreshPage}>Refresh</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>

          <CCol sm="6" lg="3">
            <CWidgetDropdown
              color="gradient-warning"
              header={failedLength === null ? "0" : failedLength}
              text="Failed Clicks"
              footerSlot={
                <ChartLineSimple
                  pointed
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  dataPoints={[1, 9, 9, 7, 3, 2, 11]}
                  pointHoverBackgroundColor="info"
                  options={{ elements: { line: { tension: 0.00001 } } }}
                  label="Clicks"
                  labels=""
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem onClick={refreshPage}>Refresh</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>

          <CCol sm="6" lg="3">
            <CWidgetDropdown
              color="gradient-info"
              header={successLength === null ? "0" : successLength}
              text="Good Proxy"
              footerSlot={
                <ChartLineSimple
                  className="mt-3"
                  style={{ height: "70px" }}
                  backgroundColor="rgba(255,255,255,.2)"
                  dataPoints={[18, 12, 9, 11, 15, 7, 14]}
                  options={{ elements: { line: { borderWidth: 2.5 } } }}
                  pointHoverBackgroundColor="warning"
                  label="Clicks"
                  labels=""
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem onClick={refreshPage}>Refresh</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>

          <CCol sm="6" lg="3">
            <CWidgetDropdown
              color="gradient-danger"
              header={failedLength === null ? "0" : failedLength}
              text="Dead Proxy"
              footerSlot={
                <ChartBarSimple
                  className="mt-3 mx-3"
                  style={{ height: "70px" }}
                  backgroundColor="rgb(250, 152, 152)"
                  label="Clicks"
                  labels=""
                />
              }
            >
              <CDropdown>
                <CDropdownToggle color="transparent">
                  <CIcon name="cil-settings" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownItem onClick={refreshPage}>Refresh</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CWidgetDropdown>
          </CCol>
        </CRow>
        <div class="row d-flex">
          <div class="col-sm-6 mr-auto p-2">
            <div class="c-callout c-callout-success">
              <strong class="h4">Success Scraping</strong>
            </div>
          </div>
          <div class="p-3 align-self-center">
            <button
              // onClick={() => this.ShowModal(deleteAllSucess)}
              onClick={dialogForSuccesses}
              type="button"
              class="btn btn-danger"
            >
              Clear All
            </button>
          </div>
        </div>
        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">
                <CIcon name="cil-people" />
              </th>
              <th>Page</th>
              <th className="text-center">Proxy</th>
              <th>Page title</th>
              <th className="text-center">
                <strong> Keyword </strong>
              </th>
              <th className="text-center">
                <strong> Website </strong>
              </th>
              <th className="text-center">
                {" "}
                <strong> Platform </strong>
              </th>
              <th>Activity</th>
            </tr>
          </thead>

          <LoadingIndicator />

          <tbody>{listItems}</tbody>
        </table>
        <br />
        <div class="row d-flex">
          <div class="col-sm-6 mr-auto p-2">
            <div class="c-callout c-callout-danger">
              <strong class="h4">Failed Scraping</strong>
            </div>
          </div>
          <div class="p-3 align-self-center">
            <button
              onClick={dialogForErrors}
              // onClick={ShowModal(deleteAllErrors)}
              type="button"
              class="btn btn-danger"
            >
              Clear All
            </button>
          </div>
        </div>
        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">
                <CIcon name="cil-people" />
              </th>
              <th>Page</th>
              <th className="text-center">Proxy</th>
              <th>Error message</th>
              <th className="text-center">Success</th>
              <th>Activity</th>
            </tr>
          </thead>

          <LoadingIndicator />

          <tbody>{listItemsErrors}</tbody>
        </table>
      </>
    );
  }
}

export default Dashboard;
