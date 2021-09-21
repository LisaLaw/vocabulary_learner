import styled,{ keyframes } from 'styled-components';

const StyledHeader = styled.div`
    border-bottom: 1px solid grey;
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: rgb(36,0,31);
    background: linear-gradient(0deg, rgba(223,223,223,0.08167016806722693) 0%, rgba(166,207,255,0.36878501400560226) 35%, rgba(112,98,245,1) 100%);
    
    & .invisible {
        display: none;

        @media(max-width: 786px) {
            display: block;
        }
    }
`;

// https://codepen.io/faria09/pen/vYGZVgW?editors=1100
const jumpAnimation = keyframes`
  33% {
    text-shadow: 0 5px #f37121, 0 5px #f2aaaa;
  }
  50% {
    transform: translate(0, 0) rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
  }
  66.67% {
    text-shadow: 0 -5px #d54062, 0 -5px #8fc0a9;
  }
`;

const HeaderTitle = styled.h2`
    color: darkblue;
    font-family: 'Apple Color Emoji';
    text-align: center;
    font-size: 40px;
    font-style: italic;
    margin-top: 0px;

    @media(max-width: 786px) {
        font-size: 30px;
    }

    & :nth-child(n) {
        animation: ${jumpAnimation} 1.5s ease-in-out infinite;
        text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
        transform: translate(0, 100%) rotate(4deg);
        display: inline-block;
    }

    & :nth-child(1) {
        animation-delay: 120ms;
    }
    & :nth-child(2) {
        animation-delay: 240ms;
    }
    & :nth-child(3) {
        animation-delay: 360ms;
    }
    & :nth-child(4) {
        animation-delay: 480ms;
    }
    & :nth-child(5) {
        animation-delay: 600ms;
    }
    & :nth-child(6) {
        animation-delay: 720ms;
    }
    & :nth-child(7) {
        animation-delay: 840ms;
    }
    & :nth-child(8) {
        animation-delay: 960ms;
    }
    & :nth-child(9) {
        animation-delay: 1080ms;
    }
    & :nth-child(10) {
        animation-delay: 1200ms;
    }
    & :nth-child(11) {
        animation-delay: 1320ms;
    }
    & :nth-child(12) {
        animation-delay: 1440ms;
    }
    & :nth-child(13) {
        animation-delay: 1560ms;
    }
    & :nth-child(14) {
        animation-delay: 1680ms;
    }
    & :nth-child(15) {
        animation-delay: 1800ms;
    }
    & :nth-child(16) {
        animation-delay: 1920ms;
    }
`;

export { StyledHeader, HeaderTitle }