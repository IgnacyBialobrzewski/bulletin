import { useState } from "react"

export default function Help() {
    const [isHelpVisible, setIsHelpVisible] = useState(false)

    const toggleHelpVisibility = () => {
        setIsHelpVisible(!isHelpVisible)
    }

    return (
        <div>
            <button onClick={toggleHelpVisibility} className="hover:underline ml-2">
                Help
            </button>

            {isHelpVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md shadow-md max-2-md w-80">
                        <div>
                            <h1 className="text-xl mb-4 text-black">Help</h1>
                            <h3 className="mb-4 text-black">Discord: dez_ent</h3>
                        </div>
                        <button
                            type="button"
                            onClick={toggleHelpVisibility}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
