import React, { useEffect, useState } from 'react'
import { Button, Slide, SliderContainer, SliderWrapper, StyledCertificate, StyledContainer, StyledGit } from './style'

const Develops = () => {
    const [ current, setCurrent ] = useState(0)
    const slides = [
        { title : '토익', src:'/토익 성적증명서.pdf' },
        { title : '정보처리기사', src: '/정처기합격.pdf' },
        { title : 'GTQ1급', src: '/gtq.pdf' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        },2000)
        return () => clearInterval(interval)
    },[current])
    
    const nextSlide = () => {
        if(current < slides.length - 1){
            setCurrent(current + 1)
        }else{
            setCurrent(0)
        }
    }

    const prevSlide = () => {
        if (current > 0) {
          setCurrent(current - 1)
        } else {
          setCurrent(slides.length - 1)
        }
      }
  return (
    <StyledContainer>
        <StyledGit>
        <div className="header">
      <h1>GIT</h1>
    </div>
            <p>Let's go to me 💫</p>
            <p>⬇️</p>
            <a href='https://github.com/sonprogrammer' target='_blank'>https://github.com/sonprogrammer</a>
        </StyledGit>
        <StyledCertificate>
        <div className="header">
      <h1>Certificate</h1>
    </div>
            <SliderContainer>
                <SliderWrapper translateX={-current * 100}>
                    {slides.map((slide, i) => (
                        <Slide key={i}>
                            <h3>{slide.title}</h3>
                            <iframe src={slide.src}></iframe>
                        </Slide>
                    ))}
                </SliderWrapper>
                <Button left onClick={prevSlide}>❮</Button>
          <Button onClick={nextSlide}>❯</Button>

            </SliderContainer>
        </StyledCertificate>
    </StyledContainer>
  )
}

export default Develops
