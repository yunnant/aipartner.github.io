import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>数灵伙伴 - 你的AI数字伙伴</title>
        <meta name="description" content="个性化AI伙伴，陪伴你的每一天" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            遇见你的数字伙伴
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            AI驱动的个性化数字伙伴，陪伴你的学习、工作与生活
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
              立即体验
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            核心特性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="个性化成长"
              description="独特的进化系统，让每个数灵伙伴都与众不同"
              icon="🌱"
            />
            <FeatureCard 
              title="智能对战"
              description="创新的对战系统，让学习变得更有趣"
              icon="⚔️"
            />
            <FeatureCard 
              title="多样技能"
              description="丰富的技能系统，满足各种学习和工作需求"
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* Evolution System */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            进化系统
          </h2>
          {/* Add evolution system content here */}
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default Home 