import styled from 'styled-components'
import avatar from '../images/person (2).png'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

const AboutStyled = styled.div`
    display: flex;
    justify-content: space-around;
    .container-about{
        display:flex;
        align-items:center;
        max-width: 64rem;
        gap:5rem;
        margin-block-start: 6rem;
        margin-block-end: 3rem;
        margin-inline:2rem;
    }

    .profile{
        width: 100%;
        min-width: 350px;
    }

    .description{
        display:flex;
        flex-direction:column;
        gap:1.5rem;
        width:60%;
    }

    .icons{
        color:var(--pink);
    }

    .icons:hover{
        filter: drop-shadow(0px 4px 4px rgba(184, 4, 145, 0.74));
    }

    .info-contact{
        display:flex;
        align-items:center;
        gap:1.3rem;
        margin-block: 1.7rem;
    }

`

function About() {
    return (
        <AboutStyled>
            <div className='container-about'>
            <div className='description'>
                <h1>HI! I Am Gabriela Rojas </h1>
                <p>I am passionate about understanding user needs and translating them into  
                <span> digital solutions</span>. I have always been excited to join <span>innovative teams</span> that are constantly looking for the latest technologies.</p>
                <div>
                <button>Curriculum</button>
                <div className='info-contact'>
                    <p>Check out my :</p>
                    <UilLinkedin className='icons' width='30' height='30'/>
                    <UilTwitter className='icons' width='30' height='30'/>
                    <UilGithub className='icons' width='30' height='30'/>
                </div>
                </div>
                


            </div>
            <div className='avatar-profile'>
                <img className='profile' src={avatar} alt='avatars'></img>
            </div>
            </div>
        </AboutStyled>
    )
}

export default About
