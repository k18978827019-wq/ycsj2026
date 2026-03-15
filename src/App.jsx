import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'skills', label: '技能' },
    { id: 'contact', label: '联系' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-slate-800">
              康煜承
            </a>
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="pt-20">
        {/* 首页 - Hero 区域 */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              康
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              你好，我是康煜承
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              一名充满热情的开发者
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                联系我
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-white text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-md border border-slate-200"
              >
                了解更多
              </a>
            </div>
          </div>
        </section>

        {/* 关于我 */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">关于我</h2>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p className="mb-4">
                我是一名开发者，对技术充满热情。我喜欢创造有用的东西，解决实际问题。
              </p>
              <p className="mb-4">
                在工作和学习中，我注重细节，追求代码的简洁和优雅。我相信好的技术可以改善人们的生活。
              </p>
              <p>
                当我不在电脑前时，我喜欢探索新事物、阅读和运动。始终保持学习的心态，不断提升自己。
              </p>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">技能</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'JavaScript', level: '熟练' },
                { name: 'React', level: '熟练' },
                { name: 'Node.js', level: '熟悉' },
                { name: 'Python', level: '熟悉' },
                { name: 'Tailwind CSS', level: '熟练' },
                { name: 'Git', level: '熟练' },
                { name: 'Docker', level: '了解' },
                { name: 'Linux', level: '熟悉' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 text-center"
                >
                  <div className="font-medium text-slate-800">{skill.name}</div>
                  <div className="text-sm text-slate-500">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">联系我</h2>
            <p className="text-slate-600 mb-8">
              如果你有任何问题或合作意向，欢迎通过以下方式联系我：
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:kang@example.com"
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                📧 Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                💻 GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© 2026 康煜承。All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
