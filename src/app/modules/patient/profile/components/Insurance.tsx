/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'

// import {Card2} from '../../../../_metronic/partials/content/cards/Card2'
// import {IconUserModel} from '../ProfileModels'

export function Insurance() {
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
              <h3 className='fw-bolder m-0'>Insurance Details of Selected Insurance</h3>
            </div>
          </div>

          <div id='kt_account_profile_details' className='collapse show'>
            <form className='form'>
              <div className='card-body border-top p-9'>
                <div className='row mb-6'>
                  <div className='col-lg-14'>
                    <div className='row'>
                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Policy Number:
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Plan Number :
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
                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Effective Date :
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Expiry Date :
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
                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Insurance Name
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-6 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Insurer Name In Policy :
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
                      <div className='col-lg-14 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>Address :</label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mb-6'>
                  <div className='col-lg-14'>
                    <div className='row'>
                      <div className='col-lg-4 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>City :</label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-3 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>State :</label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                        />
                      </div>
                      <div className='col-lg-3 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>Country :</label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                        />
                      </div>
                      <div className='col-lg-2 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Postal Code :
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
                      <div className='col-lg-3 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation Name :
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-9 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation Address
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
                      <div className='col-lg-4 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation City :
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid border-primary'
                        />
                      </div>

                      <div className='col-lg-3 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation State :
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                        />
                      </div>
                      <div className='col-lg-2 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation Country :
                        </label>
                        <input
                          type='text'
                          className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                        />
                      </div>
                      <div className='col-lg-3 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Relation Phone :
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
                      <div className='col-lg-14 fv-row'>
                        <label className='col-lg-10 col-form-label  fw-bold fs-6'>
                          Special Notes :
                        </label>
                        <input
                          type='text'
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
                <h3 className='fw-bolder m-0'>Insurance List</h3>
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
                        className='form-control form-control-solid w-300px ps-14 border-primary m-1'
                        placeholder='Search '
                      />
                      <button type='button' className='btn btn-primary p-3'>
                        <KTIcon iconName='magnifier' className='fs-1  ms-2 ' />
                      </button>
                    </div>
                  </form>
                  <div className='fw-bolder m-1 mt-6 '>
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 '>
                      <thead>
                        <tr className='fw-bold text-muted'>
                          <th className='min-w-50px text-center border border-primary text-dark'>
                          INSURANCE NAME
                          </th>
                          <th className='min-w-50px text-center border border-primary text-dark'>
                          Name In Policy
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
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

// const users1: Array<IconUserModel> = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users2 = [
//   {name: 'Alan Warden', initials: 'A', color: 'warning'},
//   {name: 'Brian Cox', avatar: '/media/avatars/300-5.jpg'},
// ]

// const users3 = [
//   {name: 'Mad Masy', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Cris Willson', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Mike Garcie', initials: 'M', color: 'info'},
// ]

// const users4 = [
//   {name: 'Nich Warden', initials: 'N', color: 'warning'},
//   {name: 'Rob Otto', initials: 'R', color: 'success'},
// ]

// const users5 = [
//   {name: 'Francis Mitcham', avatar: '/media/avatars/300-20.jpg'},
//   {name: 'Michelle Swanston', avatar: '/media/avatars/300-7.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users6 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users7 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'success'},
// ]

// const users8 = [
//   {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
//   {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
//   {name: 'Susan Redwood', initials: 'S', color: 'primary'},
// ]

// const users9 = [
//   {name: 'Meloday Macy', avatar: '/media/avatars/300-2.jpg'},
//   {name: 'Rabbin Watterman', initials: 'S', color: 'danger'},
// ]
