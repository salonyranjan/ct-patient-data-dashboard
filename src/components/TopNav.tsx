// src/components/TopNav.tsx
import React from "react";
import {
  Home,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  Users,
  MoreVertical,
} from "lucide-react";
import { motion } from "framer-motion";
import techCareLogo from "../assets/TestLogo.svg";
import doctorIcon from "../assets/senior-woman-doctor-and-portrait-1.png";

const navVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.1 },
  },
};

const TopNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: "Overview", active: false },
    { icon: Users, label: "Patients", active: true },
    { icon: Calendar, label: "Schedule", active: false },
    { icon: MessageSquare, label: "Message", active: false },
    { icon: CreditCard, label: "Transactions", active: false },
  ];

  return (
    <motion.header
      className="flex justify-between items-center px-8 py-3 bg-white shadow-sm border border-gray-200 rounded-full m-2 sticky top-0 z-20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <div className="flex items-center gap-10">
        <img src={techCareLogo} alt="Tech Care" className="h-8" />

        {/* Center Nav */}
        <nav className="flex gap-5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors
                ${
                  item.active
                    ? "bg-teal-300 text-gray-900 font-semibold"
                    : "text-gray-600 hover:bg-teal-100 hover:text-gray-800"
                }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={doctorIcon}
              alt="Dr. Jose Simmons"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Dr. Jose Simmons
            </p>
            <p className="text-xs text-gray-500">General Practitioner</p>
          </div>
        </div>
        <div className="w-px h-6 bg-gray-200" />
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
      </div>
    </motion.header>
  );
};

export default TopNav;
