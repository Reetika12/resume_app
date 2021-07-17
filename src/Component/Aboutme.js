import React,{useState,useEffect} from "react";

function Aboutme() {
    const [data,setData] = useState([])

useEffect(()=>{
    console.log("callll")
 fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').then((res)=>res.json()).then((data)=>setData(data))
},[])
  return (
    <div className="card">
      <div className="card-content">
        <h6 className="mt-bottom">
          <strong>About me</strong>
        </h6>
        {console.log("dtaaaa",data)}
        <p className="grey-text">
          {data ? data[0] : ""
          }
        </p>
        <div className="card-action">
          <strong>Personal Info</strong>

          <div className="col mt">
            <p>
              <strong>Address:</strong>123 lorem
            </p>
            <p>
              <strong>Email:</strong>test@gmail.com
            </p>
            <p>
              <strong>Phone:</strong>123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
