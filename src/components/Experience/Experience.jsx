import React, { useState } from 'react'
import { StyledContainer, StyledBubble, StyledCountryBubble, StyledDevBubble, StyledContent } from './style'
import { motion } from 'framer-motion'

const Experience = () => {
  const [isOpen, setIsOpen] = useState(null)

  const handleBubbleClick = (id) => {
    setIsOpen(isOpen === id ? null : id)
  }
  return (
    <StyledContainer>
      <motion.div
        onClick={() => handleBubbleClick(1)}
        animate={{
          y: isOpen === 1 ? -20 : 0,
          opacity: isOpen === 1 ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <StyledCountryBubble>
          해외 경험
        </StyledCountryBubble>
      </motion.div>

      {isOpen === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StyledContent>
            뉴질랜드라는 새로운 공간에서 남한테 의지하는 대신 저 혼자 해결해나가고 다양한 경험으로
            새로운 것들을 시도하고 배우는 즐거움을 느끼게 되었습니다.
            처음에는 모든 것이 낯설고 두려웠지만, 포기보다는 다양한 경험을 중시하는 사람으로 변하게 되었습니다.
            특히, 여러 가지 경험을 하면서 자연스럽게 디자인에 흥미가 생겼고,
            주변 사람들로부터 디자인 감각이 있다는 이야기를 자주 들으면서 자신감과 함께 더욱 관심을 가지게 되었습니다.
            그곳에서의 시간은 21년 인생보다 훨씬 더 의미 있었다고 말할 수 있을 정도로 값진
            경험이었습니다.
            이후에는 단편적으로만 보던 시선에서 벗어나 다양한 시각으로 세상을 바라보며 더
            긍정적으로 변하게 되었고, 의미 없는 시간을 보내기보다는 항상 자기계발을 중시하게
            되었습니다. 디자인에 대한 관심과 자신감을 바탕으로, 전공을 살릴 수 있는 프론트엔드를 알게
            되었고, 이 기회를 살리기 위해 지금까지 노력해 왔습니다. 제 장점은 꾸준함과 노력하는 자세,
            그리고 하고자 한 일은 반드시 해보려는 의지와 긍정적인 태도입니다. 이러한 장점을 바탕으로
            앞으로도 계속해서 성장해 나갈 것입니다.


          </StyledContent>

        </motion.div>
      )}

      <motion.div
        onClick={() => handleBubbleClick(2)}
        animate={{
          y: isOpen === 2 ? 20 : 0,
          opacity: isOpen === 2 ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <StyledDevBubble>
          개발 경험
        </StyledDevBubble>
      </motion.div>

      {isOpen === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StyledContent>
            엘리스라는 교육기관에서
            두 번의 팀 프로젝트에 참여했습니다. 첫 번째 프로젝트에서는 백엔드 개발을 담당하여 서버 구축과
            데이터 관리를 하는 역할을 수행하였고, 두 번째 프로젝트에서는 프론트엔드 개발자로서 UI와 UX를
            설계하고 구현했습니다. 이러한 경험을 통해 프론트엔드와 백엔드 모두를 이해하고 개발할 수 있는
            능력을 갖추게 되었으며, 팀 내에서의 협업과 소통의 중요성을 배웠습니다.<br />
            교육을 이수한 후에도 일상속 느낄수 있는 불편함을 개선할 수 있는 주제들로 개인 프로젝트를 진행하며 개발 역량을 꾸준히 발전시켜왔습니다.
             그러면서 초안의 중요성을 느끼고 다수의 오류를 접할 때마다 원인을 분석하고 해결하는 과정을 통해 문제 해결 능력을 향상 시킬수 있었습니다.
          </StyledContent>
        </motion.div>
      )}

    </StyledContainer>
  )
}

export default Experience
