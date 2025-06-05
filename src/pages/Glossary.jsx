import React from 'react';
import { Search, FileText } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const commonTerms = [
  {
    title: 'SAFE (Simple Agreement for Future Equity)',
    description: 'An agreement for future equity',
  },
  {
    title: 'Vesting',
    description: 'The process of earning full ownership',
  },
  {
    title: 'Indemnity',
    description: 'Protection against loss or damage',
  },
  {
    title: 'Due Diligence',
    description: 'Investigation of a business',
  },
  {
    title: 'Term Sheet',
    description: 'Summary of investment terms',
  },
  {
    title: 'Cap Table',
    description: 'Record of company ownership',
  },
];

const Glossary = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[32px] font-bold">Legal Glossary</p>
          <p className="text-sm text-[#4e6797]">Search for legal terms and definitions</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="flex min-w-40 h-12 w-full">
          <div className="flex w-full items-stretch rounded-lg h-full">
            <div className="flex items-center justify-center pl-4 rounded-l-lg bg-[#e7ebf3]">
              <Search className="w-6 h-6 text-[#4e6797]" />
            </div>
            <input
              placeholder="Search for legal terms"
              className="w-full pl-2 pr-4 rounded-r-lg bg-[#e7ebf3] text-[#0e121b] placeholder:text-[#4e6797] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Common Terms Section */}
      <h2 className="text-[22px] font-bold px-4 pb-3 pt-5">Common Legal Terms</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {commonTerms.map((term, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#d0d7e7] bg-[#f8f9fc] p-4 flex-col">
            <div>
              <FileText className="w-6 h-6 text-[#0e121b]" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold">{term.title}</h2>
              <p className="text-sm text-[#4e6797]">{term.description}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Glossary; 