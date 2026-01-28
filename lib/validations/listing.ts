import { z } from 'zod';

export const listingFormSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be less than 100 characters'),
  type: z.enum(['rent', 'sale', 'short_let']),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  price: z
    .number()
    .min(1000, 'Price must be at least ₦1,000')
    .max(10000000000, 'Price seems too high'),
  period: z.enum(['year', 'month', 'night']).optional(),
  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(200, 'Address must be less than 200 characters'),
  area: z.string().optional(),
  city: z.string().default('Lagos'),
  state: z.string().default('Lagos'),
  bedrooms: z.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 bedrooms'),
  bathrooms: z.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 bathrooms'),
  toilets: z.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 toilets'),
  parking: z.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 parking spaces'),
});

export type ListingFormData = z.infer<typeof listingFormSchema>;

export const listingStep1Schema = listingFormSchema.pick({
  title: true,
  type: true,
  description: true,
  price: true,
  address: true,
  bedrooms: true,
  bathrooms: true,
  toilets: true,
  parking: true,
});

export type ListingStep1Data = z.infer<typeof listingStep1Schema>;
