import { useUser } from "@/context/UserContext";

export default function Billing() {
    const { plan, setPlan } = useUser();

    return (
        <div className="w-full space-y-8">
            <h1 className="text-2xl font-bold mb-6">Subscription Plans</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 border rounded-lg shadow-sm ${
                    plan === 'base' ? 'ring-2 ring-blue-500' : ''
                }`}>
                    <h2 className="text-2xl font-bold mb-4">Base Plan</h2>
                    <ul className="mb-6 space-y-2">
                        <li>Basic features</li>
                        <li>Limited storage</li>
                        <li>Email support</li>
                    </ul>
                    <button
                        onClick={() => setPlan('base')}
                        className={`w-full px-4 py-2 rounded ${
                            plan === 'base'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {plan === 'base' ? 'Current Plan' : 'Switch to Base Plan'}
                    </button>
                </div>

                <div className={`p-6 border rounded-lg shadow-sm ${
                    plan === 'business' ? 'ring-2 ring-blue-500' : ''
                }`}>
                    <h2 className="text-2xl font-bold mb-4">Business Plan</h2>
                    <ul className="mb-6 space-y-2">
                        <li>Advanced features</li>
                        <li>Unlimited storage</li>
                        <li>24/7 Priority support</li>
                        <li>Custom integrations</li>
                    </ul>
                    <button
                        onClick={() => setPlan('business')}
                        className={`w-full px-4 py-2 rounded ${
                            plan === 'business'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {plan === 'business' ? 'Current Plan' : 'Switch to Business Plan'}
                    </button>
                </div>
            </div>
        </div>
    );
}