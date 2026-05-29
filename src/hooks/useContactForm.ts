import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const useContactForm = (isDisabled: boolean = true) => {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    if (isDisabled) return false;
    const tempErrors: FormErrors = {};
    
    if (!form.name.trim()) {
      tempErrors.name = t("contact.errorName");
    }
    
    if (!form.email.trim()) {
      tempErrors.email = t("contact.errorEmailEmpty");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = t("contact.errorEmailInvalid");
    }
    
    if (!form.message.trim()) {
      tempErrors.message = t("contact.errorMsgEmpty");
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (isDisabled) return;
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });

      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return {
    form,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    isDisabled
  };
};
