
import React from 'react';
import Shuffle from 'shufflejs';
import { withRouteData, Link } from 'react-static';
import postImg from "../static/images/flat.jpg";


class Projects extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const shuffleInstance = new Shuffle(document.getElementById('projectGrid'), {
      itemSelector: '.js-item',
      sizer: '.js-shuffle-sizer'
    });
  }
  render() {
    const listOfElements = [];
    this.props.posts.map(post =>{
      return (
      listOfElements.push(<li className="grid-item js-item" key={post.id}>
        <Link to={`/projects/post/${post.id}`}>
        <div className="img-container">
          <img src={postImg}/>
        </div>
        <h3>{post.title}</h3>
        </Link>
      </li>)
    )})
     return (
        <div className="content">
        <div>
          <h3 className="pr-head text-center">My favourite projects</h3>
          <h6 className="text-center m-l">Made with </h6>
          <div className="rw-center pr-nav">
            <button className='selected'>All projects</button>
            <button>Web</button>
            <button>Mobile</button>
            <button>Others</button>
          </div>
            <ul id="projectGrid" className="project-grid">  
              {listOfElements}
            </ul>
            </div>
        </div>
     );
  }
}
/*export default withRouteData(({  }) => (
  <div>
    <h1>It's blog time.</h1>
  </div>
))*/

export default withRouteData((Projects));
