import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'

export default function Home() {
  return (
    <section className='container max-w-5xl space-y-16'>
      <Intro />
      <RecentProjects />
      <RecentPosts />
      <NewsletterForm />
    </section>
  )
}
