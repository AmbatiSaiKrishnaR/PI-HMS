import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'

import PatientPage from '../modules/patient/PatientPage'
import StaffPage from '../modules/staff/StaffPage'
import InpatientPage from '../modules/inpatient/InpatientPage'
import ProfilePage from '../modules/patient/profile/ProfilePage'
import OPBillPage from '../modules/OPBill/OPBillPage'
import OpBillProfilePage from '../modules/OPBill/Profile/components/OPBillprofilepage'





const PrivateRoutes = () => {



  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))


  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />

        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}


        <Route
          path='module/patient*'
          element={
            <SuspensedView>
              <PatientPage />

            </SuspensedView>
          }
        />
        <Route
          path='module/opbill/*'
          element={
            <SuspensedView>
           <OPBillPage />

            </SuspensedView>
          }
        />
         <Route
          path='modules/opbilldetails*'
          element={
            <SuspensedView>
           <OpBillProfilePage/>

            </SuspensedView>
          }
        />
        
        
        


        <Route
          path='crafted/staff/*'
          element={
            <SuspensedView>
              <StaffPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/inpatient/*'
          element={
            <SuspensedView>
              <InpatientPage />
            </SuspensedView>
          }
        />
         <Route
          path='modules/OPBillList/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        




        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
