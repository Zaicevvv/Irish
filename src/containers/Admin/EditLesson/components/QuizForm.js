import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const QuizForm = ({ item, index, handleChange }) => {

    const handleRadioFieldChange = (e) => {
        handleChange(index, 'correct', e.target.value == 'true')
    };
    const handleFieldChange = (key, value) => {
        handleChange(index, key, value)

    };

    return (
        <div className='container'>
            <input
                type='text'
                value={item.question}
                onChange={(e) => handleFieldChange('question', e.target.value)}
                name='question' placeholder={index + 1 + ' Question Title'}
                className='courseFormInput w-full' />

            <div className='row aling-center'>
                <RadioGroup className='radio_group row' aria-label="correct" name="correct" value={item.correct} onChange={handleRadioFieldChange}>
                    <FormControlLabel value={true} control={<Radio />} label="True" />
                    <FormControlLabel value={false} control={<Radio />} label="False" />
                </RadioGroup>
            </div>

        </div>
    )
}


export default QuizForm
