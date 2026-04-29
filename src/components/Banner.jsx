import Image from 'next/image';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
          alt="Students learning online"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">Learn Without Limits</h1>
          <p className="py-6 text-base-content/70 max-w-md">
            Explore hundreds of courses taught by expert instructors. Whether you are a beginner or
            a pro, SkillSphere has something for everyone.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;