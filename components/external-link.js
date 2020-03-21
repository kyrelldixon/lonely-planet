export default ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-red-700 hover:underline"
  >
    {children}
  </a>
)
