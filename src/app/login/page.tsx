"use client"
import React, { useState } from 'react';
import Input from '../components/loginpage/Input';
import Link from '../components/loginpage/Link';
import PasswordInput from '../components/loginpage/PasswordInput';
import Button from '../components/loginpage/Button';
import { useRouter } from 'next/navigation'


export default function Login(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router=useRouter();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      router.push("/plans")
      setLoading(false);
    }; 
  return (
    <div className="bg-slate-700 min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign up</h1>
        <p className="text-sm text-gray-600 mb-8 text-center">to enjoy all of our cool features ✌️</p>
        <Input label="First Name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <Input label="Last Name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button text="Sign up" onClick={handleSubmit} loading={loading} />
        <div className="text-center mt-4">
          <p className="text-sm">
            Already a user? <Link href="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

