import React, { Component } from 'react';
import TextLoop from 'react-text-loop';


class PortfolioFixed extends Component {
    render() {
        return (

            <div className="portfolio-fixed">
                <img alt='RocioChavoya' src="https://media.licdn.com/dms/image/C5603AQF5-1IgS85rnA/profile-displayphoto-shrink_200_200/0?e=1570060800&v=beta&t=-AORZlZPDWq8w3K1YwApmLeyAJb3pwbehS2a-AiIcxg" />
                <h1>Rocio Chavoya</h1>
                <h4>
                    <TextLoop springConfig={{ stiffness: 180, damping: 8 }}> 
                        <div>Front End Developer</div>
                        <div>Visual Merchandiser</div>    
                    </TextLoop>
                    </h4>
            </div>
        )  
    }
}

// const Intro = styled.section`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     & .testloop {
//         align-self: center;
//         justify-self: center;
//     }
// `

export default PortfolioFixed