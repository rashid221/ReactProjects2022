import React, { Component } from "react";

export default class App extends Component {
  // constructor() {
  //   super();
  //   // this.state={
  //   //     article:this.article,
  //   //     loading:false
  //   // }
  // }
  render() {
    // console.log("render");
    let { title, description, imageUrl ,sourceName ,readM, lap, autM ,date } = this.props;
    return (
      <>
        <div className="cards">
          <div>
            <h3 style={{display:"flex",position:"absolute",backgroundColor:"red",width:"10%",textAlign:"center",color:"white",padding:"0px 10px"}}>{sourceName}</h3>
          <img src={!imageUrl?"https://c.ndtvimg.com/2020-03/jqf05t9g_unemployment_625x300_02_March_20.jpg":imageUrl} />
          </div>
          <div className="spac">
          {/* <h3 style={{backgroundColor:"red",width:"20%",padding:"0px",textAlign:"center",color:"white",margin:"10px 0px"}}>{sourceName}</h3> */}
          <h3>{title.toUpperCase()}</h3>
          <hr></hr>
          <p>{description}</p>
          <p>{lap}</p>
           <p style={{color:"red"}}>By {!autM?"Unknown":autM} on Date {new Date(date).toGMTString()}</p>
          <button><a href={readM} target="_blank">Read More</a></button>
          </div>
        </div>
      </>
    );
  }
}
