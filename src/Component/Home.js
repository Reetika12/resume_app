import React from 'react'
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
             <div className="container">
                <CommonStyle >
                    <div>
                       <Profile/>
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