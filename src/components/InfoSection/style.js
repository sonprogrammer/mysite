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

export const StyledInfoContainer = styled.div`
    ${tw`
        space-y-6
        max-w-3xl
        mx-auto
        text-gray-700
    `}
`

export const StyledBox = styled.div`
    h3{
        ${tw`
            text-2xl
            font-semibold
            mb-2    
        `}
    }
`