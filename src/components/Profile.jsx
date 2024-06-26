import { UserCircleIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Profile = () => {
  const userDetails = (JSON.parse(localStorage.getItem("user"))).data;
  console.log(userDetails)
  return (
      <div>
        {/* <SidebarContent/> */}
        <div className="flex justify-center items-center py-10 px-4">
          <main className=''>
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">

                  <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    {
                      userDetails.user.isActive ?
                          <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Active
                          </dd> :
                          <dd className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                            Inactive
                          </dd>
                    }

                  </div>
                  <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                    <span className="sr-only">User</span>
                      <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true"/>
                    </dt>
                    <dd className="text-sm font-medium leading-6 text-gray-900">{userDetails.user.firstName + " " + userDetails.user.lastName }</dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Email Address</span>
                      <EnvelopeIcon className="h-6 w-5 text-gray-400" aria-hidden="true"/>
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      <time dateTime="2023-01-31">{userDetails.user.email}</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <LockClosedIcon className="h-6 w-5 text-gray-400" aria-hidden="true"/>
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500 mb-8">{userDetails.roleName}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}

export default Profile
