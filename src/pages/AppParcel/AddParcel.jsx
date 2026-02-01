import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddParcel = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const axiosSEcure = useAxiosSecure();

  const same = (formData) => {

    const parcelData = {
      ...formData,
    }
    axiosSEcure.post('/parcels', parcelData)
      .then(res => {

        if (res.data.insertedId) {
          Swal.fire({ position: 'center', icon: 'success', title: 'Parcel added successfully' })
        }
        else {
          Swal.fire({ position: 'center', icon: 'error', title: 'Error occurred' })
        }
      })
  }
  return (
    <div className="bg-white text-black p-4 md:p-20 m-2 md:m-10 rounded-xl">
      <h1 className="text-green-950 font-bold text-3xl mb-5">
        Add Parcel
      </h1>

      <hr className="my-5" />

      {/* Parcel Details */}
      <h2 className="text-black font-semibold text-2xl mb-4">
        Enter your parcel details
      </h2>

      <form onSubmit={handleSubmit(same)}>
        {/* top inputs */}
        <div className="flex flex-col  md:flex-row gap-4 mb-6">
          <div className="flex flex-col w-full">
            <label className="mb-2 text-gray-700 font-semibold">
              Parcel Name
            </label>
            <input
              type="text"
              placeholder="Name of the product"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none placeholder-gray-400 focus:ring-1 focus:ring-gray-500"
              {...register('parcelName', { required: true })}
            />
            {errors.parcelName && <p className='text-red-700'>Parcel Name is required</p>}
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2 text-gray-700 font-semibold">
              Parcel Weight (kg)
            </label>
            <input
              type="number"
              placeholder="Parcel weight in KG"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none placeholder-gray-400 focus:ring-1 focus:ring-gray-500"
              {...register('weight', { required: true })}
            />
            {errors.weight && <p className='text-red-600'>Weight is required</p>}
          </div>
        </div>

        <hr className="my-8 border-2 border-gray-300" />

        {/* Sender & Receiver */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sender Details */}
          <div className="w-full">
            <p className="mb-4 text-xl font-bold text-black">
              Sender Details
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Name of the sender"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('senderName', { required: true })}
                />
                {errors.senderName && <p className='text-red-600'>Name is required</p>}
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Pickup Warehouse
                </label>
                <input
                  type="text"
                  placeholder="Warehouse name"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('pickupWarehouse', { required: true })}
                />
                {errors.pickupWarehouse && <p className='text-red-600'>Warehouse name is must</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Sender address"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('senderAddress', { required: true })}
                />
                {errors.senderAddress && <p className='text-red-400'>Address is must</p>}
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Contact Number
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('senderNumber', { required: true })}

                />
                {errors.senderNumber && <p className='text-red-500'>Number is must</p>}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-700 font-semibold">
                Sender Region
              </label>
              <select className="w-full text-neutral-950  placeholder-gray-400 border border-gray-300  rounded-lg p-2 " {...register('senderRegion')}>
                <option value="" disabled>
                  Select your region
                </option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Chattogram</option>
                <option>Rangpur</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
              </select>
            </div>
          </div>

          {/* Receiver Details */}
          <div className="w-full">
            <p className="mb-4 text-xl font-bold text-black">
              Receiver Details
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Name of the receiver"
                  className="w-full border border-gray-300 rounded-lg p-2  placeholder-gray-400"
                  {...register('receiverName', { required: true })}
                />
                {errors.receiverName && <p className='text-red-600'>Receiver Name is must</p>}
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Delivery Warehouse
                </label>
                <input
                  type="text"
                  placeholder="Warehouse name"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('destinationWarehouse', { required: true })}
                />
                {errors.destinationWarehouse && <p className='text-red-600' >Destination is must</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Receiver address"
                  className="w-full placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('receiverAddress', { required: true })}
                />
                {errors.receiverAddress && <p className='text-red-600'>Receiver Address is must</p>}
              </div>

              <div className="flex flex-col w-full">
                <label className="mb-2 text-gray-700 font-semibold">
                  Contact Number
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="w-full  placeholder-gray-400 border border-gray-300 rounded-lg p-2"
                  {...register('receiverNumber', { required: true })}
                />
                {errors.receiverNumber && <p className='text-red-600'>Number is must</p>}
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="mb-2 text-gray-700 font-semibold">
                Receiver Region
              </label>
              <select className="w-full text-neutral-950 placeholder-gray-400 border border-gray-300 rounded-lg p-2" {...register('receiverRegion')}>
                <option disabled>
                  Select your region
                </option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Chattogram</option>
                <option>Rangpur</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
              </select>
            </div>
          </div>
        </div>
        <button type='submit' className="btn my-3 w-full">Proceed to confirm</button>
      </form>
    </div>
  );
};

export default AddParcel;
