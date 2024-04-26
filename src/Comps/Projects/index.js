import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Card/ProjectCards'
import { projects } from '../../Data/Constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'ReactJS' ?
            <ToggleButton active value="ReactJS" onClick={() => setToggle('ReactJS')}>ReactJS</ToggleButton>
            :
            <ToggleButton value="ReactJS" onClick={() => setToggle('ReactJS')}>ReactJS</ToggleButton>
          }
          <Divider />
          {toggle === 'JavaScript' ?
            <ToggleButton active value="JavaScript" onClick={() => setToggle('JavaScript')}>JavaScript</ToggleButton>
            :
            <ToggleButton value="JavaScript" onClick={() => setToggle('JavaScript')}>JavaScript</ToggleButton>
          }
          <Divider />
          
          {toggle === 'HTML CSS' ?
            <ToggleButton active value="HTML CSS" onClick={() => setToggle('android app')}>HTML CSS</ToggleButton>
            :
            <ToggleButton value="HTML CSS" onClick={() => setToggle('HTML CSS')}>HTML CSS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects