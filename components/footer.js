import ExternalLink from '../components/external-link'

export default () => (
  <footer className="hidden md:block p-2">
    <p className="text-sm text-center">
      Built by <ExternalLink href="https://www.kyrelldixon.com">Kai</ExternalLink><span className="inline-block px-2">|</span>
      Designed by {" "}
      <ExternalLink href="https://dribbble.com/claudioguglieri">Claudio Guglieri</ExternalLink>
    </p>
  </footer>
)