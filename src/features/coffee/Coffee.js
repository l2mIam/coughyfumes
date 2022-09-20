const Coffee = ({ coffee }) => {
  if (coffee) {
    const { name, type, description } = coffee

    return (
      <div className="m-10 text-img-dark">
        <h5 className="fw-bold">{name}</h5>
        <h5>Type: {type}</h5>
        {description}
      </div>
    )
  }
  return null
}

export default Coffee