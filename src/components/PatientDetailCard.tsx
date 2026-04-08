// src/components/PatientDetailCard.tsx
import React from "react";
import { Calendar, Phone, Venus, Mars, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Patient {
  name: string;
  gender: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  profile_picture: string;
}

interface PatientDetailCardProps {
  patient: Patient;
}

const cardVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
};

const PatientDetailCard: React.FC<PatientDetailCardProps> = ({ patient }) => {
  const InfoRow = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactElement;
    label: string;
    value: string;
  }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-gray-100">
      <div className="p-2 rounded-full bg-gray-100">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-500">{value}</p>
      </div>
    </div>
  );

  const formatDate = (date: string) => {
    if (!date) return "N/A";
    try {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return date;
    }
  };

  return (
    <motion.div
      key={patient.name}
      className="flex flex-col items-center h-full p-6 bg-white border border-gray-100 rounded-3xl shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative mb-6">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="object-cover w-32 h-32 border-4 border-none rounded-full shadow-md"
        />
      </div>

      <h3 className="mb-6 text-2xl font-bold text-gray-800">{patient.name}</h3>

      <div className="w-full pt-4 space-y-4">
        <InfoRow
          icon={<Calendar className="w-5 h-5 text-primary-accent" />}
          label="Date of Birth"
          value={formatDate(patient.date_of_birth)}
        />
        <InfoRow
          icon={
            patient.gender === "Female" ? (
              <Venus className="w-5 h-5 text-primary-accent" />
            ) : (
              <Mars className="w-5 h-5 text-primary-accent" />
            )
          }
          label="Gender"
          value={patient.gender}
        />
        <InfoRow
          icon={<Phone className="w-5 h-5 text-primary-accent" />}
          label="Contact Info"
          value={patient.phone_number}
        />
        <InfoRow
          icon={<Phone className="w-5 h-5 text-primary-accent" />}
          label="Emergency Contact"
          value={patient.emergency_contact}
        />
        <InfoRow
          icon={<ShieldCheck className="w-5 h-5 text-primary-accent" />}
          label="Insurance Provider"
          value={patient.insurance_type}
        />
      </div>

      <button className="w-full py-3 mt-8 font-bold transition-colors bg-teal-300 rounded-full text-sidebar-dark hover:bg-teal-200">
        Show All Details
      </button>
    </motion.div>
  );
};

export default PatientDetailCard;
