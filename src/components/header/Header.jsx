import React from 'react'
import { StyledHeader, HeaderTitle } from './styles'
import GlobalFonts from '../../fonts/fonts';

export const Header = ({ children }) => {
    return <StyledHeader>
        <GlobalFonts />
        {children && <HeaderTitle>{children}</HeaderTitle>}
        </StyledHeader>
}