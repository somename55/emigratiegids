'use client'

import HeroSection from '@/components/HeroSection'
import DestinationsSection from '@/components/DestinationsSection'
import TopicsSection from '@/components/TopicsSection'
import FeaturedGuideSection from '@/components/FeaturedGuideSection'
import EmigrantTypesSection from '@/components/EmigrantTypesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <TopicsSection />
      <FeaturedGuideSection />
      <EmigrantTypesSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  )
}
