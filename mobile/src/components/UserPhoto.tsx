import { IImageProps, Image } from 'native-base'

type Props = IImageProps & {
  size: number
  alt: string
}

export function UserPhoto({ size, alt, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded={'full'}
      borderWidth={2}
      borderColor={'gray.400'}
      alt={alt}
      {...rest}
    />
  )
}
