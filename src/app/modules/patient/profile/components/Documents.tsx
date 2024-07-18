/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import {KTIcon} from '../../../../_metronic/helpers'
// import {Card4} from '../../../../_metronic/partials/content/cards/Card4'

export function Documents() {
  return (
    <div
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      <div className='d-flex flex-row-fluid flex-Visit bg-body rounded card '>
        <div className='card mb-5 mb-xl-10'>
          <div
            className='card-header border-0 cursor-pointer'
            role='button'
            // data-bs-toggle='collapse'
            data-bs-target='#kt_account_profile_details'
            // aria-expanded='true'
            aria-controls='kt_account_profile_details'
          >
            <div className='card-title m-0'>
              <h3 className='fw-bolder m-0'>Lab Details of Selected Lab</h3>
            </div>
          </div>

          <div id='kt_account_profile_details' className='collapse show'>
            <form className='form'>
              <div className='card-body border-top p-9'></div>
            </form>
          </div>
        </div>
      </div>
      {/* begin::Aside*/}
      <div className='card d-flex justify-content-center justify-content-xl-start flex-labreport flex-row-auto w-100 w-xl-300px w-xxl-500px me-1'>
        {/* begin::Wrapper*/}
        <div className='d-flex flex-row-fluid flex-visitcenter bg-body rounded card '>
          <div className='card mb-5 mb-xl-10'>
            <div
              className='card-header border-bottom cursor-pointer'
              role='button'
              // data-bs-toggle='collapse'
              data-bs-target='#kt_account_profile_details'
              // aria-expanded='true'
              aria-controls='kt_account_profile_details'
            >
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>LabReport</h3>
              </div>
            </div>
            <div className='fw-bolder m-2'>
              <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 '>
                <thead>
                  <tr className='fw-bold text-muted'>
                    <th className='min-w-50px text-left border border-primary text-dark p-2 '>
                      Diag Plan
                    </th>
                  </tr>
                </thead>
              </table>
            </div>


          </div>
        </div>
        {/* end::Wrapper*/}
      </div>
    </div>
  )
}
