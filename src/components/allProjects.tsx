import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { project, technologies } from '../data/projects'
import Modal from './modal'
import Card from './card';

const AllProjectsStyled = styled.div`
padding-inline: 5rem;
padding-block: 4.06rem;
align-items: center;

.subtitle{
    font: var(--body1);
}

.title-section{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.container-allProjects{
    display:grid;
    justify-content:center;
    grid-template-columns: repeat(3, 1fr);
    gap:2rem;
}

`



function AllProjects() {
    const [categories, setCategories] = useState('all');
    const categorizeItems = project.map(project => (
        <Card
          project={project} 
          key={project.id}/>
        ))
    const filteredCategories = project.filter((project)=> project.categories === categories);

    return (
        <AllProjectsStyled>
            <div className='title-section'>
                <h2>Projects</h2>
                <span className='subtitle'>Fulfilled projects</span>
            </div>
            <div>
                <button className='button-categories' onClick={() => setCategories('all')}>All</button>
                <button className='button-categories' onClick={() => setCategories('web')}>Web</button>
                <button className='button-categories' onClick={() => setCategories('responsive')}>Responsive</button>
            </div>
            <div className='container-allProjects'>
                { categories=== 'all'? categorizeItems : null}
            </div>
            
        </AllProjectsStyled>
    )
}

export default AllProjects
