import React, {useState, useEffect} from 'react'
import {KTIcon} from '../../helpers'

import {Link, Navigate, useNavigate} from 'react-router-dom'


type Props = {
  className: string
}

type PatientData = {
  id: number
  patientNumber: string
  honorific: string
  displayName: string
  phonePrimary: string
  createdDateTime: string
  gender: string
  age: number
}

const PatientList: React.FC<Props> = ({className}) => {
  const [patientList, setPatientList] = useState<PatientData[]>([])

  const [patientlimit, setPatienLimit] = useState<string>('100')
  const [selectedOption, setSelectedOption] = useState('Filter')
  const [durtion, setDuration] = useState<string>('All')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [msearch, setmsearch] = useState<string>('')
  const navigate = useNavigate()

  const apiEndpoint = 'http://ganga.pihms.co.in/Patient/get_PatientList'

  useEffect(() => {
    const defaultPayload = {
      m_FilterOptions: {
        m_Type: 1,
        m_Limit: patientlimit,
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
        setPatientList(data.ml_Patient)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
  }, [patientlimit, durtion])

  const handlePatientSelection = (patientId:number) => {
    navigate(`/modules/patientlist/details/${patientId}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmsearch(e.target.value)
  }
  const handlerecent = (limit: string, durtion: string, value: string) => {
    setPatienLimit(limit)
    setDuration(durtion)
    setIsLoading(true)
    setSelectedOption(value)

    setmsearch(msearch)
  }

  const handleButtonClick = () => {
    setIsLoading(true)
    const defaultPayload = {
      m_FilterOptions: {
        m_Type: 4,
        m_Search: msearch,
        ml_SearchColumns: ['FirstName'],
        m_Limit: patientlimit,
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
        setPatientList(data.ml_Patient)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
    setmsearch('')
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <form>
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

        <div className='card-toolbar'>
        <button
        disabled={isLoading}
        type='button'
        className='btn btn-light-primary me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        <KTIcon iconName='filter' className='fs-2' />
       {selectedOption}
      </button>
          <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
            <button type='button' className='btn btn-primary'>
              <KTIcon iconName='plus' className='fs-2' />
              New Patient
            </button>
          </div>

          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Recent List</div>
            </div>

            <div className='separator mb-3 opacity-75'></div>

            <div
              className='menu-item px-3'
              onClick={() => handlerecent('5000', 'Current Day', 'Current Day')}
            >
              <a className='menu-link px-3'>Current Day</a>
            </div>
            <div
              className='menu-item px-3'
              onClick={() => handlerecent('10000', 'Current Week', 'Current Week')}
            >
              <a className='menu-link px-3'>Current Week</a>
            </div>

            <div
              className='menu-item px-3'
              onClick={() => handlerecent('10000', 'Current Month', 'Current Month ')}
            >
              <a className='menu-link px-3'>Current Month</a>
            </div>

            <div
              className='menu-item px-3'
              onClick={() => handlerecent('100', 'All', 'Recent 100')}
            >
              <a className='menu-link px-3'>Recent 100</a>
            </div>
            <div
              className='menu-item px-3'
              onClick={() => handlerecent('200', 'All', 'Recent 200')}
            >
              <a className='menu-link px-3'>Recent 200</a>
            </div>
            <div
              className='menu-item px-3'
              onClick={() => handlerecent('500', 'All', 'Recent 500')}
            >
              <a className='menu-link px-3'>Recent 500</a>
            </div>
            <div className='menu-item px-3' onClick={() => handlerecent('1000', 'All', 'All')}>
              <a className='menu-link px-3'>Recent 1000</a>
            </div>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-bodylist py-3'>
        <div className='card-overflow'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-200 align-middle gs-0 gy-3'>
            <thead  style={{
                  position: 'sticky',
                  top: 0,
                  backgroundColor: '',
                  fontWeight: 'bold',
                  color: 'black',
                  margin: '0 auto',
                  opacity: 1,
                  zIndex: 5,
                }}>
              <tr className='fw-bold text-muted'>
                <th className='min-w-10px'></th>
                <th className='min-w-50px'>Sl No</th>
                <th className='min-w-140px'>Patient No</th>
                <th className='min-w-500px'>Patient Name</th>
                <th className='min-w-200px'>Phone No</th>
                <th className='min-w-200px'>Registration</th>
                <th className='min-w-150px text-start'>Action Buttons</th>
              </tr>
            </thead>
            {isLoading ? (
              <div className='loader'>Loading...</div>
            ) : (
              <tbody>
                {patientList.map((patient, index) => (
                  <tr key={patient.id}>
                    <td></td>
                    <td
                      className='text-dark fw-bold text-hover-primary fs-6'
                      onClick={() => handlePatientSelection(patient.id)}
                    >
                      {index + 1}
                    </td>
                    <td
                      className='text-dark fw-bold text-hover-primary fs-6'
                      onClick={() => handlePatientSelection(patient.id)}
                    >
                      {patient.patientNumber}
                    </td>
                    <td
                      className='text-dark fw-bold text-hover-primary fs-6'
                      onClick={() => handlePatientSelection(patient.id)}
                    >
                      {patient.honorific} {patient.displayName}
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        {' '}
                        {patient.gender} {patient.age}{' '}
                      </span>
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {patient.phonePrimary}
                      <span></span>
                    </td>

                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {patient.createdDateTime}
                    </td>
                    <td className='text-start '>
                      <div className='d-flex align-items-center position-relative my-0'>
                        <Link to='#'>
                          <button
                            disabled={isLoading}
                            type='button'
                            className='btn btn-light-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            <KTIcon iconName='briefcase' className='fs-2' />
                            Package
                          </button>
                        </Link>
                        <Link to='#'>
                          <button
                            disabled={isLoading}
                            type='button'
                            className='btn btn-light-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            <KTIcon iconName='menu' className='fs-2' />
                            OP BILL
                          </button>
                        </Link>
                        <Link to='#'>
                          <button
                            disabled={isLoading}
                            type='button'
                            className='btn btn-light-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            <KTIcon iconName='notepad-bookmark' className='fs-2' />
                            IP Case
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {/* end::Table */}
        </div>

        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PatientList}
