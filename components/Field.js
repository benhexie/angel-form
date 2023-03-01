function Field({children, ...props}) {
  return <input value={String(children)} />
}

export default Field