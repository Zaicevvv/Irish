import React, {PureComponent} from 'react';

class Video extends PureComponent {
  renderEmbeded = url => {
    return <div dangerouslySetInnerHTML={{__html: url}} className='lesson-details-video'></div>
  }

  render() {
    const {lesson} = this.props;

    return (
      <div className="tab-container" style={{marginTop: '42px'}}>
        <div className="inprogress-quiz-row">
          {lesson.tutorial_videos_attributes && lesson.tutorial_videos_attributes.length > 0 ?
            lesson.tutorial_videos_attributes.map((video, index) => (
              <div className="col-12 container-body" style={{marginTop: '42px'}} key={index}>
                {this.renderEmbeded(video.video_url)}
                <div className="lesson-details-video-title-wrapper">
                  <h3 className='lesson-details-video-title'>{video.title}</h3>
                </div>
                <p className='lesson-details-video-title'>{video.description}</p>
              </div>
            )) : null
          }
        </div>
      </div>
    );
  }
}

export default Video;