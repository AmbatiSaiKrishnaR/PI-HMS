/* eslint-disable jsx-a11y/anchor-is-valid */
import {KTIcon} from '../../helpers'
import axios from 'axios'
import React, {useEffect, useState} from 'react'

interface StaffData {
  id: number
  staffNumber: number
  displayName: string
  createdDateTime: string
  phonePrimary: string
}

type Props = {
  className: string
}

const StaffDtails: React.FC<Props> = ({className}) => {
  const [loading, setLoading] = useState(true);
  const [staffList, setStaffList] = useState<StaffData[]>([])
  const [filterOptions, setFilterOptions] = useState({
    m_Limit: '100',
    m_OrderBy: 'id',
    m_Type: 1,
    m_Duration: 'All',
  })
  //search inputs
  const [searchfilterOptions, setsearchFilterOptions] = useState({
    m_Limit: '100',
    m_OrderBy: 'id',
    m_Type: 3,
    m_Search: '',
  })

  useEffect(() => {
    fetchStaffList()
  }, [filterOptions])

  const fetchStaffList = async () => {
    try {
      setLoading(true); // Set loading to true when fetching starts
      const response = await axios.post('http://ganga.pihms.co.in/Staff/get_StaffList', {
        m_FilterOptions: filterOptions,
      });

      const staffData: StaffData[] = response.data.ml_StaffList;
      setStaffList(staffData);
    } catch (error) {
    } finally {
      setLoading(false); // Set loading to false when fetching completes (either success or error)
    }
  }

  useEffect(() => {
    fetchStaff()
  }, [searchfilterOptions])

  const fetchStaff = async () => {
    try {
      const response = await axios.post('http://ganga.pihms.co.in/Staff/get_StaffList', {
        m_FilterOptions: searchfilterOptions,
      })

      const staffData: StaffData[] = response.data.ml_StaffList
      setStaffList(staffData)
    } catch (error) {}
  }

  const handleSearch = async (searchValue: string) => {
    setsearchFilterOptions({
      ...searchfilterOptions,
      m_Search: searchValue,
    })
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        <span className='card-label fw-bold fs-6 mb-1'>
              <select
                className='btn btn-primary'
                onChange={(e) =>
                  setFilterOptions({
                    ...filterOptions,
                    m_Duration: e.target.value,
                  })
                }
                value={filterOptions.m_Duration}
              >
                <option value='All'>Recent 100</option>
                <option value='Current Day'>Current Day</option>
                <option value='Current Week'>Current Week</option>
                <option value='Current Month'>Current Month</option>
                <option value='All'>Recent 500</option>
              </select>
              <button type='button' className='btn btn-primary'  style={{ marginLeft: '20px',padding:'9px' }}>
              {/* <button type='button' className='btn btn-primary' onClick={openAddUserModal}> */}
          <KTIcon iconName='plus' className='fs-2' />
          New Patient
        </button>
            </span>
        </h3>
        <div className='card-toolbar '>
          <div className='dropdown d-flex '>
            <div className='d-flex align-items-center position-relative my-1'>
              <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
              <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control form-control-solid w-250px ps-14'
                placeholder='Search Staff'
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='card-body py-3'>
      {loading ? (
            <div className='loading-message'>
              <p>Loading patient details...</p>
            </div>
          ) : (
        <div className='table-responsive'>
          <div className='table-container'>
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-50px'>ID</th>
                  <th className='min-w-120px'>Staff Number</th>
                  <th className='min-w-120px'>Staff Name</th>
                  <th className='min-w-120px'>Registration</th>
                  <th className='min-w-120px'>Phone Primary</th>
                </tr>
              </thead>
           
              <tbody className='data-container'>
                {staffList.map((staff, index) => (
                  <tr key={index}>
                    <td className='min-w-50px'>{index + 1}</td>
                    <td className='min-w-150px'>{staff.staffNumber}</td>
                    <td className='min-w-150px'>{staff.displayName}</td>
                    <td className='min-w-150px'>{staff.createdDateTime}</td>
                    <td className='min-w-120px'>{staff.phonePrimary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          )}
      </div>
    </div>
  )
}

export {StaffDtails}