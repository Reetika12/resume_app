import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Footer() {

    let headerList = [
        {
            "header":"Links of our authors",
            "subheader1":"Designed by",
            "subheader2":"skills",
            "subheader3":"Designed by"
        },
        {
            "header":"Come Say Hello!",
            "subheader1":"Designed by",
            "subheader2":"skills",
            "subheader3":"Designed by"
        },
        {
            "header":"Chicago Community Member",
            "subheader1":"Designed by",
            "subheader2":"skills",
            "subheader3":"Designed by"
        }

    ]
  return (
    <div className="main-footer">
      <ParentComponent>
      {headerList.map((el,index)=>{
          return  <CommonFooter key={index}>
          <h5>{el.header}</h5>
          <DesignedBy>
            <NavLink activeClassName="active" to="/experience">
              {el.subheader1}
            </NavLink>
          </DesignedBy>
          <DesignedBy>
          <NavLink activeClassName="active" to="/skills">
              {el.subheader2}
            </NavLink>
          </DesignedBy>
          <DesignedBy>
            <NavLink activeClassName="active" to="/experience">
                {el.subheader3}
            </NavLink>
          </DesignedBy>
        </CommonFooter>
      }) }
      </ParentComponent>
    </div>
  );
}

export default Footer;

const CommonFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
  //  align-items:center;
`;
const ParentComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background:grey;
  background: aliceblue;
`;
const DesignedBy = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
