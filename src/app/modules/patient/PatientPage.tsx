import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { Patient } from './Pages/Patient'



// import {Feeds} from './components/Feeds'
// import {Lists} from './components/Lists'
// import {Tables} from './components/Tables'
// import {Mixed} from './components/Mixed'
// import {Statistics} from './components/Statistics'

const staffBreadCrumbs: Array<PageLink> = [
  {
    title: 'Patient',
    path: 'module/patient',
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

const PatientPage = () => {
  return (
    <Routes>

        <Route
          path='patientlist'
          element={
            <>
              <PageTitle >Patient</PageTitle>
              <Patient />
            </>
          }
        />

        {/* <Route
          path='feeds'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Feeds</PageTitle>
              <Feeds />
            </>
          }
        />
        <Route
          path='lists'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Lists</PageTitle>
              <Lists />
            </>
          }
        />
        <Route
          path='mixed'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Mixed</PageTitle>
              <Mixed />
            </>
          }
        />
        <Route
          path='tables'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Tables</PageTitle>
              <Tables />
            </>
          }
        />
        <Route
          path='statistics'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statiscics</PageTitle>
              <Statistics />
            </>
          }
        /> */}
        {/* <Route index element={<Navigate to='/crafted/widgets/lists' />} /> */}

    </Routes>
  )
}

export default PatientPage
