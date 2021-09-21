import React from 'react'
import { StyledHeader, HeaderTitle } from './styles'
import GlobalFonts from '../../fonts/fonts';
import PropTypes from 'prop-types';

export const Header = ({ children = "" }) => {
    let animatedLetters;

    if (children.length > 10) {
        let firstLine = children.slice(0, 9);
        let secondLine = children.slice(9);
        animatedLetters = [
            firstLine,
            <br className='invisible' />,
            secondLine
        ]
    } else {
        animatedLetters = children;
    }
    return <StyledHeader>
        <GlobalFonts />
        {children.length &&
            <HeaderTitle>
                {animatedLetters}
            </HeaderTitle>}
        </StyledHeader>
}

Header.propTypes = {
    children: PropTypes.string,
}