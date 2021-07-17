import React from 'react'

function Skills() {
    return (
        <div className="card">
            <div className="card-content">
                <strong>Professional Skills</strong>
                <div className="row mt-top">
                    <div className="col s6">
                        <p>Javascript</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"90%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>React js</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"85%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>HTML</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"80%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>Css</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"78%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>Node js</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"40%"}}></div>
                        </div>
                    </div>
                    <div className="col s6">
                        <p>My sql</p>
                        <div className="progress grey lighten-1">
                            <div className="determinate blue" style={{width:"55%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
