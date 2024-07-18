/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useRef, useState} from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'



export function Projects() {
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
              <h3 className='fw-bolder m-0'>Visit Details</h3>
            </div>
          </div>

          <div id='kt_account_profile_details' className='collapse show'>
            <form className='form'>
              <div className='card-body border-top p-9'>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Visit Type :</label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Reffered Doctor :</label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>
                    Reason For Visit :
                  </label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Observation :</label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Advice :</label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Medications :</label>

                  <div className='col-lg-10'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-2 col-form-label  fw-bold fs-4'>Select file :</label>

                  <div className='col-lg-6'>
                    <div className='row'>
                      <div className='col-lg-10 fv-row'>
                        <input
                          type='file'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className='card-header border-0 cursor-pointer'
            role='button'
            // data-bs-toggle='collapse'
            data-bs-target='#kt_account_profile_details'
            // aria-expanded='true'
            aria-controls='kt_account_profile_details'
          >
            <div className='card-title m-0'>
              <button type='button' className='btn btn-danger m-5'>
                Cancel
              </button>
            </div>
            <div className='card-title m-0'>
              {/* <h3 className='fw-bolder m-0'>Save</h3> */}
              <button type='button' className='btn btn-primary m-5'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* begin::Aside*/}
      <div className='card d-flex justify-content-center justify-content-xl-start flex-Visit flex-row-auto w-100 w-xl-300px w-xxl-500px me-1'>
        {/* begin::Wrapper*/}
        <div className='d-flex flex-row-fluid flex-visitcenter bg-body rounded card '>
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
                <h3 className='fw-bolder m-0'>Visit List</h3>
              </div>
            </div>

            <div id='kt_account_profile_details' className='collapse show'>
              <form className='form'>
                <div className='card-body border-top '>
                  <form>
                    <div className='d-flex align-items-center position-relative my-0'>
                      <button type='button' className='btn btn-primary p-3'>
                        <KTIcon iconName='plus' className='fs-2' />
                        New
                      </button>

                      <input
                        type='text'
                        data-kt-user-table-filter='search'
                        className='form-control form-control-solid w-300px ps-14 border-primary m-1 '
                        placeholder='Search '
                      />
                      <button type='button' className='btn btn-primary p-3'>
                        <KTIcon iconName='magnifier' className='fs-1  ms-2 ' />
                      </button>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end::Wrapper*/}
      </div>
    </div>
  )
}
