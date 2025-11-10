import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
// import Gallery from "./Pages/Gallery";
import Industries from "./Pages/Industries";
// import SuccessStories from "./Pages/SuccessStories";
import Blogs from "./Pages/Blogs";
import Testimonials from "./Pages/Testimonials";
import WebDeveloper from "./Pages/ServicesDetails/WebDeveloper";
import ServerManagment from "./Pages/ServicesDetails/ServerManagment";
import Solutions from "./Pages/Solutions";
import Security from "./Pages/Solutions/Security";
import Infrastructure from "./Pages/Solutions/Infrastructure";
import Backup from "./Pages/Solutions/Backup";
import Services from "./Pages/Solutions/Services";
import TwoFactorAuth from "./Pages/Solutions/Security/TwoFactorAuth";
import AntiSpamSolutions from "./Pages/Solutions/Security/AntiSpamSolutions";
import AdvancedThreatProtection from "./Pages/Solutions/Security/AdvancedThreatProtection";
import BandwidthAnalyis from "./Pages/Solutions/Security/BandwidthAnalysis"
import DataLeakagePrevention from "./Pages/Solutions/Security/DataLeakagePrevention";
import EmailMonitoringControl from "./Pages/Solutions/Security/EmailMonitoringControl";
import EncryptionGatewayUTM from "./Pages/Solutions/Security/EncryptionGatewayUTM";
import IntrusionDetectionPrevention from "./Pages/Solutions/Security/IntrusionDetectionPrevention";
import SecuritySerVices from "./Pages/Solutions/Security/SecurityServices"
import WebSurfingManagement from "./Pages/Solutions/Security/WebSurfingManagement";
import AntiVirusProtection from "./Pages/Solutions/Security/AntiVirusProtection";
import DataReplicationAutoLoaders from "./Pages/Solutions/Backup/DataReplicationAutoLoaders";
import BusinessContinuityPlanning from "./Pages/Solutions/Backup/BusinessContinuityPlanning";
import AutomatedBackup from "./Pages/Solutions/Backup/AutomatedBackup";
import AutomatedServerBackup from "./Pages/Solutions/Backup/AutomatedServerBackup";
import DATDLTTapeLibrary from "./Pages/Solutions/Backup/DATDLTTapeLibrary";
import DisasterRecoverySolutions from "./Pages/Solutions/Backup/DisasterRecoverySolutions";
import DataStorageSolutions from "./Pages/Solutions/Backup/DataStorageSolutions";
import ActiveDirectoryDatabaseServers from "./Pages/Solutions/Infrastructure/ActiveDirectoryDatabaseServers";
import VirtualisationSolutions from "./Pages/Solutions/Infrastructure/VirtualisationSolutions";
import HighAvailabilityLoadBalancing from "./Pages/Solutions/Infrastructure/HighAvailabilityLoadBalancing";
import MessagingCollaborationServers from "./Pages/Solutions/Infrastructure/MessagingCollaborationServers";
import NetworkPerformanceManagement from "./Pages/Solutions/Infrastructure/NetworkPerformanceManagement";

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Header outside Routes so it appears on all pages */}
        <Header />

        {/* Main content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/services/webdevelopment" element={<WebDeveloper />} />
            <Route path="services/server-management" element={<ServerManagment />} />
            <Route path="/career" element={<Career />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/industries" element={<Industries />} />
            {/* <Route path="/success-stories" element={<SuccessStories />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/solutions/security" element={<Security />} />
            <Route path="/solutions/infrastructure" element={<Infrastructure />} />
            <Route path="/solutions/backup" element={<Backup />} />
            <Route path="/solutions/services" element={<Services />} />
            <Route path="/solutions/security/2-factor-authentication" element={<TwoFactorAuth />}  />
            <Route path="/solutions/security/anti-spam-solutions" element={<AntiSpamSolutions/>} />
            <Route path="/solutions/security/advanced-threat-protection" element={<AdvancedThreatProtection/>} />
            <Route path="/solutions/security/bandwidth-analysis--management" element={<BandwidthAnalyis/>} />
            <Route path="/solutions/security/data-leakage-prevention" element={<DataLeakagePrevention/>} />
            <Route path="/solutions/security/email-monitoring--control" element={<EmailMonitoringControl/>} />
            <Route path="/solutions/security/encryption-gateway-firewallsutm" element={<EncryptionGatewayUTM/>} />
            <Route path="/solutions/security/intrusion-detection--prevention" element={<IntrusionDetectionPrevention/>} />
            <Route path="/solutions/security/web-surfing-management" element={<WebSurfingManagement/>} />
            <Route path="/solutions/security/pim-siem-vpns" element={<SecuritySerVices />} />
            <Route path="/solutions/security/anti-virus-protection" element={<AntiVirusProtection />} />
            <Route path="/solutions/security/data-leakage-prevention" element={<DataLeakagePrevention />} />
            <Route path="/solutions/Backup/data-replication-auto-loaders" element={<DataReplicationAutoLoaders />} />
            <Route path="/solutions/Backup/business-continuity-planning" element={<BusinessContinuityPlanning />} />
            <Route path="/solutions/Backup/automated-desktoplaptop-backup" element={<AutomatedBackup />} />
            <Route path="/solutions/Backup/automated-server-backup" element={<AutomatedServerBackup />} />
            <Route path="/solutions/Backup/datdlttape-library" element={<DATDLTTapeLibrary />} />
            <Route path="/solutions/Backup/disaster-recovery-solutions" element={<DisasterRecoverySolutions />} />
            <Route path="/solutions/Backup/nassanunified-data-storage-solutions" element={<DataStorageSolutions />} />
            <Route path="/solutions/infrastructure/active-directory-database-servers" element={<ActiveDirectoryDatabaseServers />} />
            <Route path="/solutions/infrastructure/virtualisation-desktopserverapplication" element={<VirtualisationSolutions />} />
            <Route path="/solutions/infrastructure/high-availability--load-balancing" element={<HighAvailabilityLoadBalancing />} />
            <Route path="/solutions/infrastructure/messaging--collaboration-servers" element={<MessagingCollaborationServers />} />
            <Route path="/solutions/infrastructure/network-performance-management" element={<NetworkPerformanceManagement />} />


          </Routes>
        </div>

        {/* Footer outside Routes so it appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
