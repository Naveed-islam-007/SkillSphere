import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const CourseCard = ({course}) => {
    return (
        <div  className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
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
                       <span className='flex'><GiTeacher /> {course.instructor}</span>
                       <span className='flex'><FaStar /> {course.rating}</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                       <span className='flex'><FaClock /> {course.duration}</span>
                       <span className="badge badge-outline">{course.level}</span>
                     </div>
                     <div className="card-actions mt-4 ">
                      <Link href={`/courses/${course.id}`}>
                         <button className="btn btn-primary w-full rounded-xl">View Details</button>
                      </Link>
                     </div>
                   </div>
                 </div>
    );
};

export default CourseCard;