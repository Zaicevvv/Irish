import _ from 'lodash';

export const sortTopicsAlphabetically = courses => {
  const sorted = courses.reduce((array, item) => {
    let result = array;
    let key = item.title.charAt(0).toUpperCase();

    if (result[key]) result[key].push(item)
    else result[key] = [item]

    return result;
  }, {});

  return sorted;
};

export const getLetters = sortedCourses => {
  return _.orderBy(_.keys(sortedCourses), String, ['asc']);
}

export const sortTopics = courses => {
  return courses.sort((course_a, course_b) => course_a.title.localeCompare(course_b.title));
}