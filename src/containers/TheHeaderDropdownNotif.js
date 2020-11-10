import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdownNotif = () => {
  const itemsCount = 1;
  return (
    <CDropdown inNav className="c-header-nav-item mx-2">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-bell" />
        <CBadge shape="pill" color="danger">
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem header tag="div" className="text-center" color="light">
          <strong>You have {itemsCount} notifications</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="cil-speedometer" className="mr-2 text-warning" /> Server
          overloaded
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light">
          <strong>Server</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small>
              <b>CPU Usage</b>
            </small>
          </div>
          <CProgress size="xs" color="info" value={90} />
          <small className="text-muted">348 Processes. 3/4 Cores.</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small>
              <b>Memory Usage</b>
            </small>
          </div>
          <CProgress size="xs" color="warning" value={70} />
          <small className="text-muted">400MB/512MB</small>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="text-uppercase mb-1">
            <small>
              <b>SSD 1 Usage</b>
            </small>
          </div>
          <CProgress size="xs" color="danger" value={90} />
          <small className="text-muted">0.9GB/1GB</small>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownNotif;
