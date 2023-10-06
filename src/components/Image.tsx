
type ImagePropsType = {
   src: string
}

export function Image(props: ImagePropsType) {
   return (
      <img src={props.src}></img>
   )
}