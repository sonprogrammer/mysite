import styled from "styled-components";
import tw from "twin.macro";


export const StyledContainer = styled.div`
    ${tw`
        min-h-screen  
        // bg-gradient-to-b
        // from-gray-700
        // to-blue-950
        flex
        justify-around

    `}
    background-image: url('/star.webp');
    background-size: cover;
    
`



export const StyledGit = styled.div`
    ${tw`
        flex-1
    flex
    flex-col
    justify-center
    items-center
    text-center
    p-8
    `}
    
    h1{
        ${tw`
            text-purple-800
            text-center
            text-[100px]
        `}
    }
        a{
    ${tw`
        text-purple-200
        text-xl

        `}
    }
        p{
         ${tw`
            text-white
            text-3xl
            mb-5
            `}
        }
`
export const StyledCertificate = styled.div`
    ${tw`
        flex-1
    flex
    flex-col
    justify-center
    items-center
    text-center
    p-8
    `}
    h1{
        ${tw`
            text-pink-700
            text-center
            text-[100px]
        `}
    }
        p{
         ${tw`
            text-white
            text-3xl
            mb-5
            `}
        }
            div{
            ${tw`
                    text-white
                `}
            }
`

export const StyledBox = styled.div`
    ${tw`
        flex
    `}
`
export const SliderContainer = styled.div`
  ${tw`
    relative
    overflow-hidden
    w-[50%]
    mx-auto
  `}
`;

export const SliderWrapper = styled.div`
  ${tw`
    flex
    transition-transform
    duration-500
    ease-in-out
  `}
  transform: translateX(${(props) => props.translateX}%);
`;


export const Slide = styled.div`
  ${tw`
    min-w-full
    flex-shrink-0
  `}

  iframe {
    ${tw`
      w-full
      h-[400px]  
      border-none
    `}
  }
`;

export const Button = styled.button`
  ${tw`
    absolute
    top-1/2
    transform
    -translate-y-1/2
    text-white
    bg-black
    bg-opacity-50
    p-2
    rounded-full
  `}
  ${(props) => (props.left ? 'left: 10px;' : 'right: 10px;')}
`;
