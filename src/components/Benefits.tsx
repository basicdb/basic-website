const Benefits = ({ benefits, title }: { benefits: Array<{ title: string; description: string }>; title: string }) => {
    return (
        <section aria-labelledby="features" id="feature-five" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-2xl font-mono pb-12 text-gray-900 dark:text-gray-100 sm:text-center md:text-center lg:text-left'>{title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index}>
                            <p className="mt-3 text-lg font-medium leading-6">{benefit.title}</p>
                            <div className="mt-1 text-base text-gray-500 dark:text-gray-400">
                                {benefit.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits;