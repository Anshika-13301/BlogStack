const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-20 -right-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-3xl mx-auto text-center">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Welcome to BlogStack
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Where Ideas
              <span className="text-blue-600"> Become Stories.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
              BlogStack is a modern blogging platform built for curious minds,
              developers, creators and technology enthusiasts to discover,
              learn and share knowledge.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-blue-600">
                100+
              </h3>
              <p className="text-gray-500 mt-2">
                Articles
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-purple-600">
                7+
              </h3>
              <p className="text-gray-500 mt-2">
                Categories
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-3xl font-bold text-green-600">
                24/7
              </h3>
              <p className="text-gray-500 mt-2">
                Learning
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* What We Cover */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">
            EXPLORE BLOGSTACK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Keep Learning
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore useful content across different areas of technology
            and software development.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
              💻
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Web Development
            </h3>

            <p className="text-gray-600 leading-7">
              Learn about modern frontend and backend technologies,
              frameworks, APIs and development practices.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-50 text-2xl mb-5 group-hover:bg-purple-600 group-hover:text-white transition">
              ⚡
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Programming
            </h3>

            <p className="text-gray-600 leading-7">
              Improve your programming skills with practical concepts,
              problem solving and development tutorials.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-2xl mb-5 group-hover:bg-green-600 group-hover:text-white transition">
              🗄️
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Databases
            </h3>

            <p className="text-gray-600 leading-7">
              Discover database concepts, SQL, data management and
              backend database technologies.
            </p>

          </div>


          {/* Card 4 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-2xl mb-5 group-hover:bg-orange-500 group-hover:text-white transition">
              🎨
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Frontend
            </h3>

            <p className="text-gray-600 leading-7">
              Explore UI development, React, JavaScript, CSS and
              modern frontend techniques.
            </p>

          </div>


          {/* Card 5 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-2xl mb-5 group-hover:bg-red-500 group-hover:text-white transition">
              ⚙️
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Backend
            </h3>

            <p className="text-gray-600 leading-7">
              Learn about servers, APIs, authentication, databases
              and backend application development.
            </p>

          </div>


          {/* Card 6 */}
          <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-50 text-2xl mb-5 group-hover:bg-yellow-500 group-hover:text-white transition">
              🚀
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Technology
            </h3>

            <p className="text-gray-600 leading-7">
              Stay curious and explore useful technology concepts,
              tools and emerging trends.
            </p>

          </div>

        </div>

      </section>


      {/* Mission Section */}
      <section className="bg-gray-900 text-white">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-3xl mx-auto text-center">

            <div className="text-4xl mb-5">
              ✨
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              Our goal is simple — make technology knowledge easier to
              discover, understand and apply. BlogStack brings useful
              articles and practical ideas together in one place.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 md:px-16 text-center">

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>

          <div className="relative">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Explore?
            </h2>

            <p className="text-blue-100 mt-4 max-w-xl mx-auto">
              Discover interesting articles, learn something new and
              keep growing your technical knowledge.
            </p>

            <a
              href="/blogs"
              className="inline-block mt-8 bg-white text-blue-600 font-semibold px-7 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg"
            >
              Explore Blogs →
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;