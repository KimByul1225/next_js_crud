import Image from 'next/image'

export default function Read(props) {
  return (
    <>
      <h2>
        Read
      </h2>
      <p>parameter : {props.params.id}</p>
    </>
  )
}