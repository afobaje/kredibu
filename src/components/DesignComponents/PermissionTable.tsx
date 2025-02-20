export default function PermissionsTable() {
    return <table className='w-full'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Section</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123434</td>
          <td>age</td>
          <td><button type='button' className='bg-amber-300 text-white p-3 cursor-pointer rounded-md' >Allow access</button></td>
        </tr>
      </tbody>
    </table>
  }