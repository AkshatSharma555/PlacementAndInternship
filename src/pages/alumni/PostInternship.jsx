import React, { useState } from 'react';

const FormRow = ({ label, isRequired, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {isRequired && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

const PostInternship = () => {
  const initialFormState = {
    companyName: '', location: '', title: '', type: 'Full time',
    deadline: '', description: '', stipend: '', 
    duration: '', alumniName: '', alumniEmail: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Internship Form Submitted:", formData);
    alert("Internship posted successfully! (Check console for data)");
  };
  
  const handleClear = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="bg-white max-w-4xl mx-auto p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Post Internship</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormRow label="Company Name" isRequired>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </FormRow>
          <FormRow label="Location" isRequired>
            <select name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
              <option value="">Select Location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </FormRow>
          <FormRow label="Title" isRequired>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </FormRow>
          <FormRow label="Type" isRequired>
            <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
              <option>Full time</option>
              <option>Part time</option>
            </select>
          </FormRow>
        </div>

        <FormRow label="Application Deadline" isRequired>
          <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </FormRow>
        
        <FormRow label="Description" isRequired>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
        </FormRow>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormRow label="Stipend">
            <input type="text" name="stipend" value={formData.stipend} onChange={handleChange} placeholder="eg. 20k per month / unpaid" className="w-full p-2 border border-gray-300 rounded-md" />
          </FormRow>
          <FormRow label="Duration">
            <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="eg. 2 months" className="w-full p-2 border border-gray-300 rounded-md" />
          </FormRow>
        </div>
        
        <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormRow label="Alumni Name">
              <input type="text" name="alumniName" value={formData.alumniName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            </FormRow>
            <FormRow label="Alumni Email">
              <input type="email" name="alumniEmail" value={formData.alumniEmail} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
            </FormRow>
        </div>
        
        <div className="flex justify-end gap-4 pt-6">
          <button type="button" onClick={handleClear} className="bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-500">
            Clear
          </button>
          <button type="submit" className="bg-[#00A99D] text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
            Post Internship
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostInternship;