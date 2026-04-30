const tips = [
  { icon: "🎯", title: "Set Clear Goals", desc: "Break your learning into small daily targets." },
  { icon: "⏰", title: "Time Management", desc: "Use the Pomodoro technique — 25 min focus, 5 min break." },
  { icon: "📝", title: "Take Notes", desc: "Writing things down improves retention significantly." },
  { icon: "🔄", title: "Practice Daily", desc: "Consistency beats intensity — even 30 mins a day adds up." },
];

const LearningTips = () => {
  return (
    <section className="py-12 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">📌 Learning Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="card bg-base-100 shadow-sm p-6 text-center">
              <div className="text-4xl mb-3">{tip.icon}</div>
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-500">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;