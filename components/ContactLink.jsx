function ContactLink(props) {
  return (
    <div className="flex items-center space-x-3">
      <div>{props.icon}</div>
      <div>
        <p className="text-xl font-semibold text-white">{props.label}</p>
        {props.url ? (
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-300"
          >
            {props.text}
          </a>
        ) : (
          <p className="text-gray-400">{props.text}</p>
        )}
      </div>
    </div>
  );
}

export default ContactLink;
