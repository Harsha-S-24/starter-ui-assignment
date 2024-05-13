"use client"
import { useState } from 'react';

function PriceWrapper({ children }) {
  return (
    <div className="mb-4 border border-gray-200 shadow-sm lg:flex-start rounded-xl">
      {children}
    </div>
  );
}

function Plan({ name, price, features, onSelect }) {
  return (
    <PriceWrapper>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-lg mb-2">${price}/month</p>
        <ul className="pl-4">
          {features.map((feature, index) => (
            <li key={index} className="mb-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17l-5-5 1.41-1.41L11 16.17l8.59-8.59L21 9l-10 10z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md" onClick={onSelect}>Select Plan</button>
      </div>
    </PriceWrapper>
  );
}

export default function ThreeTierPricing() {
  const [selectedPlan, setSelectedPlan] = useState({});
  const [subscriptionStatus, setSubscriptionStatus] = useState({});

  const plans = [
    {
      name: 'Hobby',
      price: 79,
      features: ['Unlimited build minutes', 'Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.'],
    },
    {
      name: 'Growth',
      price: 149,
      features: ['Unlimited build minutes', 'Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.'],
    },
    {
      name: 'Scale',
      price: 349,
      features: ['Unlimited build minutes', 'Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.'],
    },
  ];

  async function handleSelectPlan(plan) {
    try {
        const { name, price } = plan;
        const response = await fetch('http://localhost:3000/api/plans', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, price }),
        });
 
      if (response.ok) {
        setSubscriptionStatus('success');
        setSelectedPlan(plan);
      } else {
        setSubscriptionStatus('error');
      }
    } catch (error) {
      console.error('Failed to subscribe:', error);
      setSubscriptionStatus('error');
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Plans that fit your need</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">Start with 14-day free trial. No credit card needed. Cancel at anytime.</p>
      <div className="flex justify-center gap-8">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>
      {subscriptionStatus === 'success' && (
        <div className="mt-8 text-center">
          <p>You have successfully subscribed to the <strong>{selectedPlan.name}</strong> plan.</p>
        </div>
      )}
      {subscriptionStatus === 'error' && (
        <div className="mt-8 text-center">
          <p>Failed to subscribe. Please try again later.</p>
        </div>
      )}
    </div>
  );
}
