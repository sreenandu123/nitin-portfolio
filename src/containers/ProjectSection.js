import React from 'react'
import { withRouteData, Link } from 'react-static'

import ProjectInnerSections from "./ProjectInnerSections";

import ProjectInnerPara from "./ProjectInnerPara";

export default withRouteData(({ postSection, imagePath }) => {
    let image = () => {
        return postSection.imageUrls.map((item, key) => {
            return <img src={imagePath(`./${item}`)} width="100%" key={key}/> 
        })
    }

    let showInnerSection = () => {
        return postSection.innerSection.map((innerItem, key) => {return <ProjectInnerSections innerSection={innerItem} imagePath={imagePath} index={key}/>})
    }

    let showInnerParagraph = () => {
        return postSection.innerParagraph.map((innerPara, key) => {return <ProjectInnerPara innerParagraph={innerPara} imagePath={imagePath} />})
    }

    return(
        <div className='m-top-5 p-rel'>
            {postSection.index && <span className='index'>{postSection.index}</span>}
            <div className={postSection.index ? 'p-left-3': ''}>
            <div className={`post_title ${postSection.index ? 'post_title_fs' : ''}`}>{postSection.header}</div>
        <div className="normalText" dangerouslySetInnerHTML={{__html: postSection.html}}></div>
            </div>
            
        <div className='m-top-3'>
        {postSection.imageUrls && image()}
      </div>
      {postSection.innerSection && showInnerSection()}
      {postSection.innerParagraph && showInnerParagraph()}
      </div>
    )
})