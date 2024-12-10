import { useState } from "react"

export default function AnnouncementForm() {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")

    // const toggleFormVisibility = () => {
    //     setIsFormVisible(!isFormVisible)
    // }

    // const handleTitleChange = (a) => {
    //     setTitle(a.target.value);
    // };

    // const handleTextChange = (a) => {
    //     setText(a.target.value);
    // };
    // const handleAuthorChange = (a) => {
    //     setAuthor(a.target.value);
    // }

    // const handleSubmit = (a) => {
    //     a.preventDefault();
    //     setTitle('');
    //     setText('');
    //     setAuthor('');
    //     setIsFormVisible(false);
    // };

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Post Announcement
            </button>

            {isFormVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-2">
                    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-xl mb-4">Post an Announcement</h2>
                        <form>
                            <div className="mb-5">
                                <label>Author</label>
                                <input
                                    id="author"
                                    type="text"
                                    value={author}
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={title}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="text"
                                >
                                    Text
                                </label>
                                <textarea
                                    id="text"
                                    value={content}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}