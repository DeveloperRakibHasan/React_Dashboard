import React from 'react'

function UserOrderList() {
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 col-span-2'>
        <table className='w-full'>
           <tr>
            <th>No</th>
            <th>Name</th>
            <th>Item</th>
            <th>Value</th>
            <th>Status</th>
           </tr>
           <tr>
            <td>001</td>
            <td>Rakib</td>
            <td>Apple</td>
            <td>$500</td>
            <td className='p-2 bg-green-200 rounded-md'>Complete</td>
           </tr>
           <tr>
            <td>011</td>
            <td>Shihab</td>
            <td>Banana</td>
            <td>$400</td>
            <td className='p-2 bg-blue-200 rounded-md'>Procecing..</td>
           </tr>
           <tr>
            <td>033</td>
            <td>Miner</td>
            <td>Mango</td>
            <td>$345</td>
            <td className='p-2 bg-red-100 rounded-md'>Canceled</td>
           </tr>
           <tr>
            <td>047</td>
            <td>Rana</td>
            <td>Orange</td>
            <td>$774</td>
            <td className='p-2 bg-green-200 rounded-md'>Complete</td>
           </tr>
           <tr>
            <td>115</td>
            <td>Rakib</td>
            <td>Apple</td>
            <td>$500</td>
            <td className='p-2 bg-yellow-100 rounded-md'>Panding...</td>
           </tr>
        </table>
    </div>
  )
}

export default UserOrderList