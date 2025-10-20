export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container-max py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-2">
          <span className="font-semibold text-brand-blue">The ICI Group</span>
          <span className="mx-2">•</span>
          <span>International Cargo Investigations</span>
          <span className="mx-2">•</span>
          <a
            href="https://www.theicigroup.com"
            className="text-brand-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            theicigroup.com
          </a>
          <span className="mx-2">•</span>
          <a
            href="https://www.linkedin.com/in/curtis-salisbury-ab04a724a/"
            className="text-brand-blue hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-gray-500">
          © {new Date().getFullYear()} The ICI Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
