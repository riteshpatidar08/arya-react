function Button(props) {
  console.log(props);
  return (
    <div>
      <button className="text-white bg-blue-500 px-10 py-2 rounded-lg">
        {props.title}
      </button>
    </div>
  );
}

export default Button