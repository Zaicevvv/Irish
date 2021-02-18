import React from 'react';
import ReactQuill from 'react-quill';
import config from '../../../config'
import AttachmentIcon from '@material-ui/icons/Attachment'

const Topic = ({ lesson }) => (
  <div className="tab-container" style={{ marginTop: '42px' }}>
    <div className="">
      <div className="w-full container-body">
        {lesson && lesson.topic ?
          <ReactQuill
            name={'name'}
            value={lesson.topic}
            className={`quill-toolbar-disabled`}
            readOnly={true}
          >
            <div />
          </ReactQuill> : null
        }
        {/* <span>{ReactHtmlParser(topicsStore.topic.description)}</span> */}
        {lesson.attachments_attributes && lesson.attachments_attributes.length > 0 ? (
          <div className='attachemnts_wrapper'>
            <p>Attachments:</p>
            <div>
              {lesson.attachments_attributes.map((item, index) => {
                return <a className='attachment_link' href={config.REACT_APP_ROOT + item.document.url} target='_blank'><AttachmentIcon />Document {index + 1}</a>
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default Topic;