const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-200 via-teal-400 to-teal-800">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
      <p className="text-xl font-semibold text-white tracking-wide">
        Loading Patient Data...
      </p>
    </div>
  );
};

export default Spinner;
