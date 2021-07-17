import React from "react";
import mypic from "../Img/mypic.jpg";
import styled from "styled-components";

function Profile() {
  return (
    <Parent>
      <ParentComp>
        <Imgcomp className="activator" src={mypic} alt="reetika" />
      </ParentComp>
      <AlignTitle>
        <Textalign>Reetika</Textalign>
        <Textalign alignless>Software Developer</Textalign>
      </AlignTitle>
    </Parent>
  );
}

export default Profile;

const Parent= styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
`
const ParentComp = styled.div`
  background: #ffffff;
  z-index: 100;
`;
const Imgcomp = styled.img`
  z-index: 1;
  width: 206px;
  margin-right: 20px;
  margin-top: 20%;
  border-radius: 12px;
`;
const Textalign = styled.span`
  font-size: 20px;
`;
const AlignTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
