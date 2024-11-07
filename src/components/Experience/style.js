import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        min-h-screen
        bg-gradient-to-b
        from-blue-200
        to-gray-200
        flex
        items-center
        justify-center
        gap-8
        p-10
    `}
`

export const StyledContent = styled.div`
    ${tw`
        leading-[1.8]
        text-blue-900
        font-bold
    `}
`

export const StyledCountryBubble = styled.div`
  ${tw`
    w-96
    h-96
    rounded-full
    bg-blue-500
    flex
    items-center
    justify-center
    text-white
    text-xl
    font-bold
    cursor-pointer
    shadow-2xl
    border-2
    border-white
  `}
  animation: moveUpDown 2s ease-in-out infinite;
  background-image: url('/ex.webp');
  background-size: cover;
  background-position: center;

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    transform: scale(1.5) translateY(-10px) rotateX(10deg) rotateY(10deg);
  }

`

export const StyledDevBubble = styled.div`
    ${tw`
        w-96
        h-96
        rounded-full
        bg-blue-500
        flex
        items-center
        justify-center
        text-white
        text-xl
        font-bold
        cursor-pointer
        shadow-2xl
        border-2
        border-white
        ml-16
  `}
  animation: moveUpDown 2.5s ease-in-out infinite;
  background-image: url('/code.webp');

  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    transform: scale(1.5) translateY(-10px) rotateX(10deg) rotateY(10deg);
  }

    `
