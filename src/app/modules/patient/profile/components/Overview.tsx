import React, {useEffect, useState} from 'react'

export function Overview() {
  const [patientData, setPatientData] = useState<any>(null)


  useEffect(() => {
    // Function to fetch patient data from the API
    const fetchPatientData = async () => {
      try {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            m_PatientID: 12,
            // Add other properties from your request body here
          }),
        }

        const response = await fetch(
          'http://ganga.pihms.co.in/Patient/get_PatientDetail',
          requestOptions
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setPatientData(data.m_Patient)
      } catch (error) {
        console.error('Error fetching patient data:', error)
      }
    }

    fetchPatientData()
  }, [])

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
          <h3 className='fw-bolder m-0'>Patient Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Salutation</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''> {patientData?.honorific || ''}</option>
                      <option value=''>Mr.</option>
                      <option value='AF'>Mrs.</option>
                      <option value='AX'>Ms.</option>
                      <option value='AL'>Baby of</option>
                      <option value='DZ'>Master</option>
                      <option value='AS'>Dr.</option>
                    </select>
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>First Name</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.displayName || ''}
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Last Name</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid border-primary'
                      value={patientData?.lastName || ''}
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Gender</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.gender || ''}</option>
                      <option value=''>Male</option>
                      <option value='AF'>Female</option>
                      <option value='AX'>Others</option>
                    </select>
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Age</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.age || ''}
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Age Unit</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.ageUnit || ''}</option>
                      <option value=''>Years</option>
                      <option value='AF'>Months</option>
                      <option value='AX'>Days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-14'>
                <div className='row'>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Marital Status</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.maritalStatus || ''}</option>
                      <option value=''>Divorced</option>
                      <option value='AF'>Married</option>
                      <option value='AX'>Unmarried</option>
                    </select>
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Religion</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.religion || ''}</option>
                      <option value=''>Hindu</option>
                      <option value='AF'>Muslim</option>
                      <option value='AX'>Cristian</option>
                      <option value='AL'>Others</option>
                    </select>
                  </div>
                  <div className='col-lg-4 fv-row '>
                    <label className='col-lg-10 col-form-label  fw-bold fs-6'>Date Of Birth</label>

                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.dateOfBirth || ''}
                    />
                  </div>

                  <div className='col-lg-2 fv-row '>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Occupation :</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.occupation || ''} </option>
                      <option value=''>Former</option>
                      <option value='AF'>Engineer</option>
                      <option value='AX'>Doctor</option>
                      <option value='AL'>Teacher</option>
                      <option value='AX'>Professor</option>
                      <option value='AL'>Business</option>
                      <option value='AL'>Others</option>
                    </select>
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>
                      Monthly Income :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.incomeRange || ''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mb-6'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-8 fv-row'>
                    <label className='col-lg-2 col-form-label  fw-bold fs-6'>Address</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.address || ''}
                    />
                  </div>
                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>City</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.city || ''}
                    />
                  </div>

                  <div className='col-lg-2 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>Postal Code</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.postalCode || ''}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Mobile </label>
                    <input
                      type='tel'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.phonePrimary || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Phone </label>
                    <input
                      type='tel'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.phoneSecondary || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Email </label>
                    <input
                      type='email'
                      className='form-control form-control-lg form-control-solid border-primary'
                      value={patientData?.email || ''}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Emergency Contact Name
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.emergencyContactName || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Emergency Contact Phone
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.emergencyContactPhone || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Emergency Contact Email
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid border-primary'
                      value={patientData?.emergencyContactEmail || ''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row mb-6'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>City</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.city || ''}</option>
                      <option value=''>Banglore</option>
                      <option value='AF'>Mysore</option>
                      <option value='AX'>Thumkur</option>
                      <option value='AL'>Hubli</option>
                      <option value='AX'>Manglore</option>
                    </select>
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>State</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.state || ''}</option>
                      <option value=''>Karnataka</option>
                      <option value='AF'>Tamilnamdu</option>
                      <option value='AX'>AndraPradesh</option>
                      <option value='AL'>Kerala</option>
                      <option value='AL'>Maharastra</option>
                    </select>
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-4 col-form-label  fw-bold fs-6'>Country</label>
                    <select className='form-select form-select-solid form-select-lg fw-bold border-primary'>
                      <option value=''>{patientData?.country || ''}</option>
                      <option value=''>India</option>
                      <option value='AF'>Srilanka</option>
                      <option value='AX'>Nepal</option>
                      <option value='AL'>Bangladesh</option>
                      <option value='AL'>Buthan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='row mb-6'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-8 col-form-label  fw-bold fs-6'>
                      Emg.Contact Relationship :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.emergencyContactRelationship || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>
                      Referring Doctor :
                    </label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 border-primary'
                      value={patientData?.referenceDoctor || ''}
                    />
                  </div>

                  <div className='col-lg-4 fv-row'>
                    <label className='col-lg-6 col-form-label  fw-bold fs-6'>Family Doctor:</label>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid border-primary'
                      value={patientData?.familyDoctor || ''}
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
