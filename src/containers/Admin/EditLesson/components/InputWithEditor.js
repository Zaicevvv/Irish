import React from 'react'
import ReactQuill from 'react-quill';
import { modules, formats } from '../../../../constants/baseConst';

const InputWithEditor = ({ value, handleChange, setQuillRef }) => {

    const handleChangeDescription = (value) => {
        handleChange(value);
    }

    return (
        <div className='container'>
            <ReactQuill
                ref={setQuillRef}
                name={'title'}
                placeholder={'Start writing text here. Add text, photo and link.'}
                defaultValue={value}
                value={value || ''}
                onChange={handleChangeDescription}
                modules={modules}
                formats={formats}
                className={`quill-toolbar-position`}
            />
        </div>
    )
}


export default InputWithEditor
