import React from 'react'

const VideoForm = ({ index, handleChange, video }) => {

    const handleFieldChange = (key, value) => {
        handleChange(index, key, value)

    };

    return (
        <div className='container'>
            <input
                type='text'
                value={video.title}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                name='title' placeholder='Tittle (max 100 characters)'
                className='courseFormInput w-full' />

            <input
                type='text'
                value={video.description}
                onChange={(e) => handleFieldChange('description', e.target.value)}
                name='description' placeholder='Description (max 1 000 characters) '
                className='courseFormInput w-full' />

            <div className='row justify-between'>
                <input
                    type='text'
                    value={video.video_url}
                    onChange={(e) => handleFieldChange('video_url', e.target.value)}
                    name='video_url'
                    placeholder='Video URL'
                    className='courseFormInput w-45' />

                <input
                    type='text'
                    value={video.friendly_url}
                    onChange={(e) => handleFieldChange('friendly_url', e.target.value)}
                    name='friendly_url'
                    placeholder='Friendly URL'
                    className='courseFormInput w-45' />

            </div>
        </div>
    )
}


export default VideoForm
