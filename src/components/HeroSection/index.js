import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import profile_pic from '../../images/people/vojtech-sykora.png';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    SocialMediaIcons, 
    SocialMediaIcon, 
    ResumeButton 
} from './HeroStyle';
import Typewriter from 'typewriter-effect';

const HeroSection = ({ heroData }) => {
    // console.log("Hero data:", heroData); // Debugging print

    return (
        <section id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I'm <br /> {heroData?.name}</Title>
                        <TextLoop>
                            I'm a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: heroData?.roles || [],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{heroData?.description}</SubTitle>
                        <ResumeButton 
                            href={heroData?.resume} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="View my resume"
                        >
                            Check My CV
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <Img src={profile_pic} alt={`Vojtěch Sýkora - Profile Picture`}/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
};

export default HeroSection;
