import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/projects/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
  </div>
))
