import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, X } from 'lucide-react';
import { Language, EnquiryFormData, FormErrors } from '../types';
import { getDictionary } from '../translations';
import { validateEnquiryForm, submitLeadData } from '../utils/validation';

interface EnquiryFormProps {
  lang: Language;
  isModal?: boolean;
  onClose?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ lang, isModal, onClose }) => {
  const t = getDictionary(lang);

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectLocation: '',
    plotCount: 'under-50',
    projectType: 'residential',
    hasExistingLayout: 'yes',
    additionalRequirements: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData, lang);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLeadData(formData);
      setSubmittedLeadId(result.leadId);
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      projectLocation: '',
      plotCount: 'under-50',
      projectType: 'residential',
      hasExistingLayout: 'yes',
      additionalRequirements: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedLeadId(null);
  };

  return (
    <div
      id="enquiry"
      className={`${
        isModal
          ? 'bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-2xl w-full mx-auto max-h-[90vh] overflow-y-auto'
          : 'bg-white text-slate-900 rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-10 max-w-3xl mx-auto'
      }`}
    >
      {/* Modal Close Button */}
      {isModal && onClose && (
        <div className="flex justify-end -mt-2 -mr-2 mb-2">
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Success View */}
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#24B47E] flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.enquiryForm.successTitle}
          </h3>

          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {t.enquiryForm.successMessage}
          </p>

          {submittedLeadId && (
            <p className="text-xs font-mono text-slate-400">
              Reference ID: {submittedLeadId}
            </p>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 text-xs font-semibold text-[#356DFF] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              {t.enquiryForm.submitAnother}
            </button>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close Window'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Form View */
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.enquiryForm.badge}</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.enquiryForm.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600">
              {t.enquiryForm.subtitle}
            </p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.fullNameLabel}
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.enquiryForm.fullNamePlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF] ${
                  errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                }`}
                required
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Company / Developer Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.companyLabel}
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t.enquiryForm.companyPlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF] ${
                  errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                }`}
                required
              />
              {errors.companyName && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.companyName}
                </p>
              )}
            </div>

            {/* Phone Number (Indian) */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.enquiryForm.phonePlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF] ${
                  errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                }`}
                required
              />
              {errors.phone && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Email Address (Optional) */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.enquiryForm.emailPlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF] ${
                  errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Project Location */}
            <div>
              <label htmlFor="projectLocation" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.locationLabel}
              </label>
              <input
                type="text"
                id="projectLocation"
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleChange}
                placeholder={t.enquiryForm.locationPlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF] ${
                  errors.projectLocation ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                }`}
                required
              />
              {errors.projectLocation && (
                <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.projectLocation}
                </p>
              )}
            </div>

            {/* Approximate Plot Count */}
            <div>
              <label htmlFor="plotCount" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.plotCountLabel}
              </label>
              <select
                id="plotCount"
                name="plotCount"
                value={formData.plotCount}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#356DFF]"
              >
                {t.enquiryForm.plotCountOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Category */}
            <div>
              <label htmlFor="projectType" className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.projectTypeLabel}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#356DFF]"
              >
                {t.enquiryForm.projectTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Has Existing Layout? */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.enquiryForm.layoutAvailableLabel}
              </label>
              <div className="flex items-center gap-4 pt-1.5">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="hasExistingLayout"
                    value="yes"
                    checked={formData.hasExistingLayout === 'yes'}
                    onChange={handleChange}
                    className="text-[#356DFF] focus:ring-[#356DFF]"
                  />
                  <span>{t.enquiryForm.yesOption}</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="hasExistingLayout"
                    value="no"
                    checked={formData.hasExistingLayout === 'no'}
                    onChange={handleChange}
                    className="text-[#356DFF] focus:ring-[#356DFF]"
                  />
                  <span>{t.enquiryForm.noOption}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Additional Requirements Textarea */}
          <div>
            <label htmlFor="additionalRequirements" className="block text-xs font-bold text-slate-700 mb-1">
              {t.enquiryForm.requirementsLabel}
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={3}
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder={t.enquiryForm.requirementsPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#356DFF]"
            />
          </div>

          {/* Submit Button & Privacy Disclaimer */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-md shadow-[#356DFF]/30 transition-all disabled:opacity-70 focus:outline-none cursor-pointer"
            >
              {isSubmitting ? (
                <span>{t.enquiryForm.submittingBtn}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.enquiryForm.submitBtn}</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-slate-500">
              🔒 {t.enquiryForm.privacyNote}
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
