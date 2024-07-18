/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import {Card3} from '../../../../_metronic/partials/content/cards/Card3'

export function Connections() {
  return (
    <div
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      <div className='d-flex flex-row-fluid flex-Visit bg-body rounded card '>
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
              <h3 className='fw-bolder m-0 text-dark'>Bill Items</h3>
            </div>
          </div>

          <div className='fw-bolder m-1'>
            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 '>
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-50px text-center border  border-primary text-dark '>
                    ItemName{' '}
                  </th>
                  <th className='min-w-140px text-center border  border-primary text-dark'>
                    ItemQty{' '}
                  </th>
                  <th className='min-w-120px text-center border  border-primary text-dark'>
                    ItemUnitPrice{' '}
                  </th>
                  <th className='min-w-120px text-center border  border-primary text-dark'>
                    ItemTotalPrice{' '}
                  </th>
                </tr>
              </thead>
              <tbody className='flex-billing '>&nbsp;</tbody>
            </table>
          </div>
          <div className='d-flex justify-content-end '>
            <button type='button' className='btn btn-primary m-5 '>
              print
            </button>
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
                <h3 className='fw-bolder m-0'>Bill List</h3>
              </div>
            </div>
            <div className='fw-bolder m-1'>
              <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 '>
                <thead>
                  <tr className='fw-bold text-muted'>
                    <th className='min-w-50px text-center border border-primary text-dark '>
                      OP BILLS
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='fw-bolder  border border-primary card-bill m-1'></div>
            <div className='fw-bolder m-1 mt-6 '>
              <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 '>
                <thead>
                  <tr className='fw-bold text-muted'>
                    <th className='min-w-50px text-center border border-primary text-dark'>
                      IP BILLS
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className='fw-bolder  border border-primary card-bill m-1 '></div>
          </div>
        </div>
        {/* end::Wrapper*/}
      </div>
    </div>
  )
}
