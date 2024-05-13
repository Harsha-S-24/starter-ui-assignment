export default function Link({ href, children }) {
    return (
      <a href={href} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        {children}
      </a>
    );
  }