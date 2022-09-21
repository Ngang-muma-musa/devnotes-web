import React from "react";
import Notes from './notes';
import Menu from './menu';
import TopBar from './topbar';
import Container from './container';
import Background from './backgound';
import NotesHolder from "./notesholder";
const Home = props => {
    return (
        <Background>
            <Container>
                <TopBar />
                <NotesHolder>
                    <Notes />
                    <Notes />
                </NotesHolder>
                <Menu />
            </Container>
        </Background>
    );
}

export default Home;