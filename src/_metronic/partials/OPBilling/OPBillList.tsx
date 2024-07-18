/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { KTIcon } from '../../helpers'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { number } from 'yup'


type Props = {
  className: string
}

type OPBillData = {
  id: number
  billNumber: number
  patientNumber: string
  patientName: string
  billDateTime: number
  taxComment: string
  payableAmount: number
  balanceAmount: number
  receivedAmount: number
}

const OPBillList: React.FC<Props> = ({ className }) => {
  const [opBillList, setOPBillList] = useState<OPBillData[]>([])
  const [opBilllimit, setOPBillLimit] = useState<string>('100')
  const [selectedOption, setSelectedOption] = useState('Filter')
  const [selectOption, setSelectOption] = useState('BillNumber')
  const [durtion, setDuration] = useState<string>('All')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [msearch, setmsearch] = useState<string>('')
  const navigate = useNavigate()
  

  const apiEndpoint = 'http://ganga.pihms.co.in/OPBilling/get_OPBillList'

  useEffect(() => {
    const defaultPayload = {
      m_Filter: {
        m_Type: 1,
        m_Limit: opBilllimit,
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
        setOPBillList(data.ml_OPBillList)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
  }, [opBilllimit, durtion])

  const handleOPBillSelection = (path: string) => {
    navigate(path)
  }
  console.log('response');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmsearch(e.target.value)
  }
  const handlerecent = (limit: string, durtion: string, value: string) => {
    setOPBillLimit(limit)
    setDuration(durtion)
    setIsLoading(true)
    setSelectedOption(value)
    setmsearch(msearch)
  }
  const handleSerch = (value:string)=>{
    
    setSelectOption(value)
  }

  const handleButtonClick = () => {
    setIsLoading(true)
    const defaultPayload = {
      m_FilterOptions: {
        m_Type: 4,
        m_Search: msearch,
        ml_SearchColumns: [selectOption],
        m_Limit: opBilllimit,
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
        setOPBillList(data.ml_Patient)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error sending POST request:', error)
      })
   
  }
  console.log(selectOption)
 

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <form>
          <div className='d-flex align-items-center position-relative my-1'>
            <div className='card-toolbar'>
              <button
                disabled={isLoading}
                type='button'
                className='btn btn-light-primary me-3'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-start'
              >
                {selectOption}
              </button>
              <div
                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
                data-kt-menu='true'>
                <div className='separator mb-3 opacity-75'></div>
                <div className='menu-item px-3' onClick={() => handleSerch('billNumber')}>
                  <a className='menu-link px-3'>BillNumber</a>
                </div>
                <div className='menu-item px-3' onClick={() => handleSerch('patientName')}>
                  <a className='menu-link px-3'>PatientName</a>
                </div>
              </div>
            </div>

            <div className="input-icon-container">
              <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-3 mt-3' />

              <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control form-control-solid w-250px ps-14'
                placeholder='Search user'
                value={msearch}
                onChange={handleInputChange}
              />
            </div>
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
            <thead style={{
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
                <th className='min-w-50px'>Sl No</th>
                <th className='min-w-50px'>Bill No</th>
                <th className='min-w-50px'>Patient No</th>
                <th className='min-w-50px'>Patient Name</th>
                <th className='min-w-50px'>Bill Date</th>
                <th className='min-w-50px'>Payment Mode</th>
                <th className='min-w-50px'>Payable</th>
                <th className='min-w-50px'>Balance</th>
                <th className='min-w-50px'>Received</th>
                <th className='min-w-50px'>Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <div className='loader'>Loading...</div>
            ) : (
              <tbody>
                {opBillList.map((OPBill, index) => (
                  <tr key={OPBill.id}>
                    <td
                      className='text-dark fw-bold text-hover-primary fs-6'
                    >
                      {index + 1}
                    </td>
                    <td
                      className='text-dark fw-bold text-hover-primary fs-6'
                      onClick={() => handleOPBillSelection(`/modules/opbilldetails/opbillprofileheader/${OPBill.id}`)}
                    >
                      {OPBill.billNumber}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.patientNumber}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.patientName}
                    </td>

                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.billDateTime}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.taxComment}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.payableAmount}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.balanceAmount}
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                      {OPBill.receivedAmount}
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
                            Label
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

export { OPBillList }
