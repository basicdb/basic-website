export default function BasicTiles() {
    return (
        <div className='w-[calc(100%-10rem)] h-full rounded-3xl m-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 h-full'>
                <div className='bg-black rounded-2xl p-6 relative h-[50vh] lg:h-[70vh] hover:scale-105 hover:cursor-pointer transition-all duration-200' onClick={() => window.open('https://docs.basic.tech/get-started/implement-basic/using-react', '_blank')}>
                    <div className='absolute bottom-6 right-6'>
                        <h2 className='text-green text-xl font-bold text-right'>Basic DB</h2>
                        <p className='text-green-500 text-right'>APIs and SDKs</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 h-[70vh] lg:h-full'>
                    <div className='bg-black rounded-2xl p-6 relative flex-1 hover:scale-105 hover:cursor-pointer transition-all duration-200' onClick={() => window.open('https://basic.id', '_blank')}>
                        <div className='absolute bottom-6 right-6'>
                            <h2 className='text-green text-xl font-bold text-right'>Basic Auth</h2>
                            <p className='text-green-500 text-right'>Basic.id</p>
                        </div>
                    </div>
                    <div className='bg-black rounded-2xl p-6 relative flex-1 hover:scale-105 hover:cursor-pointer transition-all duration-200' onClick={() => window.open('https://app.basic.tech', '_blank')}>
                        <div className='absolute bottom-6 right-6'>
                            <h2 className='text-green text-xl font-bold text-right'>Basic Admin Portal</h2>
                            <p className='text-green-500 text-right'>Create and manage projects</p>
                        </div>
                    </div>
                    <div className='bg-black rounded-2xl p-6 relative flex-1 hover:scale-105 hover:cursor-pointer transition-all duration-200' onClick={() => window.open('https://www.npmjs.com/package/@basictech/cli', '_blank')}>
                        <div className='absolute bottom-6 right-6'>
                            <h2 className='text-green text-xl font-bold text-right'>Basic CLI</h2>
                            <p className='text-green-500 text-right'>Basic from your command line</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}