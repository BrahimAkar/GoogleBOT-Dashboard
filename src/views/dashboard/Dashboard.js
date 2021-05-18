import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CRow,
  CDataTable,
  CBadge,
} from "@coreui/react";

function Dashboard() {
  const [usersData, setusersData] = useState(null);

  useEffect(() => {
    fetch(`https://www.tikread.com/api/alltasks`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setusersData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    const interval = setInterval(() => {
      fetch(`https://www.tikread.com/api/alltasks`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          setusersData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const usersData2 = [
    {
      id: 0,
      name: "John Doe",
      registered: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
    {
      id: 1,
      name: "Samppa Nori",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 2,
      name: "Estavan Lykos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 3,
      name: "Chetan Mohamed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Derick Maximinus",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 5,
      name: "Friderik Dávid",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      name: "Yiorgos Avraamu",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 7,
      name: "Avram Tarasios",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 8,
      name: "Quintin Ed",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Enéas Kwadwo",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 10,
      name: "Agapetus Tadeáš",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 11,
      name: "Carwyn Fachtna",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 12,
      name: "Nehemiah Tatius",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 13,
      name: "Ebbe Gemariah",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 14,
      name: "Eustorgios Amulius",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 15,
      name: "Leopold Gáspár",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 16,
      name: "Pompeius René",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 17,
      name: "Paĉjo Jadon",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 18,
      name: "Micheal Mercurius",
      registered: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 19,
      name: "Ganesha Dubhghall",
      registered: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 20,
      name: "Hiroto Šimun",
      registered: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 21,
      name: "Vishnu Serghei",
      registered: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 22,
      name: "Zbyněk Phoibos",
      registered: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 23,
      name: "Aulus Agmundr",
      registered: "2018/01/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 42,
      name: "Ford Prefect",
      registered: "2001/05/25",
      role: "Alien",
      status: "Don't panic!",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "taskName", _style: { width: "15%" }, sorter: true },
    { label: "Keyword", key: "keywordToFocus", _style: { width: "15%" } },
    { key: "websites", _style: { width: "15%" } },
    {
      label: "Initial Clicks",
      key: "clickForEachWebsite",
      _style: { width: "5%" },
    },
    { label: "+", key: "SuccessfulClicksCount", _style: { width: "5%" } },  
    
    { label: "-", key: "FailedClicksCount", _style: { width: "5%" } },

    { label: "Lauched at", key: "dateLaunched", _style: { width: "20%" } },
    { label: "Finished at", key: "dateFinished", _style: { width: "20%" } },
    { key: "status", _style: { width: "5%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "finished":
        return "success";
      case "queued":
        return "primary";
      case "running":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "25px" }}>
      {/* //  <h3>All tasks</h3> */}
      <CDataTable
        items={usersData}
        fields={fields}
        //  columnFilter
        tableFilter
        // footer
        itemsPerPageSelect
        itemsPerPage={15}
        hover
        sorter
        pagination
        scopedSlots={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? "Hide" : "Show"}
                </CButton>
              </td>
            );
          },
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>{item.pageTitle}</h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </div>
  );
}

export default Dashboard;
