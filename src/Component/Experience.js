import React,{useState,useEffect} from 'react'

function Experience() {
    const [data,setData] = useState([])

    useEffect(()=>{
     fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').then((res)=>res.json()).then((data)=>setData(data))
    },[])

    return (
        <div className="card">
            <div className="card-content">
                <strong>Experience</strong>
                <div className="row">
                    <div className="col s12 m4 l4 xl4">
                        <p className="teal year-exp white-text">
                            july
                            <strong>2019</strong>-April
                            <strong>2021</strong>
                        </p>
                    </div>
                    <div className="col s12 m8 l8 xl8">
                        <blockquote className="no-pad">
                            <h6 className="no-pad mt-bottom">
                                <strong>Software Developer</strong>
                            </h6>
                            {data ? data[0] : ""}
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4 xl4">
                        <p className="teal year-exp white-text">
                            May
                            <strong>2021</strong>-
                            <strong>Current</strong>
                        </p>
                    </div>
                    <div className="col s12 m8 l8 xl8">
                        <blockquote className="no-pad">
                            <h6 className="no-pad mt-bottom">
                                <strong>Software Developer</strong>
                            </h6>
                            {data ? data[0] : ""}
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
