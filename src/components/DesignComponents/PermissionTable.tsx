'use client'
export default function PermissionsTable() {
    return <table className='w-full table'>
      <thead className="bg-gray-300 rounded-full">
        <tr className="py-10">
          <th className="py-3 text-start px-3 font-normal rounded-tl-2xl rounded-bl-2xl">User Id</th>
          <th className="py-3 text-start px-3 font-normal">Section</th>
          <th className="py-3 text-start px-3 font-normal rounded-tr-2xl rounded-br-2xl">Action</th>
        </tr>
      </thead>
      <tbody className="my-2 ">
        <tr className=" ">
          <td className="py-2 px-4">123434</td>
          <td className="py-2 px-4">age</td>
          <td className="py-2 px-4"><button type='button' onClick={()=>alert('Hello world')} className='bg-amber-300 text-white px-3 py-1 cursor-pointer rounded-md' >Allow access</button></td>
        </tr>
        <tr className=" ">
          <td className="py-2 px-4">123434</td>
          <td className="py-2 px-4">age</td>
          <td className="py-2 px-4"><button type='button' onClick={()=>alert('Hello world')} className='bg-amber-300 text-white px-3 py-1 cursor-pointer rounded-md' >Allow access</button></td>
        </tr>
        <tr className=" ">
          <td className="py-2 px-4">123434</td>
          <td className="py-2 px-4">age</td>
          <td className="py-2 px-4"><button type='button' onClick={()=>alert('Hello world')} className='bg-amber-300 text-white px-3 py-1 cursor-pointer rounded-md' >Allow access</button></td>
        </tr>
        <tr className=" ">
          <td className="py-2 px-4">123434</td>
          <td className="py-2 px-4">age</td>
          <td className="py-2 px-4"><button type='button' onClick={()=>alert('Hello world')} className='bg-amber-300 text-white px-3 py-1 cursor-pointer rounded-md' >Allow access</button></td>
        </tr>
      </tbody>
      <style>{`
      table{
      border-spacing:0px 14px;
      border-collapse:separate;
      }`}
      </style>
    </table>
  }