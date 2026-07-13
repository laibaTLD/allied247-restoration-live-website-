'use client';

import React, { useState } from 'react';
import { useChat } from './ChatProvider';
import { X, User, Phone, Mail, Home } from 'lucide-react';

export default function LeadCaptureModal() {
  const { state, sendMessage } = useChat();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lastMessage = state.conversation?.messages[state.conversation.messages.length - 1];
  const requiredFields = (lastMessage?.metadata as { collectInfo?: string[] })?.collectInfo || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the collected information as a message
      const infoMessage = Object.entries(formData)
        .filter(([_, value]) => value.trim())
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');

      await sendMessage(`Customer information provided: ${infoMessage}`);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        description: ''
      });
      
      // Hide modal after successful submission
      setTimeout(() => {
        // Modal will be hidden by the ChatProvider based on the response
      }, 1000);
    } catch (error) {
      console.error('Error submitting lead info:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFieldRequired = (fieldName: string) => {
    return requiredFields.includes(fieldName) || requiredFields.includes('phone') || requiredFields.includes('name');
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {requiredFields.includes('phone') ? 'Emergency Contact' : 'Get Your Free Estimate'}
          </h3>
          <button
            onClick={() => {/* Modal will be hidden by parent */}}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          {requiredFields.includes('phone') 
            ? 'For immediate assistance, please provide your contact information.'
            : 'Please provide some details so we can better assist you.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-1" />
              Name {isFieldRequired('name') && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required={isFieldRequired('name')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 mr-1" />
              Phone {isFieldRequired('phone') && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required={isFieldRequired('phone')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 mr-1" />
              Email {isFieldRequired('email') && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required={isFieldRequired('email')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Home className="w-4 h-4 mr-1" />
              Service Type {isFieldRequired('serviceType') && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required={isFieldRequired('serviceType')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              <option value="water damage">Water Damage</option>
              <option value="fire damage">Fire Damage</option>
              <option value="mold remediation">Mold Remediation</option>
              <option value="construction">Construction</option>
              <option value="cleaning">Specialty Cleaning</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Description {isFieldRequired('description') && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required={isFieldRequired('description')}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Please describe your situation..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={() => {/* Modal will be hidden by parent */}}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Skip
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
