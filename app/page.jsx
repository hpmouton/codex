import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col"> 
    <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
        <p className="desc text-center">Codex: The Ultimate AI Solution - Explore our AI products and discover how they can transform your business.</p>

        <Feed />
    </h1>
    </section>
    )
}

export default Home