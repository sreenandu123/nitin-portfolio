import React from 'react'
import { withRouteData, Link } from 'react-static'
//

import postImg from "../static/images/flat.jpg";

var images = require.context("../static/images", true);
const imagePath = (name) => images(name, true);

import ProjectSection from "./ProjectSection"

export default withRouteData(({ post }) => {

  let redesignSection = () => {
   return post.innerImpactSection.map((section, key) => {return <ProjectSection postSection={section} imagePath={imagePath} key={key}/> })
  }
  return (
  <div className="project_post">
    {/* <Link to="/projects/" className={'back-btn'}>{'<'} Back</Link> */}
    <div className="post_title">{post.title}</div>
    {post.durRuleTeam && 
      <table width='100%' className="table-align">
        <tr className='tr-th c-gray'>
          <td width='20%'>DURATION</td>
          <td width='20%'>ROLE</td>
          <td width='60%'>TEAM</td>
        </tr>
        <tr className='tr-th ls-normal'>
          {post.durRuleTeam.duration && <td width='20%'>{post.durRuleTeam.duration}</td>}
          {post.durRuleTeam.role && <td width='20%'>{post.durRuleTeam.role}</td>}
          {post.durRuleTeam.team && <td width='60%' className='team'>{post.durRuleTeam.team}</td>}
        </tr>
      </table>
    }
    {post.challenge && <ProjectSection postSection={post.challenge} imagePath={imagePath} />}
    
    {post.solution && <ProjectSection postSection={post.solution} imagePath={imagePath} />}
    
    {post.designEditor && <ProjectSection postSection={post.designEditor} imagePath={imagePath} />}

    {post.designProcess && <ProjectSection postSection={post.designProcess} imagePath={imagePath} />}
    
    {post.userPersonaIdeation && <ProjectSection postSection={post.userPersonaIdeation} imagePath={imagePath} />}
    {post.paperProto && <ProjectSection postSection={post.paperProto} imagePath={imagePath} />}

    {post.knowUser && <ProjectSection postSection={post.knowUser} imagePath={imagePath} />}
    
    {post.userPersona && <ProjectSection postSection={post.userPersona} imagePath={imagePath} />}
    
    {post.userStory && <ProjectSection postSection={post.userStory} imagePath={imagePath} />}
    {post.usableTesting && <ProjectSection postSection={post.usableTesting} imagePath={imagePath} />}
    {post.infoArch && <ProjectSection postSection={post.infoArch} imagePath={imagePath} />}
    

    {post.ideation && <ProjectSection postSection={post.ideation} imagePath={imagePath} />}
    {post.userJourney && <ProjectSection postSection={post.userJourney} imagePath={imagePath} />}
    {post.wireframe && <ProjectSection postSection={post.wireframe} imagePath={imagePath} />}
    {post.visualDesign && <ProjectSection postSection={post.visualDesign} imagePath={imagePath} />}
    {post.impact && <ProjectSection postSection={post.impact} imagePath={imagePath} />}
    {post.innerImpactSection && redesignSection()}
    
    
  </div>)}
)
