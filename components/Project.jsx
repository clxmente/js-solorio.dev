function Project(props) {
  return (
    <div className="group relative flex">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-t from-purple-400 to-sky-400 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100"></div>
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-t from-purple-400 to-sky-400 opacity-0 blur-sm transition-all duration-700 ease-in-out group-hover:opacity-100"></div>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <button className="relative w-full rounded-lg border border-gray-700 bg-gray-900 px-7 py-6 transition-all duration-700 ease-in-out group-hover:bg-slate-800">
          <span className="mb-3 block text-left font-semibold text-gray-100">
            {props.title}
          </span>
          <span className="block text-left text-sm text-gray-400">
            {props.description}
          </span>
          <span className="mt-5 flex items-center space-x-5 text-white">
            {props.icons}
          </span>
        </button>
      </a>
    </div>
  );
}

export default Project;
