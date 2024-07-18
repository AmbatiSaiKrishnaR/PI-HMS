/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Modules</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/module/patient/patientlist'
        title='Patient'
        icon='profile-circle'
      />
      <SidebarMenuItem
        to='module/opbill/OPBillList'
        title='OPBilling'
        icon='profile-circle'
      />

      <SidebarMenuItemWithSub
        to='/crafted/staff'
        title='Staff'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/staff/staff' title='Staff Details' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/inpatient'
        title='InPatient'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem
          to='/crafted/inpatient/InPatientList'
          title='InPatient List'
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='User management'
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}
