export type Language = 'en' | 'hi';

export interface EnquiryFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  projectLocation: string;
  plotCount: string;
  projectType: string;
  hasExistingLayout: 'yes' | 'no';
  additionalRequirements: string;
}

export interface FormErrors {
  fullName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  projectLocation?: string;
  plotCount?: string;
  projectType?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
}

export interface PlotSimulationData {
  id: number;
  plotNumber: string;
  dimensions: string;
  areaSqFt: number;
  areaGaj?: number;
  facing: string;
  status: 'available' | 'reserved' | 'sold';
  x: number;
  y: number;
  width: number;
  height: number;
  roadAccess: string;
}
