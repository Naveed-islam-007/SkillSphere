import { getCourses } from '@/lib/data';
import Image from 'next/image';

const CourseDetailPage = async ({ params }) => {
  const { id } = await params;
  const courses = await getCourses();
  const course = courses.find((c) => c.id === Number(id));

  const { title, instructor, duration, rating, level, description, image, category } = course;

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full h-72 object-cover rounded-2xl mb-6"
      />
      <span className="badge badge-primary mb-3">{category}</span>
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="text-base-content/70 mb-6">{description}</p>
      <div className="flex flex-wrap gap-6 text-sm mb-6">
        <span>👨‍🏫 {instructor}</span>
        <span>⭐ {rating}</span>
        <span>⏱ {duration}</span>
        <span className="badge badge-outline">{level}</span>
      </div>
      <button className="btn btn-primary">Enroll Now</button>
    </div>
  );
};

export default CourseDetailPage;