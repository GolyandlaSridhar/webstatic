import React from "react"
import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Tutorials from "./pages/TutorialsList"
import Contact from "./pages/ContactUs"
import Chat from "./pages/Chat"

import AddTutorial from "./pages/AddTutorial"
import DeleteAllTutorials from "./pages/DeleteAllTutorials"

import Profile from "./pages/Profile"
import Settings from "./pages/Settings"

import Support from "./pages/Support"
import Help from "./pages/Help"
import Privacy from "./pages/Privacy"
import TermsOfService from "./pages/TermsOfService"

import NotificationSettings from "./pages/NotificationSettings"
import ViewAllNotifications from "./pages/ViewAllNotifications"

import PublicRoutes from "./components/PublicRoutes"
import InnerContent from "./components/InnerContent"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/** Footer links */}
          <Route path="/support" element={<Support />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfService />} />

          {/** Tutorial list dropdown items */}
          <Route path="/addTutorial" element={<AddTutorial />} />
          <Route path="/deleteAllTutorials" element={<DeleteAllTutorials />} />

          {/** Notification */}
          <Route
            path="/notificationSettings"
            element={<NotificationSettings />}
          />
          <Route
            path="/viewAllNotifications"
            element={<ViewAllNotifications />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRoutes
