import React from "react";
import {Container} from "react-bootstrap";
import {teamMemberData} from "../../configs/teamMemberData";

import "./TeamComp.scss";

const TeamComp = () => {
  return (
    <Container fluid className="team-comp">
      <Container className="team-comp-container d-flex flex-column justify-content-center align-items-center">
        <div data-aos="fade-down" className="team-comp-title">
          <h3>
            <em>meet</em>
            {" "}
            the team
          </h3>
        </div>
        <div className="team-comp-content">
          {
            teamMemberData.map((val, index) => (
              <div key={index} data-aos="zoom-in" className="team-item-container">
                <div className="team-ava">
                  <img src={val.ava} alt="bored-bunny-team"/>
                </div>
                <div className="team-info-container justify-content-center align-items-center">
                  <p className="name">{val.name}</p>
                  <p className="position">{val.position}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </Container>
  );
};

export default TeamComp;