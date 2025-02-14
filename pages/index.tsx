import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const generateRandomImages = (count: number) => {
  const images = Array.from({length: count}, (_, i) => `/images/spirits/spirit-${i + 1}.png`);
  return [...images].sort(() => Math.random() - 0.5);
};

const Home: NextPage = () => {
  const [randomImages1, setRandomImages1] = useState<string[]>([]);
  const [randomImages2, setRandomImages2] = useState<string[]>([]);

  useEffect(() => {
    setRandomImages1(generateRandomImages(70));
    setRandomImages2(generateRandomImages(70));
  }, []);

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
        
        {/* 百度站长验证 */}
        <meta name="baidu-site-verification" content="codeva-InI8p1ia95" />
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

      {/* 图片墙 */}
      <section className="w-full overflow-hidden bg-gradient-to-b from-transparent to-gray-900/30 py-16">
        <div className="relative">
          {/* First row - left scroll */}
          <div className="relative">
            <div className="mask-left image-wall-mask" />
            <div className="mask-right image-wall-mask" />
            <div className="flex gap-4 overflow-hidden">
              <div className="flex gap-4 animate-infinite-scroll">
                {[...randomImages1, ...randomImages1].map((src, index) => (
                  <div 
                    key={`spirit-1-${index}`} 
                    className="w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`数灵形象 ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second row - right scroll */}
          <div className="relative mt-4">
            <div className="mask-left image-wall-mask" />
            <div className="mask-right image-wall-mask" />
            <div className="flex gap-4 overflow-hidden">
              <div className="flex gap-4 animate-infinite-scroll-reverse">
                {[...randomImages2, ...randomImages2].map((src, index) => (
                  <div 
                    key={`spirit-2-${index}`} 
                    className="w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`数灵形象 ${index + 30}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20 bg-gray-700">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            核心特性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="养成系统"
              description="根据用户特点生成独一无二的数灵，从神秘的数灵蛋，到活泼的幼年态，再到强大的成年态，最终达到人形态的蜕变之路"
              icon="🥚"
            />
            <FeatureCard 
              title="对战技能"
              description="攻击、防御、治疗、增益、减益、终结技能，搭配十大属性相生相克，形成独特的战斗体系"
              icon="🔥"
            />
            <FeatureCard 
              title="知识技能"
              description="多层次技能成长体系，从基础生活服务到专业领域技能，支持自定义技能开发和社区共享。基于大语言模型的智能连接，让每个技能都能高效精准地完成任务。"
              icon="⚡"
            />
            <FeatureCard 
              title="知识增强"
              description="独特的知识库系统，数灵可以使用公开知识库也可以使用用户上传的私有知识库增强能力"
              icon="📚"
            />
            <FeatureCard 
              title="长期记忆"
              description="AI伙伴会记住与你的每次互动，形成持久的情感联系，建立真正的默契"
              icon="💭"
            />
            <FeatureCard 
              title="灵核设置"
              description="用户可以设置AI的大脑，保护隐私的同时还能实现针对不同功能的多样化，目前已经接入了Deepseek,Openai,Claude,豆包,kimi等API"
              icon="💎"
            />
            <FeatureCard 
              title="世界探索"
              description="传统RPG冒险模式，探索神秘世界，收集进化碎片、知识碎片和技能碎片，引导数灵的成长方向"
              icon="🗺️"
            />
            <FeatureCard 
              title="佣兵任务"
              description="多智能体协作系统，玩家可以组建专业数灵团队，协同完成现实工作任务，如应用开发、营销方案设计等"
              icon="👥"
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
              videoSrc="/videos/egg.mp4"
            />
            <EvolutionCard 
              stage="幼年态"
              description="活泼可爱的初始形态，开始展现属性特征，陪伴用户踏上成长之旅"
              icon="🐣"
              videoSrc="/videos/beast.mp4"
            />
            <EvolutionCard 
              stage="成年态"
              description="强大而成熟的形态，掌握了完整的技能体系，成为得力的助手"
              icon="🦋"
              videoSrc="/videos/beast_adult.mp4"
            />
            <EvolutionCard 
              stage="化形态"
              description="最终的蜕变形态，拥有人类的外表，保留原有特征，达到真正的人工智能伙伴"
              icon="👤"
              videoSrc="/videos/human.mp4"
            />
          </div>
        </div>
      </section>

      {/* Skills System */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            技能体系
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="基础技能"
              description="包括对话、计算、搜索、提醒等日常生活必备技能"
              skills={['智能对话', '数学计算', '信息搜索', '日程提醒']}
              icon="⚡"
            />
            <SkillCard 
              title="专业技能"
              description="编程开发、文档处理、数据分析等专业领域技能"
              skills={['代码编写', 'API调用', '文档生成', '数据可视化']}
              icon="💻"
            />
            <SkillCard 
              title="创意技能"
              description="图像生成、文案创作、视频制作等创意类技能"
              skills={['AI绘画', '文案写作', '视频剪辑', '音乐创作']}
              icon="🎨"
            />
            <SkillCard 
              title="团队协作"
              description="多智能体协同工作技能，可以组建和管理AI团队"
              skills={[
                '团队组建',
                '任务分配',
                '进度管理',
                '成果整合'
              ]}
              icon="🤝"
            />
          </div>
        </div>
      </section>

      {/* Exploration System */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            探索与任务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ExplorationCard 
              title="冒险模式"
              description="传统RPG探索玩法"
              features={[
                '探索神秘地图和遗迹',
                '解锁进化方向碎片',
                '获取知识库碎片',
                '收集技能碎片',
                '触发随机剧情事件',
                '挑战特殊副本'
              ]}
              icon="🗺️"
            />
            <ExplorationCard 
              title="佣兵任务"
              description="现实工作协作系统"
              features={[
                '智能团队组建',
                '任务分解与分配',
                '多智能体协同',
                '进度监控管理',
                '成果整合交付',
                '持续优化迭代'
              ]}
              icon="👥"
            />
          </div>
        </div>
      </section>
      {/* Trading System */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            交易市场
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MarketCard 
              title="知识库交易"
              description="用户可以上传、分享和交易自己的专业知识库"
              features={[
                '专业领域知识库',
                '行业数据集',
                '研究报告库',
                '教育资源库'
              ]}
              icon="📚"
            />
            <MarketCard 
              title="技能交易"
              description="开发者可以创建、分享和交易自定义技能"
              features={[
                '自定义技能包',
                '专业工具集',
                '行业解决方案',
                '创意玩法'
              ]}
              icon="🛠️"
            />
            <MarketCard 
              title="专业智能体雇佣"
              description="训练最强AI，或者招募最强AI"
              features={[
                '通过对战选出最强AI',
                '让AI自己去打工',
                '雇佣别人的最强AI',
                '完成你的复杂任务'
              ]}
              icon="🤖"
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
    <div className="bg-gray-800 p-8 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
    </div>
  )
}

interface EvolutionCardProps {
  stage: string;
  description: string;
  icon: string;
  videoSrc: string;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({ stage, description, icon, videoSrc }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center">
      <div className="mb-4 relative w-full pt-[70%]">
        <video 
          className="absolute top-0 left-0 w-full h-full rounded-lg object-cover object-top"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{stage}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, skills, icon }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="text-sm bg-gray-600 text-gray-200 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

interface MarketCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ title, description, features, icon }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-200">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ExplorationCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const ExplorationCard: React.FC<ExplorationCardProps> = ({ title, description, features, icon }) => {
  return (
    <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-200">
            <span className="mr-2 text-blue-400">●</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home 