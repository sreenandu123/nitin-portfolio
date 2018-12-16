import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ innerSection, imagePath }) => {
    let image = () => {
        return innerSection.imageUrls.map((item, key) => {
            return <img src={imagePath(`./${item}`)} width="100%" key={`${key}a`}/> 
        })
    }
    return(
        <div className='m-top-3 p-rel'>
            {innerSection.index && <span className='index'>{innerSection.index}</span>}
            <div className={'p-left-3 normalText'}>
            <div className={`inner_title_fs t-bold`}>{innerSection.header}</div>
        <div className="normalText" dangerouslySetInnerHTML={{__html: innerSection.html}}></div>
            </div>
            
        <div className='m-top-3'>
        {innerSection.imageUrls && image()}
      </div>
      </div>
    )
})