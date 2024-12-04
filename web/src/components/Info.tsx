import { useState } from "react"

export default function Info() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            <button onClick={toggleVisibility} className="hover:underline ml-2">
                Info
            </button>

            {isVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md shadow-md max-2-md w-80">
                        <div>
                            <h1 className="text-xl mb-4 text-black">Info</h1>
                            <h5 className="mb-4 text-black">Creators: </h5>
                        </div>
                        <button
                            type="button"
                            onClick={toggleVisibility}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
