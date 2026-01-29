import React from 'react';
import { useLoaderData } from 'react-router';

const PaymentHistory = () => {
    const payments = useLoaderData();

    return (
        <div className='text-black my-10 px-5'>
            <h1 className='text-center text-teal-600 font-bold text-4xl my-4'>Payment History</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-200 rounded-lg">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                Parcel Id
                            </th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                Transaction
                            </th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                Paid At
                            </th>
                            <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                                Amount
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y">
                        {
                            payments.map((payment) => (
                                <tr class="hover:bg-gray-50">
                                    <td class="px-4 py-3 text-sm text-gray-600">{payment.parcelId}</td>
                                    <td class="px-4 py-3 text-sm text-gray-600">{payment.transactionId}</td>
                                    <td class="px-4 py-3 text-sm text-gray-600">{payment.createdAt}</td>
                                    <td class="px-4 py-3 text-sm font-medium">৳{payment.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;