import React from 'react';
import './SubTitle.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const SubTitle = (props) => {
    const { title, theme } = props;

    return (
        // <div className="subtitle">
        //     <p className="subtitle-title">
        //         {props.title}
        //     </p>
        // </div>
        <Container sx={{mt:13}}>
            <Typography
                variant='h3'
                sx={{
                    color: theme.palette.primary.sub,
                    fontFamily: theme.typography.titleText,
                    WebkitTextStroke: '2px black',
                    textShadow: "10px 0 rgb(7, 44, 10)"
                    }}>{title}</Typography>
        </Container>
    );
};

export default SubTitle;
