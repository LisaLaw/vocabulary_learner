import React from 'react'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Page } from './components/page/Page'
import { Footer } from './components/footer/Footer.jsx'
import { StyledContainer } from './styles'

export const App = () => {
    return (
        <StyledContainer>
            <Header>My Vocab <br className='invisible' />Learner</Header>
            <Sidebar />
            <Page />
            <Footer />
        </StyledContainer>
    );
};
