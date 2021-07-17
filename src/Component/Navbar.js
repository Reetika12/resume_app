import React,{useState} from "react"
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';
// import "../Style/Header.css"

function Navbar()
{
    // const [active ,setactive] = useState(true)
    // let {id} = useParams()
    // console.log("params",id)
    return(
        <ParentComp>
            <StyledNavLink activeClassName="active" to="/">
                <HomeIcon/>
                Home
                </StyledNavLink>
            <StyledNavLink activeClassName="active" to="/experience">
                <KeyboardCapslockIcon/>
                Experience</StyledNavLink>
            <StyledNavLink activeClassName="active" to="/skills">
              <LocalMallIcon/>
                Skills</StyledNavLink>
            <StyledNavLink activeClassName="active" to="/educations">
            <CastForEducationIcon/>
                Education</StyledNavLink>
        </ParentComp>
    );

}

export default Navbar;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 16px;
    font-weight:500;
    display:flex;

`;
const ParentComp=styled.div`
  height:80px;
  display:flex;
  align-items:center;
  background: antiquewhite;
  justify-content: space-evenly;
    z-index: 1;
    background: aliceblue;
    text-decoration:none;
`