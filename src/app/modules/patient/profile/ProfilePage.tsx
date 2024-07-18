import {Navigate, Routes, Route, Outlet} from 'react-router-dom'

import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'
import { Insurance } from './components/Insurance'
import { BirthDetails } from './components/BirthDetails'
import { ScanningReport } from './components/ScanningReport'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/modules/patientlist',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='details/:patientId'
        element={
          <>
            <PageTitle >Details</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='visit/:patientId'
        element={
          <>
            <PageTitle >Visit</PageTitle>
            <Projects />
          </>
        }
      />
      <Route
        path='history/:patientId'
        element={
          <>
            <PageTitle >History</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path='labreport/:patientId'
        element={
          <>
            <PageTitle >Lab Report</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='billing/:patientId'
        element={
          <>
            <PageTitle >Billing</PageTitle>
            <Connections />
          </>
        }
      />
      <Route
        path='insurance/:patientId'
        element={
          <>
            <PageTitle >Insurance</PageTitle>
            <Insurance/>
          </>
        }
      />
      <Route
        path='BirthDetails/:patientId'
        element={
          <>
            <PageTitle >Birth-Details</PageTitle>
            <BirthDetails/>
          </>
        }
      />
      <Route
        path='Scanning-Report/:patientId'
        element={
          <>
            <PageTitle >Scanning-Report</PageTitle>
            <ScanningReport/>
          </>
        }
      />
      <Route index element={<Navigate to='/modules/patient/details' />} />
    </Route>
  </Routes>
)

export default ProfilePage
