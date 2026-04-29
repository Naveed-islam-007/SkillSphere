export const getCourses = async () => {
  const res = await fetch('https://skill-sphere-rose.vercel.app/course.json');
  const courses = await res.json();
  return courses;
};

export const getNewReleases = async () => {
  const res = await fetch(`https://skill-sphere-rose.vercel.app/new.json`);
  const newReleases = await res.json();
  return newReleases;
};