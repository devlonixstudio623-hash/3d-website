import React from 'react';
import { EnquiryForm } from './EnquiryForm';
import { Language } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Request a Free Project Demo"
    >
      <div className="w-full max-w-2xl">
        <EnquiryForm lang={lang} isModal={true} onClose={onClose} />
      </div>
    </div>
  );
};
