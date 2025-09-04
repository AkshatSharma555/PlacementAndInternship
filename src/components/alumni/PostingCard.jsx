import React from 'react';

// Icons for actions
const ViewIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;
const EditIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>;
const DeleteIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>;

const PostingCard = ({ posting, onViewApplicants }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
      <div>
        <p className="font-bold text-gray-800">{posting.title}</p>
        <p className="text-sm text-gray-500">at {posting.company}</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <p className="font-bold text-gray-800">{posting.views}</p>
          <p className="text-xs text-gray-500">Views</p>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <button onClick={onViewApplicants} className="hover:text-blue-600"><ViewIcon /></button>
          <button className="hover:text-green-600"><EditIcon /></button>
          <button className="hover:text-red-600"><DeleteIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default PostingCard;