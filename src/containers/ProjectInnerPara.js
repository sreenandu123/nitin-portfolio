import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ innerParagraph, imagePath }) => {
    let image = () => {
        return innerParagraph.imageUrls.map((item, key) => {
            return <img src={imagePath(`./${item}`)} width="100%" key={`${key}a`}/> 
        })
    }
    return(
        <div className='m-top-3 p-rel'>
            <div className={'p-left-3 normalText'}>
        <div className="normalText" dangerouslySetInnerHTML={{__html: innerParagraph.html}}></div>
            </div>
            
        <div className='m-top-3'>
        {innerParagraph.imageUrls && image()}
      </div>
      </div>
    )
})