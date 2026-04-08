import { motion } from "framer-motion";
import { MoreHorizontal, Search } from "lucide-react";

interface Patient {
  name: string;
  profile_picture: string;
  gender: string;
  age: number;
}

interface PatientSidebarProps {
  patients: Patient[];
  selectedPatient: Patient;
  onSelectPatient: (patient: Patient) => void;
}

const PatientSidebar: React.FC<PatientSidebarProps> = ({
  patients,
  selectedPatient,
  onSelectPatient,
}) => {
  const sidebarVariants = {
    hidden: { x: "-25%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <motion.aside
      className="flex flex-col w-80 h-min p-6 mt-7 ml-2 bg-white rounded-2xl shadow-md border border-gray-100"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="flex justify-between items-center p-3 mb-2 rounded-md text-gray-800">
        <span className="text-2xl font-bold">Patients</span>
        <Search className="w-5 h-5 text-gray-600" />
      </div>

      <div className="flex flex-col mt-4 h-215">
        <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
          {patients.map((patient) => {
            const isActive = selectedPatient.name === patient.name;
            return (
              <div
                key={patient.name}
                onClick={() => onSelectPatient(patient)}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                  isActive
                    ? "bg-teal-100 text-gray-800 border-l-4 border-teal-400"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className={`w-10 h-10 rounded-full object-cover mr-3 ${
                    isActive
                      ? "ring-2 ring-teal-400"
                      : "ring-1 ring-transparent"
                  }`}
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="font-semibold">{patient.name}</p>
                    <p className="text-xs text-gray-500">
                      {patient.gender}, {patient.age} years
                    </p>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
};

export default PatientSidebar;
