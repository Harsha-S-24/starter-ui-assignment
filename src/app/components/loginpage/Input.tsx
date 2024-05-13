
export default function Input({ label, type, value, onChange, required }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    );
  }