import React, { Component } from 'react'
import styled from 'styled-components';

import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import Profile from "./Profile"
import Aboutme from "./Aboutme"
function Home()
{
    return(
        <section>
            {/* <Navbar/> */}
             <div className="container">
                <CommonStyle >
                    <div >
                    <Profile/>
                    </div>
                    <div>
                        <Aboutme/>
                        <Skills/>
                        <Experience/>
                        <Education/>
                    </div>
                </CommonStyle>
            </div>
        </section>
       
    );
}
export default Home
const CommonStyle= styled.div`
display:flex;
align-items:center;
`