export default function BasicTiles() {
    return (
        <div className='w-[calc(100%-10rem)] h-full rounded-3xl m-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-full'>
                <div className='dark:bg-black rounded-2xl p-6 border border-green-600 dark:border-green relative h-[30vh] sm:h-[50vh] lg:h-[70vh] hover:scale-105 hover:cursor-pointer transition-transform duration-200 flex items-center italic hover:not-italic' onClick={() => window.open('https://docs.basic.tech/get-started/implement-basic/using-react', '_blank')}>
                    <h2 className='text-green-800 dark:text-green text-5xl md:text-6xl lg:text-7xl font-bold text-right flex justify-center w-full'>Basic DB</h2>
                </div>

                <div className='flex flex-col gap-4 h-[70vh] lg:h-full'>
                    <div className='dark:bg-black rounded-2xl p-6 border border-green-600 dark:border-green flex-1 italic hover:not-italic hover:scale-105 hover:cursor-pointer transition-transform duration-200 flex items-center' onClick={() => window.open('https://basic.id', '_blank')}>
                        <h2 className='text-green-800 dark:text-green text-3xl md:text-4xl lg:text-5xl font-black text-center flex justify-center w-full'>Basic Auth</h2>
                    </div>
                    <div className='dark:bg-black rounded-2xl p-6 border border-green-600 dark:border-green flex-1 italic hover:not-italic hover:scale-105 hover:cursor-pointer transition-transform duration-200 flex items-center' onClick={() => window.open('https://app.basic.tech', '_blank')}>
                        <h2 className='text-green-800 dark:text-green text-3xl md:text-4xl lg:text-5xl font-black text-center flex justify-center w-full'>Basic Admin Portal</h2>
                    </div>
                    <div className='dark:bg-black rounded-2xl p-6 border border-green-600 dark:border-green flex-1 italic hover:not-italic hover:scale-105 hover:cursor-pointer transition-transform duration-200 flex items-center' onClick={() => window.open('https://www.npmjs.com/package/@basictech/cli', '_blank')}>
                        <h2 className='text-green-800 dark:text-green text-3xl md:text-4xl lg:text-5xl font-black text-center flex justify-center w-full'>Basic CLI</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}