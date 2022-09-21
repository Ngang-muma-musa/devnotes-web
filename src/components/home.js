import React, { useState } from "react";
import Notes from './notes';
import Menu from './menu';
import TopBar from './topbar';
import Container from './container';
import Background from './backgound';
import NotesHolder from "./notesholder";
const data = [
    {
        id: 1,
        title: 'Drinks 1',
        date: 'sep 14,2022',
        status: 'done',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 2,
        title: 'CAMSOL 2',
        date: 'sep 14,2022',
        status: 'pending',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 3,
        title: 'CAMSOL 3',
        date: 'sep 14,2022',
        status: 'new',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 4,
        title: 'CAMSOL 4',
        date: 'sep 14,2022',
        status: 'pending',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 5,
        title: 'CAMSOL 5',
        date: 'sep 14,2022',
        status: 'done',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 6,
        title: 'CAMSOL 6',
        date: 'sep 14,2022',
        status: 'new',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    },
    {
        id: 7,
        title: 'CAMSOL STANDARD 7',
        date: 'sep 14,2022',
        status: 'new',
        note: 'In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces'
    }
];
const Home = props => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === data.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(data.length)
        }
    }
    return (
        <Background>
            <Container>
                <TopBar />
                <NotesHolder>
                    {data.slice(slideIndex - 1, slideIndex).map((data, index) => {
                        return (
                            <>
                                <Notes key={index} title={data.title} date={data.date} note={data.note} status={data.status} />
                            </>

                        );
                    })}
                    {data.slice(slideIndex, slideIndex + 1).map((data, index) => {
                        return (
                            <>
                                <Notes key={index} title={data.title} date={data.date} note={data.note} status={data.status} />
                            </>

                        );
                    })}
                </NotesHolder>
                <Menu prev={prevSlide} next={nextSlide} />
            </Container>
        </Background>
    );
}

export default Home;