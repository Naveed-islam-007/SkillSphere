import Image from 'next/image';
import React from 'react';
import CourseCard from './CourseCard';
import { getCourses } from '@/lib/data';

const Generation = async () => {
   const courses=await getCourses()
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 ">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.slice(0,6).map((course) => (
         <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Generation;