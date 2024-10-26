import React, { useEffect, useState } from 'react'
import { StyledBox, StyledInfoContainer, StyledInfoSection } from './style'

const InfoSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const section = document.getElementById("about");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // 화면에 보일 때 애니메이션 활성화
      } else {
        setIsVisible(false); // 화면에서 벗어날 때 비활성화 (필요한 경우)
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
    <h2 
        style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 3.7s ease',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
    >I am like this person.</h2>
    <img src='./mbti.png' alt='me'
        style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 3.7s ease',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            marginBottom: '20px',
          }}
     />
    <StyledInfoContainer>
      <StyledBox>
        <h3>프로젝트</h3>
        <p>다양한 프로젝트를 통해 사용자 경험과 성능을 최적화하는 웹 애플리케이션을 제작해왔습니다.</p>
      </StyledBox>
      <StyledBox>
        <h3>인생 가치관</h3>
        <p>끊임없이 배우고 성장하며 세상에 긍정적인 영향을 미치는 것을 목표로 합니다.</p>
      </StyledBox>
      <StyledBox>
        <h3>경험</h3>
        <p>웹 개발과 다양한 팀 프로젝트를 통해 협업과 문제 해결 능력을 키워왔습니다.</p>
      </StyledBox>
      <StyledBox>
        <h3>하고 싶은 일</h3>
        <p>글로벌 무대에서 최신 기술을 활용해 혁신적인 웹 솔루션을 제공하고 싶습니다.</p>
      </StyledBox>
    </StyledInfoContainer>
  </StyledInfoSection>

  )
}

export default InfoSection
