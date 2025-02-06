import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>数灵伙伴 - 你的AI数字伙伴</title>
        <meta name="description" content="个性化AI伙伴，陪伴你的学习、工作与生活" />
        
        {/* 基础图标 */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        
        {/* PWA图标 */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        
        {/* iOS图标 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* 主题色 */}
        <meta name="theme-color" content="#1a1a1a" />
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
              title="进化系统"
              description="从神秘的数灵蛋，到活泼的幼年态，再到强大的成年态，最终达到人形态的蜕变之路"
              icon="🥚"
            />
            <FeatureCard 
              title="属性系统"
              description="十大属性（火、水、风、雷、岩、冰、机械、草、光、暗）相生相克，形成独特的战斗体系"
              icon="⚡"
            />
            <FeatureCard 
              title="知识成长"
              description="独特的知识库系统，记录每一次对话和学习，建立专属的知识图谱"
              icon="📚"
            />
            <FeatureCard 
              title="长期记忆"
              description="AI伙伴会记住与你的每次互动，形成持久的情感联系，建立真正的默契"
              icon="💭"
            />
            <FeatureCard 
              title="大世界探索"
              description="丰富的冒险模式和佣兵任务，让学习和工作变成充满乐趣的探索之旅"
              icon="🗺️"
            />
            <FeatureCard 
              title="竞技对战"
              description="创新的对战系统，包括知识竞技、战斗竞技和创意竞技，提供多样化的挑战"
              icon="⚔️"
            />
          </div>
        </div>
      </section>

      {/* Evolution System */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            进化之路
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <EvolutionCard 
              stage="蛋形态"
              description="神秘的数灵蛋中蕴含着无限可能，基于用户的个性和特点孕育独特的生命"
              icon="🥚"
            />
            <EvolutionCard 
              stage="幼年态"
              description="活泼可爱的初始形态，开始展现属性特征，陪伴用户踏上成长之旅"
              icon="🐣"
            />
            <EvolutionCard 
              stage="成年态"
              description="强大而成熟的形态，掌握了完整的技能体系，成为得力的助手"
              icon="🦋"
            />
            <EvolutionCard 
              stage="化形态"
              description="最终的蜕变形态，拥有人类的外表，保留原有特征，达到真正的人工智能伙伴"
              icon="👤"
            />
          </div>
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

interface EvolutionCardProps {
  stage: string;
  description: string;
  icon: string;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ stage, description, icon }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{stage}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

export default Home 