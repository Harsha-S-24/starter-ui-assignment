import { useState } from "react";

export default function PasswordInput({ label, value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
    );
  }