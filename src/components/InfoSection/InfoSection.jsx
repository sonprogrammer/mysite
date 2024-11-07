import React, { useEffect, useState } from 'react'
import { StyledBox, StyledInfoContainer, StyledInfoSection, StyledPresent, StyledTitle } from './style'

const InfoSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const section = document.getElementById("about");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (
    <StyledInfoSection id="about" >
      <StyledInfoContainer>
        <StyledBox>
          <div>
            <h3>Name : 손 영 진</h3>
            <h3>Major : 항공스프트웨어공학</h3>
            <h3>Age : 28</h3>
            <h3>Uni : 한서대학교</h3>
          </div>
          <img src='/me.jpg'/>
        </StyledBox>
      </StyledInfoContainer>
      <StyledPresent
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 3.7s ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <StyledTitle>
          <h2 >I am like this person.</h2>
          <img src='./mbti.png' alt='me'
              style={{
              marginBottom: '20px',
              width: '107px'
              }}
          />

        </StyledTitle>
        <h3>I'm someone who values experiences. Whether good or bad, I embrace them positively.</h3>
        <p>(저는 경험을 중요시하는 사람입니다. 좋은경험이든 나쁜 경험이든 저는 긍정적으로 받아들입니다)</p>
        <h3 style={{color: 'blue'}}>And I'm a person who values planning and personal development.</h3>
        <p>(저는 계획적이고 자기개발을 중요시 하는 사람입니다.)</p>
        <h3>Also, I enjoy designing</h3>
        <p>(또한 저는 디자인하는 것을 즐깁니다.)</p>
      </StyledPresent>
  </StyledInfoSection>

  )
}

export default InfoSection
