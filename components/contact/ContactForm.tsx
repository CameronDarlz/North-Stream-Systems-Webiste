'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, Check, Loader2, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormData {
  fullName: string
  businessName: string
  email: string
  phone: string
  message: string
  referral: string
}

interface FormErrors {
  fullName?: string
  businessName?: string
  email?: string
  message?: string
}

const referralOptions = [
  { value: 'google', label: 'Google Search' },
  { value: 'referral', label: 'Referral' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'other', label: 'Other' },
]

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!data.businessName.trim()) errors.businessName = 'Business name is required.'
  if (!data.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!data.message.trim()) errors.message = 'Please tell us how we can help.'
  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
    referral: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleReferralChange = (value: string) => {
    setFormData((prev) => ({ ...prev, referral: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    if (fd.get('_honeypot')) {
      setSubmitted(true)
      return
    }
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setServerError(false)

    try {
      // TODO: Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setServerError(true)
      }
    } catch {
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-surface rounded-2xl border border-gray-100">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle size={30} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Message received!</h3>
        <p className="text-muted max-w-sm leading-relaxed">
          Thanks! We&apos;ll be in touch within 4 business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        type="text"
        name="_honeypot"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      {/* Full Name */}
      <div>
        <Label.Root htmlFor="fullName" className="block text-sm font-medium text-nss-text mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </Label.Root>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Jane Smith"
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
            errors.fullName
              ? 'border-red-400 focus:border-red-500 bg-red-50'
              : 'border-gray-200 focus:border-accent bg-white'
          )}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
        )}
      </div>

      {/* Business Name */}
      <div>
        <Label.Root htmlFor="businessName" className="block text-sm font-medium text-nss-text mb-1.5">
          Business Name <span className="text-red-500">*</span>
        </Label.Root>
        <input
          id="businessName"
          name="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Acme Ltd"
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
            errors.businessName
              ? 'border-red-400 focus:border-red-500 bg-red-50'
              : 'border-gray-200 focus:border-accent bg-white'
          )}
        />
        {errors.businessName && (
          <p className="mt-1.5 text-xs text-red-500">{errors.businessName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label.Root htmlFor="email" className="block text-sm font-medium text-nss-text mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </Label.Root>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@acmeltd.co.uk"
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
            errors.email
              ? 'border-red-400 focus:border-red-500 bg-red-50'
              : 'border-gray-200 focus:border-accent bg-white'
          )}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label.Root htmlFor="phone" className="block text-sm font-medium text-nss-text mb-1.5">
          Phone <span className="text-muted font-normal text-xs">(optional)</span>
        </Label.Root>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+44 7700 900000"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-accent bg-white text-sm outline-none transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <Label.Root htmlFor="message" className="block text-sm font-medium text-nss-text mb-1.5">
          How can we help? <span className="text-red-500">*</span>
        </Label.Root>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your business and what you're looking for..."
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors resize-none',
            errors.message
              ? 'border-red-400 focus:border-red-500 bg-red-50'
              : 'border-gray-200 focus:border-accent bg-white'
          )}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Referral select */}
      <div>
        <Label.Root className="block text-sm font-medium text-nss-text mb-1.5">
          How did you hear about us?
        </Label.Root>
        <Select.Root value={formData.referral} onValueChange={handleReferralChange}>
          <Select.Trigger
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-left outline-none focus:border-accent transition-colors data-[placeholder]:text-muted"
            aria-label="How did you hear about us"
          >
            <Select.Value placeholder="Select an option..." />
            <Select.Icon>
              <ChevronDown size={16} className="text-muted" />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50"
              position="popper"
              sideOffset={4}
            >
              <Select.Viewport className="p-1">
                {referralOptions.map((opt) => (
                  <Select.Item
                    key={opt.value}
                    value={opt.value}
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none hover:bg-surface data-[highlighted]:bg-surface data-[state=checked]:text-accent"
                  >
                    <Select.ItemText>{opt.label}</Select.ItemText>
                    <Select.ItemIndicator className="ml-auto">
                      <Check size={14} className="text-accent" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {serverError && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:office@northstreamsystems.com" className="underline">
            office@northstreamsystems.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
