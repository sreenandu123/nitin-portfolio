import React from 'react';
import { withSiteData } from 'react-static';
import { Link } from 'react-static';
//
import logoImg from '../logo.png';
/*let first = false;
let ui = [];
let FirstUI =   <div className="home-card">
<p className="Hello">Hello</p>
<p className="me-head" >I'm <b className="me txt-line" > Nitin Surendran</b></p>
<div className="typ-row">
  <div className="i-d">I design experiences that</div>
  <div className="ex-me">
    <p><b className="txt-line p-l">people love</b></p>
    <p>are <b className="txt-line e-u">easy to use</b></p>
    <p>helps <b className="txt-line b-s">businesses</b></p>
  </div>
</div>
<div className="click-flip">CLICK TO FLIP</div>
</div>
let secondUI = <div className="home-card">
<p>I am a user experience designer and I believe in 
‘selfless design’, where users care more about the 
outcome of using a product than being affected by
design.

Well, that being said….read more</p>
<div className="click-flip">CLICK TO FLIP</div>
</div>
const toggleThis = ()=>{
  console.log("ada")
  first = !first
}
ui = first? FirstUI:secondUI;
export default withSiteData(() => (
  <div onClick={toggleThis} className="fliper-main">{ui}</div>
))*/

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      first:true
    };
   }
   toggleThis = ()=>{
    console.log("ada")
    this.setState({
      first:!this.state.first
    })
  }

  render() {
    let ui = [];
    let FirstUI =   <div className="home-card front">
    <p className="Hello">Hello</p>
    <p className="me-head" >I'm <b className="me txt-line" > Nitin Surendran</b></p>
    <div className="typ-row">
      <div className="i-d">I design experiences that</div>
      <div className="ex-me">
        <p><b className="txt-line p-l">people love</b></p>
        <p>are <b className="txt-line e-u">easy to use</b></p>
        <p>helps <b className="txt-line b-s">businesses</b></p>
      </div>
    </div>
    <div className="click-flip">CLICK TO FLIP</div>
    </div>
    let secondUI = <div className="home-card back">
    <p>I am a user experience designer and I believe in 
    ‘selfless design’, where users care more about the 
    outcome of using a product than being affected by
    design.</p>
    <p className="mt36">Well, that being said…. <Link className="read-more" to="/about">read more</Link></p>
    <div className="click-flip">CLICK TO FLIP</div>
    </div>
    let flipCss = !this.state.first?"is-flipped":"";
    {/*return <div  className={"flipper-main "}>
      <div onClick={this.toggleThis} className={"flipper "+flipCss}>
        {FirstUI}
        {secondUI}
      </div>
  </div>*/}
  return(<div  class="flipper-main scene no-scroll">
    <div onClick={this.toggleThis} class={"card "+flipCss}>
      <div class="card__face card__face--front">
      {FirstUI}
      </div>
      <div class="card__face card__face--back">
      {secondUI}
      </div>
    </div>
  </div>)

  }
}
export default Welcome;
