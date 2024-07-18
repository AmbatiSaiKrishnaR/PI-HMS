import React from 'react'


export function BirthDetails() {
  return (
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
          <h3 className='fw-bolder m-0'>Birth Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Baby Name :</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>
                      Date Of Birth :{' '}
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Sex :</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Father Name : </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Father Occupation :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row '>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                      Father Qualification :
                    </label>

                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Mother Name :</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Mother Occupation :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Mother Qualification :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                      Age at time of Marriage :{' '}
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Age at Delivery :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary '
                    />
                  </div>
                  <div className='col-lg-2 fv-row '>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                      Order of giving Birth :
                    </label>

                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Birth Weight : </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Birth Time :</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Kind of Delivery :{' '}
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                      Pregnancy Period :{' '}
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Native Place :</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary '
                    />
                  </div>
                  <div className='col-lg-2 fv-row '>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                      IPCase Number :
                    </label>

                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-8 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Kind of Medication :  </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
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
          <button type='button' className='btn btn-primary m-5'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
