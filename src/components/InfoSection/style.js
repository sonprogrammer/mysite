import styled from "styled-components";
import tw from "twin.macro";


export const StyledInfoSection = styled.section`
    ${tw`
        p-8
        bg-blue-100
        min-h-screen
    `}
    h2{
        ${tw`
            text-3xl
            font-bold
            mb-8
        `}
    }

`;

export const StyledPresent = styled.div`
    ${tw`
        flex
        flex-col
        gap-2
        items-center
        justify-center
    `}
    h3{
        ${tw`
            text-[20px]
            font-bold
            text-blue-500
        `}
    }
    p{
        ${tw`
            text-gray-500
        `}
    }
`

export const StyledTitle = styled.div`
    ${tw`
        flex
        gap-5
        items-center
        justify-center
    `}
`

export const StyledInfoContainer = styled.div`
    ${tw`
        space-y-6
        text-gray-700
        mb-20
    `}
`

export const StyledBox = styled.div`
    ${tw`
        flex
        justify-center
        gap-10
        w-full
        items-center
        mb-20
    `}
    div{
        ${tw`

        `}
    }
    h3{
        ${tw`
            text-2xl
            font-semibold
            mb-2    
        `}
    }
    img{
    ${tw`
        w-[120px]
        border-solid
        border-2
        border-black
    `}}
`