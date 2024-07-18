import React from 'react'


export function ScanningReport() {
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
              <h3 className='fw-bolder m-0'>Scanning Details of Selected Scan</h3>
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
                <h3 className='fw-bolder m-0'>Scanning List</h3>
              </div>
            </div>

          </div>
        </div>
        {/* end::Wrapper*/}
      </div>
    </div>
  )
}
