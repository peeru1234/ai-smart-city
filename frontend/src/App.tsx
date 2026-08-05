import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { VoiceModal } from './components/VoiceModal';
import { ChatWidget } from './components/ChatWidget';

// Import Pages
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { IncidentSimulator } from './pages/IncidentSimulator';
import { DigitalTwinMap } from './pages/DigitalTwinMap';
import { TrafficMonitoring } from './pages/TrafficMonitoring';
import { AccidentDetection } from './pages/AccidentDetection';
import { FloodPrediction } from './pages/FloodPrediction';
import { PollutionMonitoring } from './pages/PollutionMonitoring';
import { ParkingPrediction } from './pages/ParkingPrediction';
import { EmergencyCenter } from './pages/EmergencyCenter';
import { VoiceAssistantPage } from './pages/VoiceAssistant';
import { AIChatbotPage } from './pages/AIChatbot';
import { DroneAnalysis } from './pages/DroneAnalysis';
import { AICityManager } from './pages/AICityManager';
import { Analytics } from './pages/Analytics';
import { NotificationsPage } from './pages/Notifications';
import { SettingsPage } from './pages/Settings';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [voiceModalOpen, setVoiceModalOpen] = useState<boolean>(false);
  const [activeRole, setActiveRole] = useState<string>('Admin');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'login':
        return <Login onLoginSuccess={(role) => { setActiveRole(role); setCurrentPage('dashboard'); }} />;
      case 'dashboard':
        return <Dashboard onNavigatePage={setCurrentPage} onOpenVoice={() => setVoiceModalOpen(true)} />;
      case 'simulator':
        return <IncidentSimulator />;
      case 'digital-twin':
        return <DigitalTwinMap />;
      case 'traffic':
        return <TrafficMonitoring />;
      case 'accidents':
        return <AccidentDetection />;
      case 'flood':
        return <FloodPrediction />;
      case 'pollution':
        return <PollutionMonitoring />;
      case 'parking':
        return <ParkingPrediction />;
      case 'emergency':
        return <EmergencyCenter />;
      case 'voice':
        return <VoiceAssistantPage />;
      case 'chatbot':
        return <AIChatbotPage />;
      case 'drone':
        return <DroneAnalysis />;
      case 'city-manager':
        return <AICityManager />;
      case 'analytics':
        return <Analytics />;
      case 'notifications':
        return <NotificationsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard onNavigatePage={setCurrentPage} onOpenVoice={() => setVoiceModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 flex flex-col font-['Inter',sans-serif]">
      
      {/* Header */}
      <Header
        onOpenVoice={() => setVoiceModalOpen(true)}
        onNavigatePage={setCurrentPage}
        activeRole={activeRole}
        setActiveRole={setActiveRole}
      />

      {/* Main Layout */}
      <div className="flex-1 flex relative">
        <Sidebar
          currentPage={currentPage}
          onSelectPage={setCurrentPage}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className={`flex-1 p-4 lg:p-8 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}>
          {renderPageContent()}
        </main>
      </div>

      {/* Voice Assistant Modal */}
      <VoiceModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        onCommandExecute={(cmd) => {
          if (cmd.toLowerCase().includes('accident') || cmd.toLowerCase().includes('crash')) {
            setCurrentPage('accidents');
          } else if (cmd.toLowerCase().includes('emergency') || cmd.toLowerCase().includes('ambulance')) {
            setCurrentPage('emergency');
          } else if (cmd.toLowerCase().includes('simulate') || cmd.toLowerCase().includes('fire')) {
            setCurrentPage('simulator');
          }
        }}
      />

      {/* Floating AI Chatbot */}
      <ChatWidget />

    </div>
  );
};

export default App;
