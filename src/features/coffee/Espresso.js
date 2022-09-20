const Espresso = ({ espresso }) => {
  if (espresso) {
    const { name, type, description } = espresso

    return (
      <div className="m-10 text-img-light">
        <h5 className="fw-bold">{name}</h5>
        {description}
      </div>
    )
  }
  return null
}

export default Espresso