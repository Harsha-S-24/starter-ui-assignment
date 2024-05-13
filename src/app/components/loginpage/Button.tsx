export default function Button({ text, onClick, loading }) {
    return (
      <button
        onClick={onClick}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {loading ? 'Submitting...' : text}
      </button>
    );
  }
  