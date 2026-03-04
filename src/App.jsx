import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Project01 } from "./components/project01";
import { Project02 } from "./components/project02";
import { Project03 } from "./components/project03";
import { Contact } from "./components/contact";
import DemoNotification from "./components/DemoNotification";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  // ============================================
  // DEMO MODE CONFIGURATION
  // Set to false to enable full functionality
  // Set to true to disable buttons and show notifications
  // ============================================
  const [isDemoMode] = useState(false); // Demo mode meaning people can not use functionality while it is in demo mode. If I want it to work for my demos then I set demo mode to false for teh functionality to work
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // ============================================
  // DEMO MODE HANDLER
  // This function shows a notification when buttons are clicked in demo mode
  // To enable full functionality, set isDemoMode to false above
  // ============================================
  const handleDemoClick = (event, actionType) => {
    if (isDemoMode) {
      event.preventDefault();
      setShowNotification(true);
      setNotificationMessage(`This feature is disabled in demo mode. ${actionType} functionality would be available in production.`);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      
      {/* Pass demo mode handlers to project components */}
      <Project01 
        data={landingPageData.Project01} 
        isDemoMode={isDemoMode}
        onDemoClick={handleDemoClick}
      />
      <Project02 
        data={landingPageData.Project02}
        isDemoMode={isDemoMode}
        onDemoClick={handleDemoClick}
      />
      <Project03 
        data={landingPageData.Project03}
        isDemoMode={isDemoMode}
        onDemoClick={handleDemoClick}
      />
      
      {/* Pass demo mode handlers to contact component */}
      <Contact 
        data={landingPageData.Contact}
        isDemoMode={isDemoMode}
        onDemoClick={handleDemoClick}
      />

      {/* Notification component */}
      <DemoNotification 
        show={showNotification}
        message={notificationMessage}
        onClose={closeNotification}
      />
    </div>
  );
};

export default App;
