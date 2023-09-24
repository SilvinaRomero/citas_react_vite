const Error = ({ children }) => {
    return (
        <div className="bg-red-100 text-red-500 border-l-2 border-red-600 p-2 font-bold mb-4">
            <p>{children}</p>
        </div>
    )
}

export default Error
