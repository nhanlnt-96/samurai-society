import React from "react";
import {Container, Row} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import AdminHeader from "../../components/adminHeader/AdminHeader";

import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <Container fluid className="admin-page-container">
      <AdminHeader/>
      <Outlet/>
    </Container>
  );
};

export default AdminPage;