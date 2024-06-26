import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select';
import { blacklistByCategory, removeFromBlacklistCategory } from '../services/api-calls';
import { toast } from 'sonner';

const RemoveByCategory = () => {
  const { handleSubmit, reset, refetch, control} = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (input) => {
    const myData = {
      category: input.category.label,
      reason: input.reason
    }
    console.log('blackdata: ', myData)
    const submit = await removeFromBlacklistCategory(myData)
    if(submit && submit.data.data == true){
      toast.success('User was blacklisted successfully!')
      reset()
    }else{
      toast.error('Couldnt blacklist user')
    }
    refetch()
    setLoading(false)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
      <div className='w-full'>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Select Department
      </label>
      <Controller
        name="category"
        control={control}
        defaultValue='Administratives'
        rules={{ required: true }}
        render={({ field }) => (
          <Select
          className='text-gray-900'
            {...field}
            options={[
              { value: "Administratives", label: "Administratives" },
              { value: "Operations", label: "Operations" },
              { value: "Technologies", label: "Technology" }
            ]}
            
            onChange={(selectedOption) => {field.onChange(selectedOption); console.log('select: ', selectedOption)}}
            
          />
        )}
      />
    </div>

      <div>
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
        Reason
      </label>
      <div className="mt-2">
      <Controller
                    name="reason"
                    control={control}
                    rules={{
                        required: true,
                        validate: {
                          maxLength: (value) => value.length >= 1,
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <textarea
          className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            cols={90}
                            placeholder="Enter your reason"
                            rows={4}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
      </div>
      </div>

      <button disabled={loading} className='bg-blue-500 text-white p-2 rounded-2xl'>{loading ? 'Loading...' : 'Remove from Blacklist'}</button>
      
      </form>
    </div>
  )
}

export default RemoveByCategory
