export default function Banner() {
    return (
        <div className="banner bg-green-800 py-2">
            <div className="container mx-auto flex justify-center items-center">
                <div className="w-[calc(100%-2rem)] max-w-2xl text-white flex justify-center items-center text-sm">
                    <div className="bg-green-700 rounded-md px-4 py-1 flex items-center">
                        <span>~ hack with us in SF at&nbsp;</span>
                        <a href="https://lofihack.com/" style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer" className="text-green-100 hover:text-green-200">lo-fi hack #1</a>
                        <span>&nbsp;on Feb 22nd ~</span>
                    </div>
                </div>
            </div>
        </div>
    )
}