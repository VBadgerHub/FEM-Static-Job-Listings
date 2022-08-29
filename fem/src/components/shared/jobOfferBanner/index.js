import React from 'react'
import { CompanyButton } from '../companyButtons/style'
import { PanelAvatar, PanelContainer, PanelInfoRow, PanelInfoRowContainer, PanelTagContainer, PanelWrapper, TagWrapper } from './style'  


export default function index({...props}) {
  return (
    <PanelWrapper >
      <PanelContainer isFeatured={props.featured}>
        <PanelAvatar avatarImg={process.env.PUBLIC_URL + props.logo}/>
        <PanelInfoRowContainer>          
          <PanelInfoRow>
            {props.company}
            {props.new && <CompanyButton background="hsl(180, 29%, 50%)">New!</CompanyButton>}
            {props.featured && <CompanyButton background="black">Featured</CompanyButton>}
          </PanelInfoRow>
          <PanelInfoRow hover={true} textColor={'black'}>
            {props.position}
          </PanelInfoRow>
          <PanelInfoRow fontWeight={500}>
            {props.postedAt} · {props.contract} · {props.location}
          </PanelInfoRow>
        </PanelInfoRowContainer>
          <PanelTagContainer>
            <TagWrapper onClick={() => props.onClick({flag: 'role', data:props.role})}>
              {props.role}
            </TagWrapper>
            <TagWrapper onClick={() => props.onClick({flag: 'level', data:props.level})}>
              {props.level}
            </TagWrapper>
            {props.languages?.map((language, index) => (
              <TagWrapper key={index} onClick={() => props.onClick({flag: 'lang', data: language})}>
                {language}
              </TagWrapper>
            ))}
             {props.tools?.map((tools, index) => (
              <TagWrapper key={index} onClick={() => props.onClick({flag: 'tools', data: tools})}>
                {tools}
              </TagWrapper>
            ))}
          </PanelTagContainer>
      </PanelContainer>
    </PanelWrapper>
  )
}

