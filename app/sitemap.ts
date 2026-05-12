import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://northstreamsystems.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://northstreamsystems.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://northstreamsystems.com/services/managed-it-support', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://northstreamsystems.com/services/cybersecurity-compliance', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://northstreamsystems.com/services/microsoft-365-management', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://northstreamsystems.com/services/cloud-infrastructure-migration', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/services/backup-disaster-recovery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/services/network-connectivity', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/services/it-consultancy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/why-us', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://northstreamsystems.com/locations/north-wales', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/locations/llandudno', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://northstreamsystems.com/locations/conwy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://northstreamsystems.com/locations/gwynedd', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://northstreamsystems.com/locations/denbighshire', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://northstreamsystems.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
  ]
}
