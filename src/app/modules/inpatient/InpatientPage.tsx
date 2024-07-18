import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Patient} from '../patient/Pages/Patient'
import {InPatientList} from '../../../_metronic/partials/inpatient/InPatient'
import {InPatient} from './components/InPatient'
import {InpatientDetails} from '../../../_metronic/partials/inpatient/InpatientDetails'

const staffBreadCrumbs: Array<PageLink> = [
  {
    title: 'Inpatient',
    path: '/crafted/inpatient/InpatientList',
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

const InpatientPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='InpatientList'
          element={
            <>
              <PageTitle breadcrumbs={staffBreadCrumbs}>InPatient</PageTitle>
              <InPatient />
            </>
          }
        />
        <Route
          path='InpatientDetails'
          element={
            <>
              <PageTitle breadcrumbs={staffBreadCrumbs}>InPatient</PageTitle>
              <InpatientDetails />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default InpatientPage
