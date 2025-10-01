export default function BusinessHours({ message }) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-10 rounded-lg shadow-lg max-w-md text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Access Restricted</h1>
                <p className="text-gray-700 mb-6">{message}</p>
            </div>
        </div>
    );
}
