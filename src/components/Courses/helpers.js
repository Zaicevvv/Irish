import _ from 'lodash';

export const removeHtmlFromText = text => {
  return text.replace(/<\/?[^>]+(>|$)/g, '');
}

export const removeHtmlFromLessons = lessons => {
  return lessons.map(lesson => {
    return {
      ...lesson,
      title: lesson.title.replace(/<\/?[^>]+(>|$)/g, '')
    }
  })
}

export const sortLessons = lessons => {
  return lessons.sort((lessons_a, lessons_b) => lessons_a.title.localeCompare(lessons_b.title));
}