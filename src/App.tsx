import React, { useState, useEffect } from "react";
import { Download, TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";

import PatientChart from "./components/PatientChart";
import PatientSidebar from "./components/PatientSidebar";
import TopNav from "./components/TopNav";
import PatientDetailCard from "./components/PatientDetailCard";
import Spinner from "./components/Spinner";

import BriefcaseImage from "./assets/respiratory rate.svg";
import TemperatureImage from "./assets/temperature.svg";
import HeartRateImage from "./assets/HeartBPM.svg";
import UpArrowIcon from "./assets/ArrowUp.svg";
import DownArrowIcon from "./assets/ArrowDown.svg";
import "./index.css";

const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;
const apiUrl = import.meta.env.VITE_API_URL;

export interface Vital {
  value: number;
  levels: string;
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: {
    systolic: Vital;
    diastolic: Vital;
  };
  respiratory_rate: Vital;
  temperature: Vital;
  heart_rate: Vital;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: { name: string; description: string; status: string }[];
  lab_results: string[];
  profile_picture: string;
  date_of_birth: string;
}

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const credentials = btoa(`${username}:${password}`);
        const response = await fetch(apiUrl, {
          headers: { Authorization: `Basic ${credentials}` },
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setPatients(data);
          setSelectedPatient(data[0]);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  const handlePatientSelect = (patient: Patient) => setSelectedPatient(patient);

  const vitalCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.15 },
    }),
  };

  const renderVitalCard = (
    vital: Vital | undefined,
    title: string,
    icon: React.ReactElement,
    bgColor: string,
    index: number
  ) => (
    <motion.div
      className={`p-6 rounded-3xl flex flex-col justify-between h-[200px] ${bgColor}`}
      variants={vitalCardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      key={title}
    >
      <div className="flex flex-col items-start">
        <div className="mb-4">{icon}</div>
        <p className="text-sm font-semibold text-gray-700">{title}</p>
      </div>

      <div>
        <p className="text-3xl font-bold text-gray-800">
          {vital?.value ?? "N/A"}{" "}
          {title === "Temperature" ? "°F" : " bpm"}
        </p>
        <p className="font-semibold text-gray-600 mt-1">
          {vital?.levels ?? "Normal"}
        </p>
      </div>
    </motion.div>
  );

  const renderBloodPressure = (
    vital: Vital | undefined,
    label: string,
    color: string,
    bgColor: string
  ) => (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${bgColor} ${color}`} />
        <p className={`text-sm font-semibold ${color}`}>{label}</p>
      </div>
      <p className="text-3xl font-bold text-gray-800">{vital?.value ?? "N/A"}</p>
      <div className="flex items-center text-sm text-gray-500 space-x-1">
        {vital?.levels.includes("Higher") && (
          <img src={UpArrowIcon} alt="Up" className="w-4 h-4" />
        )}
        {vital?.levels.includes("Lower") && (
          <img src={DownArrowIcon} alt="Down" className="w-4 h-4" />
        )}
        <span>{vital?.levels ?? "Normal"}</span>
      </div>
    </div>
  );

  if (loading) return <Spinner />;

  if (!selectedPatient) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold text-teal-950 bg-gradient-to-r from-gray-300 via-teal-500 to-teal-950">
        <TriangleAlert className="mr-3" />
        <p>Failed to load patient data.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopNav currentPatientName={selectedPatient.name} />
      <div className="flex h-screen overflow-x-hidden">
        <PatientSidebar
          patients={patients}
          selectedPatient={selectedPatient}
          onSelectPatient={handlePatientSelect}
        />

        <main className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnosis History</h3>

                <div className="bg-white p-6 rounded-3xl shadow-inner border border-gray-100 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">Blood Pressure</h4>
                    <p className="text-sm text-gray-500">Last 6 Months</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 h-[250px]">
                    <div className="col-span-2 h-full">
                      <PatientChart history={selectedPatient.diagnosis_history} />
                    </div>

                    <div className="col-span-1 flex flex-col justify-around py-4">
                      {renderBloodPressure(
                        selectedPatient.diagnosis_history[0]?.blood_pressure.systolic,
                        "Systolic",
                        "text-pink-500",
                        "bg-pink-400"
                      )}
                      <div className="h-px w-full bg-gray-200 my-2" />
                      {renderBloodPressure(
                        selectedPatient.diagnosis_history[0]?.blood_pressure.diastolic,
                        "Diastolic",
                        "text-purple-500",
                        "bg-purple-400"
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {renderVitalCard(
                    selectedPatient.diagnosis_history[0]?.respiratory_rate,
                    "Respiratory Rate",
                    <img src={BriefcaseImage} alt="Respiratory" className="w-10 h-10" />,
                    "bg-blue-100",
                    0
                  )}
                  {renderVitalCard(
                    selectedPatient.diagnosis_history[0]?.temperature,
                    "Temperature",
                    <img src={TemperatureImage} alt="Temperature" className="w-10 h-10" />,
                    "bg-pink-100",
                    1
                  )}
                  {renderVitalCard(
                    selectedPatient.diagnosis_history[0]?.heart_rate,
                    "Heart Rate",
                    <img src={HeartRateImage} alt="Heart Rate" className="w-10 h-10" />,
                    "bg-rose-100",
                    2
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Diagnostic List</h3>
                <div className="bg-white rounded-xl border-none">
                  <div className="grid grid-cols-6 gap-4 p-3 font-semibold text-gray-800 bg-gray-100 rounded-full">
                    <p className="col-span-2">Problem/Diagnosis</p>
                    <p className="col-span-3">Description</p>
                    <p className="col-span-1">Status</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto mt-2 space-y-2 custom-scrollbar">
                    {selectedPatient.diagnostic_list.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-6 gap-4 p-3 border-b border-gray-100 hover:bg-gray-50 transition"
                      >
                        <p className="col-span-2 text-sm text-gray-600">{item.name}</p>
                        <p className="col-span-3 text-sm text-gray-600">{item.description}</p>
                        <p className="col-span-1 text-sm text-gray-500">{item.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 space-y-8">
              <PatientDetailCard patient={selectedPatient} />
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lab Results</h3>
                <div className="flex flex-col space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                  {selectedPatient.lab_results.slice(0, 5).map((result, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                    >
                      <p className="text-sm text-gray-700">{result}</p>
                      <Download className="w-5 h-5 text-gray-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
