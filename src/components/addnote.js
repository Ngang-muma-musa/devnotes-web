import React,{useState} from "react";
import Background from "./backgound";
import Container from "./container";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import FormContainer from "./form";
import MenuContainer from "./menucontainer";
import MenuPillContainer from "./menupillcontainer";

const AddNote = props => {
    return (
        <Background>
            <Container>
                <FormContainer/>
                <MenuContainer>
                    <MenuPillContainer>
                        <div className='color new'>
                        <BsFillCheckCircleFill className='check' />
                        </div>
                        <div className='color done'>
                            <BsFillCheckCircleFill className='check' />
                        </div>
                        <div className='color pending'>
                        <BsFillCheckCircleFill className='check' />
                        </div>
                    </MenuPillContainer>
                    <div className='button'>
                        <MdDarkMode />
                    </div>
                    <div className='button'>
                        <FiSend />
                    </div>
                </MenuContainer>
            </Container>
        </Background>
    );
}

export default AddNote;