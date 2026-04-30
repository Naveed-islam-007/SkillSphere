export const getCourses = async () => {
  const res = await fetch('https://skill-sphere-rose.vercel.app/course.json');
  const courses = await res.json();
  return courses;
};

export const getHotest = async () => {
  const res = await fetch(`https://skill-sphere-rose.vercel.app/course.json`);
  const highestRated = await res.json();
  return [...highestRated].sort((a,b)=>b.rating-a.rating).slice(0,3);
};