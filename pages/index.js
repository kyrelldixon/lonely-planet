import Destinations from '../components/destinations'
import Menu from '../components/menu'
import Header from '../components/header'
import Footer from '../components/footer'

export default () => (
  <article className="max-w-4xl mx-auto md:pt-32">
    <Header />
    <Menu />
    <Destinations />
    <Footer />
  </article>
)
