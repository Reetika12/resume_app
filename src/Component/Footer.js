import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from "styled-components";

function Footer() {
    return (
        <div className="main-footer">
            <ParentComponent>
                <CommonFooter >
                    Links of our authors
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                </CommonFooter>
                <CommonFooter >
                Come Say Hello!
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                </CommonFooter>
                <CommonFooter >
                Chicago Community Member
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                </CommonFooter>
                <CommonFooter >
                marketing tips twice a month
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                    <DesignedBy>
                        <NavLink activeClassName="active" to="/experience">
                            Designed by
                        </NavLink>
                    </DesignedBy>
                </CommonFooter>

            </ParentComponent>
        </div>
    )
}

export default Footer

const CommonFooter = styled.div`
 display:flex;
 flex-direction:column;
 margin:3%;
//  align-items:center;
`
const ParentComponent = styled.div`
display:flex;
align-items:center;
justify-content:center;
background:grey;
`
const DesignedBy = styled.div`
font-size:18px;
font-weight:500;

`