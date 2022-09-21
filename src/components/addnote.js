import React from "react";
import Background from "./backgound";
import Container from "./container";
import Menu from "./menu";
import FormContainer from "./form";
import MenuContainer from "./menucontainer";

const AddNote = props => {
    return (
        <Background>
            <Container>
                <FormContainer/>
                <MenuContainer></MenuContainer>
            </Container>
        </Background>
    );
}

export default AddNote;