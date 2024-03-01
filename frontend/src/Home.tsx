import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="h-screen w-screen flex flex-col bg-home opacity-100">
            <div className="flex justify-between">
                <div className="bg-light-green text-blue text-lg p-2 mt-5 ml-5 rounded-lg">
                    LLW
                </div>
                <div className='text-beige mt-5 mr-5 space-x-3'>
                    <Link to="/login">log in</Link>
                    <Link to="/signup" className="bg-light-green text-blue text-lg p-2 rounded-lg">sign up</Link>
                </div>
                
            </div>
            <div className="items-center gap-4 m-auto flex-col flex">
                <h1 className="text-light-green text-7xl">WEBSITE NAME</h1>
                <div className="text-white bg-brown p-4 rounded-full text-lg">start your learning journey!</div>
            </div>
        </div>
    )
}

export default Home