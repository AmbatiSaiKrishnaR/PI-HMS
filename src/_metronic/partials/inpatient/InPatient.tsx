/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {auto} from '@popperjs/core'
import {KTIcon} from '../../helpers'
import {UsersListFilter} from '../../../app/modules/apps/user-management/users-list/components/header/UsersListFilter'

type Props = {
  className: string
}

type InPatientData = {
  id: number
  ipCaseNumber: string
  honorific: string
  name: string
  phonePrimary: string
  billedType: string
  gender: string
  age: number
  createdDateTime: number
}

const InPatientList: React.FC<Props> = ({className}) => {
  const [InpatientList, setPatientList] = useState<InPatientData[]>([])
  const [Inpatientlimit, setPatientlimit] = useState<string>('100')
  const [durtion, setDuration] = useState<string>('All')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [msearch, setmsearch] = useState<string>('')
  const apiEndpoint = 'http://ganga.pihms.co.in/InPatient/get_IPCaseList'

  useEffect(() => {
    const defaultPayload = {
      m_Filter: {
        m_Type: 1,
        m_Limit: Inpatientlimit,
        m_OrderBy: 'id',
        m_duration: durtion,
      },
    }
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultPayload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('POST request response:', data)
        setIsLoading(false)
        setPatientList(data.ml_IPCaseList)

        // Handle the response data if needed
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
  }, [Inpatientlimit, durtion])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmsearch(e.target.value)
  }

  const handleButtonClick = () => {
    setIsLoading(true)
    const defaultPayload = {
      m_Filter: {
        m_Type: 4,
        m_Search: msearch,
        ml_SearchColumns: ['Name'],
        m_Limit: Inpatientlimit,
        m_OrderBy: 'id',
        m_duration: durtion,
      },
    }

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultPayload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('POST request response:', data)
        setPatientList(data.ml_IPCaseList)
        setIsLoading(false)
        // Handle the response data if needed
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
  }

  return (
    <div>
      <div className={`card ${className}`}>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <form>
              <UsersListFilter />
              <div className='d-flex align-items-center position-relative my-1'>
                <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                <input
                  type='text'
                  data-kt-user-table-filter='search'
                  className='form-control form-control-solid w-250px ps-14'
                  placeholder='Search user'
                  value={msearch}
                  onChange={handleInputChange}
                />
                <button
                  type='button'
                  className='btn btn-primary m-5'
                  onClick={() => handleButtonClick()}
                >
                  Submit
                </button>
              </div>
            </form>
            {/* <span className='card-label fw-bold fs-3 mb-1'>Recent Orders</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 orders</span> */}
          </h3>

          <div className='card-toolbar'>
            <button
              type='button'
              className='btn btn-primary m-5'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTIcon iconName='category' className='fs-2' />
              Filter
            </button>
            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Actions</div>
              </div>

              <div className='separator mb-3 opacity-75'></div>

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3'>
                  New Ticket
                </a>
              </div>

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3'>
                  New Customer
                </a>
              </div>

              <div
                className='menu-item px-3'
                data-kt-menu-trigger='hover'
                data-kt-menu-placement='right-start'
                data-kt-menu-flip='left-start, top'
              >
                <a href='#' className='menu-link px-3'>
                  <span className='menu-title'>New Group</span>
                  <span className='menu-arrow'></span>
                </a>

                <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3'>
                      Admin Group
                    </a>
                  </div>
                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3'>
                      Staff Group
                    </a>
                  </div>

                  <div className='menu-item px-3'>
                    <a href='#' className='menu-link px-3'>
                      Member Group
                    </a>
                  </div>
                </div>
              </div>

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3'>
                  New Contact
                </a>
              </div>

              <div className='separator mt-3 opacity-75'></div>

              <div className='menu-item px-3'>
                <div className='menu-content px-3 py-3'>
                  <a className='btn btn-primary btn-sm px-4' href='#'>
                    Generate Reports
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='card-body p-3'>
          <div className='card-overflow'>
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
              <thead
                style={{
                  position: 'sticky',
                  top: 0,
                  backgroundColor: '',
                  fontWeight: 'bold',
                  color: 'black',
                  margin: '0 auto',
                  opacity: 1,
                  zIndex: 5,
                }}
              >
                <tr className='fw-bold text-blod '>
                  <th className='min-w-20px'>Sl No</th>
                  <th className='min-w-10px'>IP Case No</th>
                  <th className='min-w-30px'>Patient Name</th>
                  <th className='min-w-20px'>Gender</th>
                  <th className='min-w-20px'>Bill Type</th>
                  <th className='min-w-10px'>Registration</th>
                  <th className='min-w-10px'>Actions</th>
                </tr>
              </thead>
              {isLoading ? (
                <div className='loading'>Loading...</div>
              ) : (
                <tbody>
                  {InpatientList.map((inpatient, index) => (
                    <tr key={inpatient.id}>
                      <td>
                        <a
                          href='#'
                          className='text-dark items-center fw-bold text-hover-primary fs-6'
                        >
                          {index + 1}
                        </a>
                      </td>
                      <Link to='/crafted/inpatient/InpatientDetails'>
                        {' '}
                        <td>
                          <a
                            href='#'
                            className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                          >
                            {inpatient.ipCaseNumber}
                          </a>
                          {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Code: PH
                      </span> */}
                        </td>{' '}
                      </Link>

                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {inpatient.name}
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Age:{inpatient.age}
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {inpatient.gender}
                        </a>
                        {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Web, UI/UX Design
                      </span> */}
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {inpatient.billedType}
                        </a>
                        {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Web, UI/UX Design
                      </span> */}
                      </td>
                      <td className='text-dark fw-bold text-hover-primary fs-6'>
                        {inpatient.createdDateTime}
                      </td>
                      {/* <td>
                      <span className='badge badge-light-success'>Approved</span>
                    </td> */}
                      <td className='text-start'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='profile-user' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='pencil' className='fs-3' />
                          {/* <button className='btn btn-icon btn-bg-primary  p-6'>hii</button> */}
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        >
                          <KTIcon iconName='trash' className='fs-3' />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export {InPatientList}
