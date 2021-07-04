import React from 'react';
import { DivHeader, HeaderH1, TituloAudio } from './style'
import Button from '@material-ui/core/Button';
import AudioPlayer from 'material-ui-audio-player';


export default function Header(props) {
   
    return (
        <DivHeader>
            <Button variant="contained" color="primary" onClick={props.goToPage1}> Home</Button>
            <TituloAudio>
                <HeaderH1>AstroMatch</HeaderH1>
                <AudioPlayer
                    elevation={1}
                    width="125%"
                    variation="primary"
                    spacing={1}
                    download={false}
                    autoplay={true}
                    order="standart"
                    preload="auto"
                    loop={false}
                    src={"https://drive.google.com/uc?id=1W3obBCqEVPWmaDnTPXD8rQCafriF0YkR&export=.mp3"}
                />
            </TituloAudio>
            <Button variant="contained" color="secondary" onClick={props.goToMatchListPage}>List S2</Button>
        </DivHeader>
    )
}