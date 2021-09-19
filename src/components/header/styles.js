import styled from 'styled-components';

const StyledHeader = styled.div`
    border-bottom: 1px solid grey;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px;
    justify-items: space-around;
    align-items: center;
    background: rgb(36,0,31);
    background: linear-gradient(0deg, rgba(223,223,223,0.08167016806722693) 0%, rgba(166,207,255,0.36878501400560226) 35%, rgba(112,98,245,1) 100%);
`;

const HeaderTitle = styled.h2`
    color: darkblue;
    font-family: 'Apple Color Emoji';
`;

export { StyledHeader, HeaderTitle }