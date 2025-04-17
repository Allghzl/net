import Header from "@/netcomp/header";
import { Link } from "@inertiajs/react";
import { useState } from "react";



export default function Planform(props: any) {
    const [selectedPlan, setSelectedPlan] = useState<string>(""); // "" default belum pilih
    const plans = [
        { name: "Mobile", price: "Rp49.000", desc: "Nonton di HP aja", value: "mobile" },
        { name: "Basic", price: "Rp89.000", desc: "Kualitas bagus, 1 perangkat", value: "basic" },
        { name: "Standard", price: "Rp129.000", desc: "Full HD, 2 perangkat", value: "standard" },
    ];
    const premiumPlan = [{ name: "Premium", price: "Rp169.000", desc: "4K Ultra HD, 4 perangkat", value: "premium" }];
    return (
        <div className="min-h-screen bg-white bg-center relative overflow-hidden">
        <Header divider={true}>
            {!props.auth.user ? (
                <Link href={route('register')} as="button" className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg">Sign in</Link>
            ) : (
                <Link href={route('logout')} as="button" className="h-8 btn btn-ghost font-poppins rounded-field shadow-none border-none text-black hover:underline hover:bg-transparent text-lg">Sign out</Link>
            )}
        </Header>
        <div className="text-black flex min-h-svh flex-col items-center gap-6 p-6 md:p-10">
            <div className="container justify-center flex flex-col items-center gap-6">
                <div className="flex w-full ">
                    
                    <h2 className="text-2xl font-semibold">Select Your Plan</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {plans.map((plan) => (
                        <div
                        key={plan.value}
                        onClick={() => setSelectedPlan(plan.value)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 h-full flex flex-col justify-between mt-7
                            ${selectedPlan === plan.value ? 'border-sky-500' : 'border-gray-300'}
                        `}
                        >
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-gray-700">{plan.price}</p>
                        <p className="text-sm text-gray-500">{plan.desc}</p>
                    </div>
                ))}
                    {premiumPlan.map((plan) => (
                        <div
                        key={plan.value}
                        onClick={() => setSelectedPlan(plan.value)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 h-full flex flex-col justify-between relative
                            ${selectedPlan === plan.value ? 'border-sky-500' : 'border-gray-300'}
                        `}
                        >
                        <div className="w-full h-7 bg-sky-600 text-white absolute top-0 left-0 rounded-t-lg font-semibold text-center">Paling mantap!</div>    
                        <h3 className="text-xl font-bold mt-7">{plan.name}</h3>
                        <p className="text-gray-700">{plan.price}</p>
                        <p className="text-sm text-gray-500">{plan.desc}</p>
                    </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    );
}