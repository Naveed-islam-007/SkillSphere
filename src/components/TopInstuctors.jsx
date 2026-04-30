import Image from "next/image";

const instructors = [
  { name: "John Doe", subject: "Web Development", img: "https://i.pravatar.cc/150?img=1", students: "12k" },
  { name: "Sophia Lee", subject: "UI/UX Design", img: "https://i.pravatar.cc/150?img=2", students: "9k" },
  { name: "Michael Smith", subject: "Data Science", img: "https://i.pravatar.cc/150?img=3", students: "15k" },
  { name: "Olivia Martinez", subject: "Machine Learning", img: "https://i.pravatar.cc/150?img=4", students: "11k" },
];

const TopInstructors = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🏆 Top Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((inst, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition">
              <Image
                src={inst.img}
                alt={inst.name}
                width={128}
                height={128}
                className="rounded-full object-cover ring-4 ring-primary"
              />
              <h3 className="font-bold text-xl">{inst.name}</h3>
              <p className="text-gray-400">{inst.subject}</p>
              <span className="badge badge-primary badge-lg">{inst.students} students</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;