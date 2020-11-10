import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import app from "./../base";
const TheHeaderDropdown = () => {
  const logout = () => {
    app.auth().signOut();
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={
              "https://www.specialneedscommunities.com/images/consumers/img_nogravatar.png"
            }
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Notifications
          <CBadge color="danger" className="mfs-auto">
            1
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">
            0
          </CBadge>
        </CDropdownItem>

        <CDropdownItem
          //    onClick={app.auth().signOut()}
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CLink
            onClick={logout}
            className="c-subheader-nav-link"
            style={{ textDecoration: "none" }}
            href="#"
          >
            <CIcon name="cilShieldAlt" alt="Settings" />
            &nbsp;Logout
          </CLink>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
