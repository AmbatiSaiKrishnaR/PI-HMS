
import React, { useState, useEffect } from 'react';
import { KTIcon, toAbsoluteUrl } from '../../../../_metronic/helpers';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Modal from './Modal';
import { useListView } from '../../apps/user-management/users-list/core/ListViewProvider';



type OPBillDetailData = {
  id: number
  patientName: string
  patientID: number
  patientType: string
  itemName: string
  itemUnitPrice: number
  itemQty: number
  itemTotalPrice: number
  receivedAmount: number
  balanceAmount: number
  billedItemTotalAmount: number
  discountAmount: number
  payableAmount: number

};

const OPBillProfileHeader: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const apiEndpoint = 'http://ganga.pihms.co.in/OPBilling/get_OPBillDetail';
  const [opBillDetail, setOpBillDetail] = useState<OPBillDetailData | null>(null);
  const [opBill, setOPBill] = useState<any[]>([]);
  const [opBillItems, setOpBillItems] = useState<any[]>([]);
  const [opBillPayment, setOpBillPayment] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');
  const naviagte = useNavigate()
  const handleNavigation = (path: string, patientID: number) => {
    naviagte(`/modules/OPBillList/${path}/${patientID}`)
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const defaultPayload = {
      m_BillID: id,
    };

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(defaultPayload),
    })
      .then((response) => {
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('POST request response:', data);
        setOpBillDetail(data.m_OPBill);
        setOpBillItems(data.ml_OPBillItem);
        setOpBillPayment(data.ml_OPBillPayment)
        setIsLoading(false);
        // Handle the response data if needed
      })
      .catch((error) => {
        console.error('Error sending POST request:', error);
      });
  }, [id]);
  console.log(opBillDetail)
  console.log(id)

  return (


    <div className="card mb-5 mb-xl-10">
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          {/* <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metronic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div> */}
        </div>

        <div className='flex-grow-1'>
          <div>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {opBillDetail && opBillDetail.patientName}
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                    onClick={() => {
                      if (opBillDetail && opBillDetail.patientID) {
                        handleNavigation('OPBillProfileHeader', opBillDetail.patientID);
                      }
                    }}  
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {opBillDetail && opBillDetail.patientID}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    {opBillDetail && opBillDetail.patientType}
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    max@kt.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card mb-5 mb-xl-10'>
            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex align-items-center w-300px w-sm-900px flex-column mt-3'>
                <div className='d-flex my-2'>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={openAddUserModal}
                  >
                    <KTIcon iconName='edit' className='fs-2' />
                    Patient
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={openModal}
                  >
                    <KTIcon iconName='plus' className='fs-2' />
                    Balance
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={openModal}
                  >
                    <KTIcon iconName='discount' className='fs-2' />
                    Discount
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={() => openModal()}
                  >
                    <KTIcon iconName='plus' className='fs-2' />
                    Split
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={() => openModal()}
                  >
                    <KTIcon iconName='plus' className='fs-2' />
                    Payment
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary me-3'
                    onClick={() => openModal()}
                  >
                    <KTIcon iconName='plus' className='fs-2' />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='card mb-5 mb-xl-10'>
            <div className='card-bodyprofile py-6'>
              <div className='card-overflow-OPBillList'>
                {/* begin::Table */}
                <table className='table table-row-bordered table-row-gray-200 align-middle gs-0 gy-3'>
                  <thead >
                    <tr className='fw-bold text-muted'>
                      <th className='min-w-50px'>Sl No</th>
                      <th className='min-w-140px'>Bill item Particulars</th>
                      <th className='min-w-120px'>Unit Price</th>
                      <th className='min-w-120px'>Quantity</th>
                      <th className='min-w-120px'>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opBillItems.map((billItem, index) => (
                      <tr key={billItem.id}>
                        <td className='text-dark fw-bold text-hover-primary fs-6'>{index + 1}</td>
                        <td className='text-dark fw-bold text-hover-primary fs-6'>{billItem.itemName}</td>
                        <td className='text-dark fw-bold text-hover-primary fs-6'>{billItem.itemUnitPrice}</td>
                        <td className='text-dark fw-bold text-hover-primary fs-6'>{billItem.itemQty}</td>
                        <td className='text-dark fw-bold text-hover-primary fs-6'>{billItem.itemTotalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className='card mb-5 mb-xl-10'>
          <div className='card-buttons'>
            <div className='card-grid-container'>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='bill' className='fs-2' />
                Print Bill
              </button>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='package' className='fs-2' />
                Convert To Package
              </button>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='bill' className='fs-2' />
                Print Bill
              </button>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='package' className='fs-2' />
                Convert To Package
              </button>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='bill' className='fs-2' />
                Print Bill
              </button>
              <button type='button' className='btn btn-primary me-3 w-250px' >
                <KTIcon iconName='package' className='fs-2' />
                Convert To Package
              </button>
            </div>
            <div className='.card-grid-container'>
              <table>
                <tbody>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Amount :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail.payableAmount}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Paid :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail.receivedAmount}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Balance :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail.balanceAmount}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='.card-grid-container'>
              <table>
                <tbody>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Sub Total :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail?.billedItemTotalAmount} </span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Discount :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail?.discountAmount}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-dark fw-bold text-hover-primary fs-6'> <b>Total :</b> </td>
                    <td>
                      <span>{opBillDetail && opBillDetail?.payableAmount}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

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
                  <th className='min-w-50px'>SL</th>
                  <th className='min-w-140px'>Payment Mode</th>
                  <th className='min-w-120px'>Paid Date Time</th>
                  <th className='min-w-120px'>Amount</th>
                  <th className='min-w-120px'>Action</th>
                </tr>
              </thead>
              <tbody>
                {opBillPayment.map((billPayment, index) => (
                  <tr key={billPayment.id}>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{index + 1}</td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{billPayment.paymentMode}</td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{billPayment.createdDateTime}</td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{billPayment.amount}</td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            {/* end::Table */}
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          {/* end::Table container */}
        </div>

      </div>

    </div>
  );
};

export { OPBillProfileHeader };
