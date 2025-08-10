import CountUp from 'react-countup';
import { FaBook, FaUsers, FaSmile } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi'; // Use this as Librarian icon

const StatsSection = () => {
  const stats = [
    {
      icon: <FaBook className="text-4xl text-primary" />,
      label: "Total Books",
      value: 5000,
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      label: "Books Borrowed",
      value: 3200,
    },
    {
      icon: <FaSmile className="text-4xl text-primary" />,
      label: "Happy Readers",
      value: 2800,
    },
    {
      icon: <GiTeacher className="text-4xl text-primary" />,
      label: "Librarians",
      value: 12,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
    <h1 className='text-center font-bold text-3xl text-blue-600'>Our Acheivments</h1>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-white to-blue-50 shadow rounded-box">
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="flex justify-center">{stat.icon}</div>
          <h2 className="text-3xl font-bold text-neutral">
            <CountUp end={stat.value} duration={5} />+
          </h2>
          <p className="text-sm text-base-content">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default StatsSection;
