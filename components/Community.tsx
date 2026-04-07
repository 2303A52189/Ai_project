
import React from 'react';

interface CommunityProps {
  onBack: () => void;
}

const Community: React.FC<CommunityProps> = ({ onBack }) => {
  return (
    <div className="p-4 md:p-6 bg-lime-50 min-h-screen">
      <button onClick={onBack} className="mb-4 text-green-700 hover:text-green-900 font-semibold">&larr; Back to Dashboard</button>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Community & Experts</h2>
        <p className="text-gray-600 mb-6">Connect, learn, and share with fellow farmers and experts.</p>

        <div className="space-y-8">
            {/* Ask an Expert Section */}
            <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Ask an Expert</h3>
                <div className="p-4 border rounded-lg">
                    <textarea className="w-full p-2 border rounded-md mb-2" placeholder="Type your question here..."></textarea>
                    <div className="flex justify-between items-center">
                        <input type="file" className="text-sm" />
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700">Submit Query</button>
                    </div>
                </div>
            </div>

            {/* Community Q&A Section */}
            <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Community Discussion</h3>
                 <div className="border rounded-lg divide-y">
                     <div className="p-4">
                         <p className="font-semibold">Ramesh Kumar</p>
                         <p className="text-gray-700 mt-1">What is the best way to deal with whiteflies on cotton crops without using harsh chemicals?</p>
                         <button className="text-sm text-green-600 mt-2">Reply</button>
                     </div>
                      <div className="p-4 bg-gray-50">
                         <p className="font-semibold">Sunita Devi</p>
                         <p className="text-gray-700 mt-1">I've had good results with a neem oil spray. Mix 5ml of neem oil with 1 litre of water and a drop of soap. Spray every 7 days.</p>
                     </div>
                 </div>
            </div>
             {/* Skill-Swap Section */}
            <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">Farmer Skill-Swap</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="border rounded-lg p-4 text-center">
                        <img src="https://picsum.photos/300/150?random=1" alt="Skill swap video thumbnail" className="rounded-md mb-2 mx-auto" />
                         <p className="font-semibold">Making Vermicompost at Home</p>
                         <p className="text-sm text-gray-500">by Anil Yadav</p>
                     </div>
                     <div className="border rounded-lg p-4 text-center">
                        <img src="https://picsum.photos/300/150?random=2" alt="Skill swap video thumbnail" className="rounded-md mb-2 mx-auto" />
                         <p className="font-semibold">Setting Up Drip Irrigation</p>
                         <p className="text-sm text-gray-500">by Priya Singh</p>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
