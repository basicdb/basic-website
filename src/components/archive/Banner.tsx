export default function Banner() {
    return (
        <div className="banner bg-indigo-800 py-2">
            <div className="container mx-auto flex justify-center items-center">
                <div className="w-[calc(100%-2rem)] max-w-2xl text-white flex justify-center items-center text-sm">
                    <div className="rounded-md px-4 py-1 flex items-center">
                        <a href="https://lu.ma/kqxncb3g" style={{ textDecoration: 'underline' }} target="_blank" rel="noreferrer" className="text-green-100 hover:text-green-200">Speaking with Machines AI hackathon</a>
                        <span>&nbsp;with Windsurf — Jun 21st, 8am PT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}