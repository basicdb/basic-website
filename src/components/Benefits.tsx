export default function Benefits({ benefits, title }: { benefits: Array<{ title: string; description: string }>; title: string }) {
    return (
        <div className="w-[calc(100%-14rem)] mx-28 my-20">
            <div>
                <div className="mb-6">
                    <h1 className='text-xl text-green-800 dark:text-green font-bold'>{title}</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index}>
                            <p className="mt-3 font-medium text-green-700 dark:text-green-400">{benefit.title}</p>
                            <div className="mt-1 text-sm text-green-500">
                                {benefit.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}