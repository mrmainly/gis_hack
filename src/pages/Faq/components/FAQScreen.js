import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { mainTheme } from "../../../styles";

import { ScreenWrapper } from "../../../components/ScreenWrapper";

// TODO: разобраться с форматирование строки ответа на вопрос "Как происходит «ОНКОПОИСК»?"
const faqs = [
    {
        question: 'Что такое юрта?',
        answer: 'Переносное, конусообразной формы жилище у кочевых народов Азии.',
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do`,
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
    },
]


const useClasses = makeStyles({
    question: {
        fontSize: mainTheme.textSizes.middle,
        color: mainTheme.colors.darkBlue,
        padding: '10px 0px',
        fontWeight: 500,
    },

    answer: {
        fontSize: mainTheme.textSizes.small,
        color: mainTheme.colors.lightPurple,
    }

})

export const FAQScreen = ({ marginTop, marginBottom }) => {
    const classes = useClasses()
    return (
        <ScreenWrapper marginTop={marginTop} marginBottom={marginBottom}>
            {faqs.map((faq, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.question}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </ScreenWrapper>
    );
};