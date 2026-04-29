import Image from 'next/image';
import React from 'react';

const Courses = async () => {
  const res = await fetch('https://skill-sphere-rose.vercel.app/course.json');
  const courses = await res.json();

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
            <figure>
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <span className="badge badge-primary badge-sm">{course.category}</span>
              <h3 className="card-title text-lg">{course.title}</h3>
              <p className="text-sm text-base-content/60">{course.description}</p>
              <div className="flex items-center justify-between mt-2 text-sm">
                <span>👨‍🏫 {course.instructor}</span>
                <span>⭐ {course.rating}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>⏱ {course.duration}</span>
                <span className="badge badge-outline">{course.level}</span>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-primary btn-sm w-full">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;